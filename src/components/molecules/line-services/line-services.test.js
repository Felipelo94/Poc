import React from 'react'
import renderer from 'react-test-renderer'
import LineServices from './line-services'

describe('Button', () => {
  const data = {
    nombre: 'Líneas de Servicio',
    id: '2vn2SgPCl0kmJMiXjTU58N',
    dateImage: {
      file: {
        url:
          '//images.ctfassets.net/y3qdch79qxiw/48BFPsjoP48mydFjfpucK5/d799430c5ed91913e40551ef16adb51e/asesor__a.png',
        fileName: 'asesoría.png'
      }
    },
    textoIntroductorio: {
      textoIntroductorio:
        'En las líneas de atención podrás encontrar información ágil y oportuna sobre nuestros productos y servicios. Acá te contamos cuáles trámites puedes hacer a través de este medio y a cuál número te puedes comunicar, según tu ciudad de residencia:'
    },
    cuerpocontenido: {
      cuerpocontenido:
        '{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[],"value":"¿Qué puedes hacer?","nodeType":"text"}],"nodeType":"heading-6"},{"data":{},"content":[{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[],"value":"Solicitar asesoría y consultas generares de productos y servicios","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"list-item"}],"nodeType":"unordered-list"},{"data":{},"content":[{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[],"value":"Actualizar tus datos","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"list-item"}],"nodeType":"unordered-list"},{"data":{},"content":[{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[],"value":"Afiliarte a Pensión Obligatoria, Mi reserva y +Protección","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"list-item"}],"nodeType":"unordered-list"},{"data":{},"content":[{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[],"value":"Consultar horarios y ubicación de oficinas","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"list-item"}],"nodeType":"unordered-list"},{"data":{},"content":[{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[],"value":"Solicitar soporte web y app","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"list-item"}],"nodeType":"unordered-list"},{"data":{},"content":[{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[],"value":"Hacerle seguimiento a tus solicitudes de pensión","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"list-item"}],"nodeType":"unordered-list"},{"data":{},"content":[{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[],"value":"Solicitar certificados y extractos","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"list-item"}],"nodeType":"unordered-list"},{"data":{},"content":[{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[],"value":"Consultar saldos y movimientos","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"list-item"}],"nodeType":"unordered-list"},{"data":{},"content":[{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[],"value":"Gestionar clave de ingreso al portal web","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"list-item"}],"nodeType":"unordered-list"},{"data":{},"content":[{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[],"value":"Consultar consignación de Cesantías","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"list-item"}],"nodeType":"unordered-list"},{"data":{},"content":[{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[],"value":"Solicitar retiro de Cesantías","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"list-item"}],"nodeType":"unordered-list"},{"data":{},"content":[{"data":{},"marks":[],"value":"","nodeType":"text"}],"nodeType":"paragraph"},{"data":{},"content":[{"data":{},"marks":[],"value":"¿Cuáles son los números?","nodeType":"text"}],"nodeType":"heading-6"},{"data":{},"content":[{"data":{},"marks":[{"type":"bold"}],"value":"Línea de Servicio Protección","nodeType":"text"}],"nodeType":"paragraph"},{"data":{},"content":[{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[],"value":"Resto del país desde una línea fija al: ","nodeType":"text"},{"data":{},"marks":[{"type":"bold"}],"value":"01 8000 52 8000","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"list-item"}],"nodeType":"unordered-list"},{"data":{},"content":[{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[],"value":"Bogotá: ","nodeType":"text"},{"data":{},"marks":[{"type":"bold"}],"value":"(031) 744 44 64","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"list-item"}],"nodeType":"unordered-list"},{"data":{},"content":[{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[],"value":"Medellín: ","nodeType":"text"},{"data":{},"marks":[{"type":"bold"}],"value":"(034) 510 90 99","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"list-item"}],"nodeType":"unordered-list"},{"data":{},"content":[{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[],"value":"Barranquilla: ","nodeType":"text"},{"data":{},"marks":[{"type":"bold"}],"value":"(035) 319 79 99","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"list-item"}],"nodeType":"unordered-list"},{"data":{},"content":[{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[],"value":"Cartagena: ","nodeType":"text"},{"data":{},"marks":[{"type":"bold"}],"value":"(035) 642 49 99","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"list-item"}],"nodeType":"unordered-list"},{"data":{},"content":[{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[],"value":"Cali: ","nodeType":"text"},{"data":{},"marks":[{"type":"bold"}],"value":"(032) 510 90 99","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"list-item"}],"nodeType":"unordered-list"},{"data":{},"content":[{"data":{},"marks":[],"value":"","nodeType":"text"}],"nodeType":"paragraph"},{"data":{},"content":[{"data":{},"marks":[{"type":"bold"}],"value":"Horarios de atención de nuestras Oficinas de Servicio: ","nodeType":"text"}],"nodeType":"paragraph"},{"data":{},"content":[{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[],"value":"Lunes a viernes: ","nodeType":"text"},{"data":{},"marks":[{"type":"bold"}],"value":"7:30 a.m. a 8:00 p.m.","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"list-item"}],"nodeType":"unordered-list"},{"data":{},"content":[{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[],"value":"Sábado: ","nodeType":"text"},{"data":{},"marks":[{"type":"bold"}],"value":"8:00 a.m. a 1:00 p.m.","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"list-item"}],"nodeType":"unordered-list"},{"data":{},"content":[{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[],"value":"Doble Asesoría: lunes a viernes ","nodeType":"text"},{"data":{},"marks":[{"type":"bold"}],"value":"8:00 a.m. a 6:00 p.m.","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"list-item"}],"nodeType":"unordered-list"},{"data":{},"content":[{"data":{},"marks":[],"value":"","nodeType":"text"}],"nodeType":"paragraph"},{"data":{},"content":[{"data":{},"marks":[],"value":"\\n","nodeType":"text"}],"nodeType":"paragraph"},{"data":{},"content":[{"data":{},"marks":[],"value":"","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"document"}'
    },
    title: 'Líneas de Servicio',
    subtitle:
      'En las líneas de atención podrás encontrar información ágil y oportuna sobre nuestros productos y servicios. Acá te contamos cuáles trámites puedes hacer a través de este medio y a cuál número te puedes comunicar, según tu ciudad de residencia:',
    image:
      '//images.ctfassets.net/y3qdch79qxiw/48BFPsjoP48mydFjfpucK5/d799430c5ed91913e40551ef16adb51e/asesor__a.png',
    textoCallToAction: 'Llámanos a un clic',
    linkCallToAction:
      'https://asistencia.webv2.allus.com.co/WebAPI802/ClicktoCallProteccion/ClicktoCall/customer.jsp',
    textoCallToAction2: 'Agenda tu llamada',
    linkCallToAction2:
      'https://asistencia.webv2.allus.com.co/WebAPI802/ChatProteccionv1/AdvancedChat/horario.html',
    descripcionCallToAction:
      'También puedes llamarnos desde tu computador o agendar una llamada'
  }

  const dataNull = {
    nombre: 'Líneas de Servicio',
    id: '2vn2SgPCl0kmJMiXjTU58N',
    dateImage: {
      file: {
        url:
          '//images.ctfassets.net/y3qdch79qxiw/48BFPsjoP48mydFjfpucK5/d799430c5ed91913e40551ef16adb51e/asesor__a.png',
        fileName: 'asesoría.png'
      }
    },
    textoIntroductorio: {
      textoIntroductorio:
        'En las líneas de atención podrás encontrar información ágil y oportuna sobre nuestros productos y servicios. Acá te contamos cuáles trámites puedes hacer a través de este medio y a cuál número te puedes comunicar, según tu ciudad de residencia:'
    },
    cuerpocontenido: {
      cuerpocontenido:
        '{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[],"value":"¿Qué puedes hacer?","nodeType":"text"}],"nodeType":"heading-6"},{"data":{},"content":[{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[],"value":"Solicitar asesoría y consultas generares de productos y servicios","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"list-item"}],"nodeType":"unordered-list"},{"data":{},"content":[{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[],"value":"Actualizar tus datos","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"list-item"}],"nodeType":"unordered-list"},{"data":{},"content":[{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[],"value":"Afiliarte a Pensión Obligatoria, Mi reserva y +Protección","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"list-item"}],"nodeType":"unordered-list"},{"data":{},"content":[{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[],"value":"Consultar horarios y ubicación de oficinas","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"list-item"}],"nodeType":"unordered-list"},{"data":{},"content":[{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[],"value":"Solicitar soporte web y app","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"list-item"}],"nodeType":"unordered-list"},{"data":{},"content":[{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[],"value":"Hacerle seguimiento a tus solicitudes de pensión","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"list-item"}],"nodeType":"unordered-list"},{"data":{},"content":[{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[],"value":"Solicitar certificados y extractos","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"list-item"}],"nodeType":"unordered-list"},{"data":{},"content":[{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[],"value":"Consultar saldos y movimientos","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"list-item"}],"nodeType":"unordered-list"},{"data":{},"content":[{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[],"value":"Gestionar clave de ingreso al portal web","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"list-item"}],"nodeType":"unordered-list"},{"data":{},"content":[{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[],"value":"Consultar consignación de Cesantías","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"list-item"}],"nodeType":"unordered-list"},{"data":{},"content":[{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[],"value":"Solicitar retiro de Cesantías","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"list-item"}],"nodeType":"unordered-list"},{"data":{},"content":[{"data":{},"marks":[],"value":"","nodeType":"text"}],"nodeType":"paragraph"},{"data":{},"content":[{"data":{},"marks":[],"value":"¿Cuáles son los números?","nodeType":"text"}],"nodeType":"heading-6"},{"data":{},"content":[{"data":{},"marks":[{"type":"bold"}],"value":"Línea de Servicio Protección","nodeType":"text"}],"nodeType":"paragraph"},{"data":{},"content":[{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[],"value":"Resto del país desde una línea fija al: ","nodeType":"text"},{"data":{},"marks":[{"type":"bold"}],"value":"01 8000 52 8000","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"list-item"}],"nodeType":"unordered-list"},{"data":{},"content":[{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[],"value":"Bogotá: ","nodeType":"text"},{"data":{},"marks":[{"type":"bold"}],"value":"(031) 744 44 64","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"list-item"}],"nodeType":"unordered-list"},{"data":{},"content":[{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[],"value":"Medellín: ","nodeType":"text"},{"data":{},"marks":[{"type":"bold"}],"value":"(034) 510 90 99","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"list-item"}],"nodeType":"unordered-list"},{"data":{},"content":[{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[],"value":"Barranquilla: ","nodeType":"text"},{"data":{},"marks":[{"type":"bold"}],"value":"(035) 319 79 99","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"list-item"}],"nodeType":"unordered-list"},{"data":{},"content":[{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[],"value":"Cartagena: ","nodeType":"text"},{"data":{},"marks":[{"type":"bold"}],"value":"(035) 642 49 99","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"list-item"}],"nodeType":"unordered-list"},{"data":{},"content":[{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[],"value":"Cali: ","nodeType":"text"},{"data":{},"marks":[{"type":"bold"}],"value":"(032) 510 90 99","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"list-item"}],"nodeType":"unordered-list"},{"data":{},"content":[{"data":{},"marks":[],"value":"","nodeType":"text"}],"nodeType":"paragraph"},{"data":{},"content":[{"data":{},"marks":[{"type":"bold"}],"value":"Horarios de atención de nuestras Oficinas de Servicio: ","nodeType":"text"}],"nodeType":"paragraph"},{"data":{},"content":[{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[],"value":"Lunes a viernes: ","nodeType":"text"},{"data":{},"marks":[{"type":"bold"}],"value":"7:30 a.m. a 8:00 p.m.","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"list-item"}],"nodeType":"unordered-list"},{"data":{},"content":[{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[],"value":"Sábado: ","nodeType":"text"},{"data":{},"marks":[{"type":"bold"}],"value":"8:00 a.m. a 1:00 p.m.","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"list-item"}],"nodeType":"unordered-list"},{"data":{},"content":[{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[],"value":"Doble Asesoría: lunes a viernes ","nodeType":"text"},{"data":{},"marks":[{"type":"bold"}],"value":"8:00 a.m. a 6:00 p.m.","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"list-item"}],"nodeType":"unordered-list"},{"data":{},"content":[{"data":{},"marks":[],"value":"","nodeType":"text"}],"nodeType":"paragraph"},{"data":{},"content":[{"data":{},"marks":[],"value":"\\n","nodeType":"text"}],"nodeType":"paragraph"},{"data":{},"content":[{"data":{},"marks":[],"value":"","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"document"}'
    },
    title: 'Líneas de Servicio',
    subtitle:
      'En las líneas de atención podrás encontrar información ágil y oportuna sobre nuestros productos y servicios. Acá te contamos cuáles trámites puedes hacer a través de este medio y a cuál número te puedes comunicar, según tu ciudad de residencia:',
    image:
      '//images.ctfassets.net/y3qdch79qxiw/48BFPsjoP48mydFjfpucK5/d799430c5ed91913e40551ef16adb51e/asesor__a.png',
    textoCallToAction: null,
    linkCallToAction: null,
    textoCallToAction2: null,
    linkCallToAction2: null,
    descripcionCallToAction:
      'También puedes llamarnos desde tu computador o agendar una llamada'
  }

  it('renders correctly without props', () => {
    const tree = renderer
      .create(
        <LineServices
          accessibility={{ fontSize: 3, lineSize: 8 }}
          dataHeader={data}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders data null', () => {
    const tree = renderer
      .create(
        <LineServices
          accessibility={{ fontSize: 3, lineSize: 5 }}
          dataHeader={dataNull}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders data null link', () => {
    let dataMo = dataNull
    dataMo.textoCallToAction = 'asdasd'
    dataMo.linkCallToAction2 = 'dfsdfsdf'
    const tree = renderer
      .create(
        <LineServices
          accessibility={{ fontSize: 3, lineSize: 8 }}
          dataHeader={dataMo}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders data null link', () => {
    let dataMo = dataNull
    dataMo.textoCallToAction2 = 'asdasd'
    dataMo.linkCallToAction = 'dfsdfsdf'
    const tree = renderer
      .create(
        <LineServices
          accessibility={{ fontSize: 3, lineSize: 4 }}
          dataHeader={dataMo}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
