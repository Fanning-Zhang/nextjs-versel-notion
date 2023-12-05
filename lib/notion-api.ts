import { NotionAPI } from 'notion-client'
// The NotionAPI class is imported from the Notion client library.
// notion is an instance of NotionAPI, which is used to call the Notion API to get the data of the specified Notion page.

export const notion = new NotionAPI({
  apiBaseUrl: process.env.NOTION_API_BASE_URL
})
