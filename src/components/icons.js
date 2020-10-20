import React from "react"
import { library } from "@fortawesome/fontawesome-svg-core"
import {
  faMapMarkerAlt,
  faMobileAlt,
  faChevronRight,
  faBars,
  faTimes,
  faPhone,
  faFilePdf,
} from "@fortawesome/free-solid-svg-icons"
import { faEnvelope, faClock } from "@fortawesome/free-regular-svg-icons"
import {
  faFacebookF,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

library.add(
  faEnvelope,
  faPhone,
  faFacebookF,
  faWhatsapp,
  faInstagram,
  faMobileAlt,
  faMapMarkerAlt,
  faChevronRight,
  faClock,
  faBars,
  faTimes,
  faFilePdf
)

export default function Icon({ name, color, size, margin }) {
  return (
    <FontAwesomeIcon
      icon={name}
      color={color}
      style={{ margin, fontSize: size }}
    />
  )
}
