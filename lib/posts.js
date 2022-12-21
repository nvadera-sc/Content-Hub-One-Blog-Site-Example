import { ContentItemSearchRequest, ContentItemSearchField, Equality, DateTimeField } from "@sitecore/contenthub-one-sdk";
import { getContentItemById, getContentItemsByType } from "./data";

const postsContentTypeId = process.env.CHONE_POSTS_CONTENT_TYPE_ID;

export async function getSortedPostsData() 
{
    const contentItemSearchRequest = new ContentItemSearchRequest()
        .withFieldQuery(ContentItemSearchField.contentType, Equality.Equals, postsContentTypeId)
        .withFieldQuery(ContentItemSearchField.publishedAt, Equality.LessThanOrEquals, Date.now())
        .withSortBy(ContentItemSearchField.publishedAt);
    const contentItems = await getContentItemsByType(contentItemSearchRequest);
    return contentItems.data.map(transformPostToSummary);
}

export async function getAllPostIds() 
{
    // todo: investigate enumeration
    const contentItemSearchRequest = new ContentItemSearchRequest()
        .withFieldQuery(ContentItemSearchField.contentType, Equality.Equals, postsContentTypeId)
        .withFieldQuery(ContentItemSearchField.publishedAt, Equality.LessThanOrEquals, Date.now());
    const contentItems = await getContentItemsByType(contentItemSearchRequest);
    return contentItems.data.map(transformPostToId);
}

export async function getPostData(id)
{
    const contentItem = await getContentItemById(id);
    return transformPostToDetail(contentItem);
}

const transformPostToDetail = postItem => 
{
    return {
        id: postItem.id,
        date: postItem.system.publishedAt,
        title: postItem.name,
        body: postItem.fields.body
    }
}

const transformPostToSummary = postItem => 
{
    return {
        id: postItem.id,
        date: postItem.system.publishedAt,
        title: postItem.name,
    }
}

const transformPostToId = postItem => 
{
    return postItem.id
}