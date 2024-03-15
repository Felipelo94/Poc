export class Contenido {
  constructor(
    contentfulId,
    cabeceraContenido,
    parrafos,
    parrafos2,
    imagenes,
    imagenesMobile,
    callToAction,
    callToAction2,
    video,
    seo,
    infografico,
    infograficoMobile,
    tipoDeCliente,
    banner,
    widget,
    podcast
  ) {
    this.contentfulId = contentfulId
    this.cabeceraContenido = cabeceraContenido
    this.parrafos = parrafos
    this.parrafos2 = parrafos2
    this.imagenes = imagenes
    this.banner = banner
    this.imagenesMobile = imagenesMobile
    this.callToAction = callToAction
    this.callToAction2 = callToAction2
    this.video = video
    this.seo = seo
    this.infografico = infografico
    this.infograficoMobile = infograficoMobile
    this.tipoDeCliente = tipoDeCliente
    this.widget = widget
    this.podcast = podcast
  }
}
