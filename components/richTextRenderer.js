export default function RichTextRenderer(props, key)
{
    debugger;
    switch(props.type)
    {
        case "doc":
            return (<section key={key}>{props.content.map(RichTextRenderer)}</section>);
        case "paragraph":
            return (<p key={key}>{props.content.map(RichTextRenderer)}</p>);
        case "text":
            return props.text;
        default:
            debugger;
            console.log("Unknown content type", props.type);
            return (<div></div>);
    }
}