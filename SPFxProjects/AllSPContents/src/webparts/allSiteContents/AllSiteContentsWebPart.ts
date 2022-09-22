import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneToggle
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { IReadonlyTheme } from '@microsoft/sp-component-base';
import { SPComponentLoader } from "@microsoft/sp-loader";

import styles from './AllSiteContentsWebPart.module.scss';
import * as strings from 'AllSiteContentsWebPartStrings';
import { SPSerice } from './services/SPService';

export interface IAllSiteContentsWebPartProps {
  description: string;
  siteUrl: string;
  myToggle: boolean;
}

export default class AllSiteContentsWebPart extends BaseClientSideWebPart<IAllSiteContentsWebPartProps> {

  private _isDarkTheme: boolean = false;
  private _environmentMessage: string = '';
  private service: SPSerice;

  public render(): void {
    SPComponentLoader.loadCss("https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css");

    let apiUrl = this.context.pageContext.site.absoluteUrl + '/_api/web/lists?$filter=Hidden eq false&$select=Title,ItemCount&$orderby=ItemCount desc';

    //Test Reading SharePoint data

    this.service.getSpData(apiUrl)
      .then(response => {
        console.log('Data from SP...', response.value);
        let lists = response.value;
        let listHtml = '';
        for(let list of lists ){
          listHtml += `
          <div>
            <a class="btn btn-info mb-2" href="#" target="_blank">
              ${list.Title} <span class="badge badge-light">(${list.ItemCount})</span>
            </a>
          </div>`;            
        }
        this.domElement.innerHTML = `
          <section class="${styles.allSiteContents} ${!!this.context.sdks.microsoftTeams ? styles.teams : ''}">
            <h2>${this.properties.description}</h2>     
            <hr>
            ${listHtml}
            
          </section>`;
      },
        error => {
          console.error('Oops error occured ...', error);
          this.domElement.innerHTML = `
          <section class="${styles.allSiteContents} ${!!this.context.sdks.microsoftTeams ? styles.teams : ''}">
            <h2>${this.properties.description}</h2>     
            <hr>
            ${JSON.stringify(error)}            
          </section>`;
        });
    //End testing

    
  }

  protected onInit(): Promise<void> {
    this._environmentMessage = this._getEnvironmentMessage();
    this.service = new SPSerice(this.context);

    return super.onInit();
  }

  private _getEnvironmentMessage(): string {
    if (!!this.context.sdks.microsoftTeams) { // running in Teams
      return this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentTeams : strings.AppTeamsTabEnvironment;
    }

    return this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentSharePoint : strings.AppSharePointEnvironment;
  }

  protected onThemeChanged(currentTheme: IReadonlyTheme | undefined): void {
    if (!currentTheme) {
      return;
    }

    this._isDarkTheme = !!currentTheme.isInverted;
    const {
      semanticColors
    } = currentTheme;

    if (semanticColors) {
      this.domElement.style.setProperty('--bodyText', semanticColors.bodyText || null);
      this.domElement.style.setProperty('--link', semanticColors.link || null);
      this.domElement.style.setProperty('--linkHovered', semanticColors.linkHovered || null);
    }

  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected get disableReactivePropertyChanges(): boolean {
    return true;
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: "General Settings"
          },
          groups: [
            {
              groupName: "General Info",
              groupFields: [
                PropertyPaneTextField('description', {
                  label: "Webpart Title"
                }),
                PropertyPaneTextField('siteUrl', {
                  label: "Site Url",
                  disabled: !this.properties.myToggle
                }),
                PropertyPaneToggle('myToggle', {
                  label: 'Activate',
                  onText: "Active",
                  offText: "Inactive"
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
