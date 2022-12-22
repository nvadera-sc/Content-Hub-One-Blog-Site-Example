import { Renderer } from "@cristata/prosemirror-to-html-js";

export default function RichTextRenderer({ document })
{
    const html = new Renderer().render(document);
    return (<div dangerouslySetInnerHTML={{ __html: html }} />);
}