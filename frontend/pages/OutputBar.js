import React, { Component } from 'react';

import ColorBar from 'react-color-bar';

export default class ColorOutput extends Component {
    render() {
        const data = [
              {
                  value: 100,
                  color: '#21bbce',
                  legendLabel: 'Low Risk',
                  legendValue: 300,
                  tooltip: 'interest is $300',
              }, {
                  value: 100,
                  color: '#4bc97d',
                  legendLabel: 'Medium Risk',
                  legendValue: 200,
                  tooltip: 'tax is $200',
              }, {
                  value: 100,
                  color: '#eb5be1',
                  legendLabel: 'High Risk',
                  legendValue: 100,
                  tooltip: 'insurance is $100',
              },
          ];
          return (
            <div>
                <ColorBar data={data} />
            </div>
        );
    }
}
