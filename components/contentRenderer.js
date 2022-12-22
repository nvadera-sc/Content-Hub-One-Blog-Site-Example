import RichTextRenderer from "./richTextRenderer";

export default function ContentRenderer({ contentData })
{
    switch(contentData.type)
    {
        case "RichText":
            return (<RichTextRenderer document={contentData.value} />);
        default:
            return;
    }
}