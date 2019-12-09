/*!

=========================================================
* Black Dashboard PRO React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-pro-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes
// react plugin used to create charts
import { Line } from "react-chartjs-2";
// react plugin for creating vector maps

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
} from "reactstrap";

// core components
import {
  chartExample1,
} from "variables/charts.jsx";
const chartColor = '#FFFFFF';

let stockApi = async () => {
  const data = await fetch('https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=GOOGL&apikey=UR7CD7OWCCPKBSBG');
  const response = await data.json();
  const TIME_SERIES_MONTHLY = Object.fromEntries(Object.entries(response['Monthly Time Series']).slice(0, 12));
  const highVals = (Object.values(TIME_SERIES_MONTHLY).map(Obj => Number(Obj['2. high'])))
  return highVals
};

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bigChartData: "data1",
      chartData: null
    };
  }
  data = (canvas) => {
    stockApi().then(data => {
      console.log(data)
      this.setState({
        chartData: data
      })
    }).catch(err => {})
    var ctx = canvas.getContext("2d");

    var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, '#80b6f4');
    gradientStroke.addColorStop(1, chartColor);

    var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, "rgba(249, 99, 59, 0.40)");
    return {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [{
            label: "High",
            borderColor: "#f96332",
            pointBorderColor: "#FFF",
            pointBackgroundColor: "#f96332",
            pointBorderWidth: 2,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 1,
            pointRadius: 4,
            fill: true,
            backgroundColor: gradientFill,
            borderWidth: 2,
            data: this.state.chartData || [542, 480, 430, 550, 530, 453, 380, 434, 568, 610, 700, 630]
        }]
    }
};
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col xs="12">
              <Card className="card-chart">
                <CardHeader>
                  <Row>
                    <Col className="text-left" sm="6">
                      <h5 className="card-category">Google Stock</h5>
                      <CardTitle tag="h2">High Trends</CardTitle>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    {
                      <Line
                      data={this.data}
                      options={chartExample1.options}
                      />
                    }
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Dashboard;
