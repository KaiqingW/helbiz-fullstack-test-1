const { RESTDataSource } = require('apollo-datasource-rest');

class BikeAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.helbiz.com/admin/reporting/arlington/gbfs/';
  }
  
  async getVehicleStatus() {
    const response = await this.get('free_bike_status.json');
    return response;
  }

  async getData(){
    const response = await this.get('free_bike_status.json');
    return response.data;
  }

  async getAllbikes(){
    const response = await this.get('free_bike_status.json');
    const bikes = response.data.bikes;
    return Array.isArray(bikes)? bikes: [];
  }

  async getBikeById({bikeId}){
    const response = await this.get('free_bike_status.json');
    const bikes = response.data.bikes;
    return bikes.find(b => b.bike_id === bikeId);
  }
}

module.exports = BikeAPI;