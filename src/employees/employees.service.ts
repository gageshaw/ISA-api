import { Injectable, Inject } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { KNEX_CONNECTION } from '@nestjsplus/knex';
import axios from "axios"

@Injectable()
export class EmployeesService {
  @Inject(KNEX_CONNECTION) private readonly knex;

  create(createEmployeeDto: CreateEmployeeDto) {
    return 'This action adds a new employee';
  }

  findAll(intuitQuickbooks: any){
    // We have access to the OAuthIntuit objects, so we can make calls knowing the aproprpiate URI to hit
    const companyID = intuitQuickbooks.getToken().realmId;
    
    
    const stuff =  axios.get("https://rest.tsheets.com/api/v1/current_user", {headers: {
      Authorization: "Bearer " + "S.18__a8d4ddbc765d5fab455e0f0c13afc3c46470a929"
    }}).then(response => {
      
        const users =  response.data.results; 
        return users;
    }).catch(error => console.log(error));

    return stuff
    // return this.appService.oauthClient.makeApiCall({url: url + 'v3/company/' + companyID +'/companyinfo/' + companyID})
    //     .then(function(authResponse){
    //         console.log("The response for API call is :"+JSON.stringify(authResponse, null, 2));
    //         const company_data = (JSON.parse(authResponse.text()))
    //         return(company_data.CompanyInfo.CompanyName);
    //     })
    //     .catch(function(e) {
    //         console.error(e);
    //     });

  }

  async findOne(uidPassed: string): Promise<string> {
    const user = await this.knex('employees').where({ firstname: uidPassed });
    console.log(user);
    return user;
  }

  update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    return `This action updates a #${id} employee`;
  }

  remove(id: number) {
    return `This action removes a #${id} employee`;
  }
}
