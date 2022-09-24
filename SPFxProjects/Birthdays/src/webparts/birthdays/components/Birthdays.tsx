import * as React from 'react';
import styles from './Birthdays.module.scss';
import { IBirthdaysProps } from './IBirthdaysProps';

import { Placeholder } from "@pnp/spfx-controls-react/lib/Placeholder";


export default class Birthdays extends React.Component<IBirthdaysProps, {}> {
  public render(): React.ReactElement<IBirthdaysProps> {
    const {
      description,
      isDarkTheme,
      environmentMessage,
      hasTeamsContext,
      userDisplayName
    } = this.props;

    console.log('Props value ', this.props);

    return (
      <section className={`${styles.birthdays} ${hasTeamsContext ? styles.teams : ''}`}>
        <h1>{description}</h1>
        {this.props.listId ?
          '' :
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
