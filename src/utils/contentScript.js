export function contentScript(script) {
  const scripts = document.body.getElementsByTagName('script')
  /*if (!scripts.hasOwnProperty('content-title-id')) {
    const scriptsTitle = document.createElement("script");
    scriptsTitle.src = script
    scriptsTitle.type = "text/javascript"
    scriptsTitle.id = "content-title-id"
    document.body.appendChild(scriptsTitle)
  }*/
}
