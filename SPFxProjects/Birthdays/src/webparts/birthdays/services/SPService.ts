import { WebPartContext } from "@microsoft/sp-webpart-base";
import { SPHttpClient, SPHttpClientResponse } from '@microsoft/sp-http';

export class SPSerice {
  constructor(private context: WebPartContext) {
  }

  getSpData(apiUrl: string) {
    return this.context.spHttpClient.get(apiUrl,
      SPHttpClient.configurations.v1)
      .then((response: SPHttpClientResponse): Promise<{ value: any[] }> => {
        return response.json();
      })
  }

  getSPListItems(siteUrl: string, listName: string, oData: string = '') {

    let apiUrl = siteUrl + `/_api/web/lists/getbytitle('${listName}')/items`;

    return this.getSpData(apiUrl);
  }
}