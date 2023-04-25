import {Button, Page,Footer, LabelText,Link, Table} from "govuk-react";
import React, { useState,useEffect } from 'react';
import { useLocation } from "react-router-dom";
import $ from 'jquery';

function ViewMR(props) {
  const [data, setData] = useState(null);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const nhs = searchParams.get("nhs");

  useEffect(() => {
    // Make an API call to fetch the user details
    $.ajax({
        url: `http://localhost:4000/med.php?nhs=${nhs}`,
        method: "GET",
        dataType: "json",
        success: (response) => {
          console.log("Server response: ",response);
          setData(response);
        },
        error: (error) => console.log(error)
      });
    }, [nhs]);

  if (!data) {
    return (
      <Page>
        <h1>Loading...</h1>
      </Page>
    );
  }  
     return (
    <Page>
      <LabelText><h1><center>View Medical Records Page</center></h1></LabelText>
 
   <br/>
   <br/>
      <div>
        <p>Your NHS number is: {nhs}</p>
        <Table>
          <Table.Row>
            <Table.CellHeader>DoseNum</Table.CellHeader>
            <Table.Cell>{data.DoseNo}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.CellHeader>vaccinationDate</Table.CellHeader>
            <Table.Cell>{data.VaccinationDate}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.CellHeader>vaccineManufacturer</Table.CellHeader>
            <Table.Cell>{data.VaccineManufacturer}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.CellHeader>diseaseTargeted</Table.CellHeader>
            <Table.Cell>{data.DiseaseTargeted}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.CellHeader>vaccineType</Table.CellHeader>
            <Table.Cell>{data.VaccineType}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.CellHeader>product</Table.CellHeader>
            <Table.Cell>{data.Product}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.CellHeader>vaccineBatchNumber</Table.CellHeader>
            <Table.Cell>{data.VaccineBatchNumber}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.CellHeader>countryOfVaccination</Table.CellHeader>
            <Table.Cell>{data.CountryOfVaccination}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.CellHeader>authority</Table.CellHeader>
            <Table.Cell>{data.Authority}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.CellHeader>totalSeriesOfDoses</Table.CellHeader>
            <Table.Cell>{data.TotalSeriesOfDoses}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.CellHeader>displayName</Table.CellHeader>
            <Table.Cell>{data.DisplayName}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.CellHeader>snomedCode</Table.CellHeader>
            <Table.Cell>{data.SnomedCode}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.CellHeader>dateEntered</Table.CellHeader>
            <Table.Cell>{data.DateEntered}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.CellHeader>procedureCode</Table.CellHeader>
            <Table.Cell>{data.ProcedureCode}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.CellHeader>booster</Table.CellHeader>
            <Table.Cell>{data.Booster}</Table.Cell>
          </Table.Row>
        </Table>
      </div>
    <br/>
    <br/>
    <br/>
    <Link href="./Rconfirm">
    <center>
      <div className="update">
      <Button>Update GP Records</Button>
      </div>
      </center>
      </Link>
    <div className="footer">
      <Footer 
  copyright={{
    image: {
      height: 102,
      src: 'https://ministryofinjustice.co.uk/wp-content/uploads/2022/03/Crown-Copyright.jpg',
      width: 125
    },
    link: 'https://www.nationalarchives.gov.uk/information-management/re-using-public-sector-information/uk-government-licensing-framework/crown-copyright/',
    
  }}
 />
 </div>
 </Page>
  );
}


export default ViewMR;