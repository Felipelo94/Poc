export const gtmTSHComponentShare = (label, Landing) => ({
  close: {
    category: Landing,
    action: 'ClicContenidos' + label ? label : '',
    label: 'ComparteEsteContenido-Cerrar'
  },
  email: {
    category: Landing,
    action: `ClicContenidos ${label ? label : ''}`,
    label: 'ComparteEsteContenido-ViaEmail'
  },
  copyLink: {
    category: Landing,
    action: `ClicContenidos ${label ? label : ''}`,
    label: 'ComparteEsteContenido-CopiarEnlace'
  },
  facebook: {
    category: Landing,
    action: `ClicContenidos ${label ? label : ''}`,
    label: 'ComparteEsteContenido-Facebook'
  },
  twitter: {
    category: Landing,
    action: `ClicContenidos ${label ? label : ''}`,
    label: 'ComparteEsteContenido-Twitter'
  },
  linkedin: {
    category: Landing,
    action: `ClicContenidos ${label ? label : ''}`,
    label: 'ComparteEsteContenido-Linkedin'
  }
})

export const gtmTSHPodcastComponentShare = {
  copyLink: {
    category: 'LandingOfertas',
    action: 'ClicPodcastCompartir',
    label: 'CopiarEnlace'
  },
  facebook: {
    category: 'LandingOfertas',
    action: 'ClicPodcastCompartir',
    label: 'Facebook'
  },
  twitter: {
    category: 'LandingOfertas',
    action: 'ClicPodcastCompartir',
    label: 'Twitter'
  },
  linkedin: {
    category: 'LandingOfertas',
    action: 'ClicPodcastCompartir',
    label: 'Linkedin'
  }
}
