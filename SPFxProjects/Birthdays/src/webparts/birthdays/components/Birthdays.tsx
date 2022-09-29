import * as React from 'react';
import styles from './Birthdays.module.scss';
import { IBirthdaysProps } from './IBirthdaysProps';

import { Placeholder } from "@pnp/spfx-controls-react/lib/Placeholder";
import { LivePersona } from "@pnp/spfx-controls-react/lib/LivePersona";
import { SPSerice } from '../services/SPService';
import { IPersonaStyles, Persona } from 'office-ui-fabric-react';

import './styles.css'

export interface IBirthdasState {
  items: any[];
}


export default class Birthdays extends React.Component<IBirthdaysProps, IBirthdasState> {

  service: SPSerice;

  constructor(props: IBirthdaysProps) {
    super(props);
    this.state = { items: [] };
    this.service = new SPSerice(this.props.spContext);
  }

  componentDidMount(): void {
    let today = new Date();
    let currentMonth = today.getMonth() + 1;
    let todayDate = today.getDate();


    if (this.props.listId) {
      let url = `${this.props.spContext.pageContext.web.absoluteUrl}/_api/web/lists(guid'${this.props.listId}')/items?$select=*,Employee/Title, Employee/EMail&$expand=Employee&$filter=Month ge ${currentMonth}&$orderby=Month asc`
      this.service.getSpData(url)
        .then(response => {
          let items = response.value;
          let upcoming: any[] = [];
          for (let item of items) {
            if (item.Month > currentMonth || (item.Month == currentMonth && item.Date >= todayDate)) {
              upcoming.push(item);
            }
          }
          this.setState({ items: upcoming })
        },
          error => {
            console.error('Oops error occured ...', error);
          });
    }

  }

  public render(): React.ReactElement<IBirthdaysProps> {
    const {
      description,
      isDarkTheme,
      environmentMessage,
      hasTeamsContext,
      userDisplayName
    } = this.props;

    const personaStyles: Partial<IPersonaStyles> = { root: { margin: '0 0 10px 0' } };
    return (
      <section className={`${styles.birthdays} ${hasTeamsContext ? styles.teams : ''}`}>
        <h1>{description}</h1>
        {this.props.listId ?
          this.state.items.map(item =>
            <LivePersona upn={item.Employee.EMail} disableHover={false}
              template={
                <>
                  <Persona
                    styles={personaStyles}
                    imageUrl={`${this.props.spContext.pageContext.site.absoluteUrl}/_layouts/15/userphoto.aspx?size=L&username=${item.Employee.EMail}`}
                    text={item.Employee.Title}
                    secondaryText={this.getMonthText(item.Month) + item.Date}                    
                    coinSize={120} />
                  <hr></hr>
                </>
              }
              serviceScope={this.props.spContext.serviceScope}
            />
          ) :
          <Placeholder iconName='Edit'
            iconText='Configure your web part'
            description='Please configure the web part.'
            buttonLabel='Configure'
            onConfigure={this._onConfigure}
          />
        }
      </section>
    );
  }

  getMonthText(month: number) {
    let m = '';
    switch (month) {
      case 1:
        m = "JAN ";
        break;
      case 2:
        m = "FEB ";
        break;
      case 3:
        m = "MAR ";
        break;
      case 4:
        m = "APR ";
        break;
      case 5:
        m = "MAY ";
        break;
      case 6:
        m = "JUN ";
        break;
      case 7:
        m = "JUL ";
        break;
      case 8:
        m = "AUG ";
        break;
      case 9:
        m = "SEP ";
        break;
      case 10:
        m = "OCT ";
        break;
      case 11:
        m = "NOV ";
        break;
      case 12:
        m = "DEC ";
        break;
    }
    return m;
  }

  private _onConfigure = () => {
    // Context of the web part
    this.props.spContext.propertyPane.open();
  }
}


const MyCard = (props: any) => {
  return (
    <div>
      <h1>{props.Title}</h1>
      <p>{props.Description}</p>
      <div>
        <h2>Some other header</h2>
      </div>
    </div>
  );
}
