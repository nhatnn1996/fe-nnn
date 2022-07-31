const ParseHTML = ({ content }) => {
  const funcReplace = (data, url, hehe) => {
    const result = process.env.API_URL + data;
    const contentReplace = result;
    return contentReplace;
  };
  let result = content.replace(/\/uploads\//g, funcReplace);
  result = result.replace(
    /font-family:&quot;times new roman&quot;, times;/g,
    ""
  );
  result = result.replace(
    /font-family:'Times New Roman', Times, serif/g,
    ""
  );
  return (
    <div
      dangerouslySetInnerHTML={{ __html: result }}
      className="html_block"
    ></div>
  );
};

export default ParseHTML;
