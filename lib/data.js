import { ClientCredentialsScheme, ContentHubOneClientFactory } from "@sitecore/contenthub-one-sdk";

const oauthClientId = process.env.CHONE_OAUTH_CLIENT_ID;
const oauthClientSecret = process.env.CHONE_OAUTH_CLIENT_SECRET;
let _client;

export const getContentType = async (contentTypeId) =>
{
    return await getClient().contentTypes.singleAsync(contentTypeId);
}

export const getContentItemsByType = async (contentItemSearchRequest) =>
{
    return await getClient().contentItems.getAsync(contentItemSearchRequest);
}

export const getContentItemById = async (contentItemId) =>
{
    return await getClient().contentItems.singleAsync(contentItemId);
}
  
const getClient = () => 
{
    if(!_client)
    {
        const credentials = new ClientCredentialsScheme(oauthClientId, oauthClientSecret);
        _client = ContentHubOneClientFactory.create(credentials)
    }
    return _client;
}
  