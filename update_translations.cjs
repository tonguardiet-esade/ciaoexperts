const fs = require('fs');

const legalES = {
  title: 'Aviso Legal',
  update: 'Información legal obligatoria - Última actualización: Abril 2026',
  back: 'Volver al inicio',
  sections: [
    {
      title: 'Datos de identificación',
      content: [
        'Usted está visitando el sitio web PliegoFacil.ai propiedad de PliegoFacil SL., con domicilio social en Carrer de la Innovació, 15, Planta 2, 08005 Barcelona, España, con NIF nº B67123455, inscrita en el Registro Mercantil de Barcelona, tomo 48123, folio 45, hoja B-512345, inscripción 1ª (que en dicho documento se denomina «PliegoFacil.SL»).',
        'Esta actividad no está sujeta a ningún régimen de autorización administrativa previa.',
        'Puede ponerse en contacto con PliegoFacil.SL por cualquiera de los siguientes medios:',
        'Teléfono: +34 931 234 567',
        'Correo electrónico de contacto: info@PliegoFacil.com'
      ]
    },
    {
      title: 'Alojamiento web',
      content: [
        'HostingFicticio Cloud S.L.',
        'Avenida de la Nube, 99, 28001 Madrid, España.',
        'Teléfono: +34 910 111 222',
        'Correo electrónico de contacto: legal@hostingficticio.com'
      ]
    },
    {
      title: 'Usuarios',
      content: [
        'Estas condiciones (en adelante, Aviso Legal) tienen por objeto regular el uso del sitio web de PliegoFacil.SL que pone a disposición del público.',
        'El acceso y/o uso de este sitio web de PliegoFacil.SL le atribuye la condición de USUARIO, quien acepta, desde dicho acceso y/o uso, las condiciones generales de uso aquí reflejadas. Estas condiciones serán aplicables independientemente de las condiciones generales de contratación que pudieran ser obligatorias.'
      ]
    },
    {
      title: 'Uso del portal',
      content: [
        'PliegoFacil.ai proporciona acceso a multitud de información, servicios, programas o datos (en adelante, “los contenidos”) en Internet pertenecientes a PliegoFacil.SL o a sus licenciantes a los que el USUARIO puede tener acceso.',
        'El USUARIO asume la responsabilidad del uso del sitio web de PliegoFacil.ai. Esta responsabilidad se extiende al registro necesario para acceder a determinados servicios o contenidos. En dicho registro, el USUARIO deberá proporcionar información veraz y lícita. Como resultado de este registro, se le podrá asignar una contraseña, de la cual será responsable, comprometiéndose a hacer un uso diligente y confidencial de la misma.',
        'El USUARIO se compromete a hacer un uso adecuado de los contenidos y servicios (por ejemplo, servicios de chat, foros de discusión o grupos de noticias) que PliegoFacil.SL ofrece a través de su sitio web y (incluyendo, pero sin limitarse a) no utilizarlos para:',
        'Participar en actividades ilícitas, ilegales o contrarias a la buena fe y al orden público.',
        'Difundir contenido o propaganda de carácter racista, xenófobo, pornográfico ilegal, que promueva el terrorismo o viole los derechos humanos.',
        'Causar daños a los sistemas físicos y lógicos de PliegoFacil.SL, sus proveedores o terceros, introducir o propagar virus informáticos o cualquier otro sistema físico o lógico que pueda causar los daños mencionados.',
        'Intentar acceder y, cuando proceda, utilizar las cuentas de correo electrónico de otros usuarios y modificar o manipular sus mensajes.',
        'Utilizar el sitio web ni la información contenida en él con fines comerciales, políticos, publicitarios ni para ningún otro uso comercial, especialmente para el envío de correos electrónicos no solicitados.',
        'PliegoFacil.SL se reserva el derecho de retirar todos los comentarios y contribuciones que atenten contra la dignidad de la persona, que sean discriminatorios, xenófobos, racistas, pornográficos, que amenacen a menores, el orden público o la seguridad pública, o que, a su juicio, no sean adecuados para su publicación. En ningún caso, PliegoFacil.SL se responsabilizará de las opiniones expresadas por los usuarios a través de foros, chats u otras herramientas de participación.'
      ]
    },
    {
      title: 'Protección de datos',
      content: [
        'Todo lo relacionado con la política de protección de datos está contenido en el documento de Política de Privacidad.'
      ]
    },
    {
      title: 'Contenido. Propiedad intelectual e industrial',
      content: [
        'PliegoFacil.SL es titular de todos los derechos de propiedad intelectual e industrial de su sitio web, así como de los elementos contenidos en el mismo (a título enunciativo: imágenes, fotografías, sonido, audio, vídeo, software o textos; marcas o logotipos, combinaciones de colores, estructura y diseño, selección de materiales utilizados, programas informáticos necesarios para su funcionamiento, acceso y uso, etc.), propiedad de PliegoFacil.SL o de sus licenciantes.',
        'Todos los derechos reservados. De conformidad con lo dispuesto en los artículos 8 y 32.1, párrafo segundo, de la Ley de Propiedad Intelectual, queda expresamente prohibida la reproducción, distribución y comunicación pública, incluida su modalidad de puesta a disposición, de la totalidad o parte de los contenidos de este sitio web, con fines comerciales, en cualquier soporte y por cualquier medio técnico, sin la autorización de PliegoFacil.SL.',
        'El USUARIO se compromete a respetar los derechos de propiedad intelectual e industrial de PliegoFacil.SL. Podrá visualizar los elementos del sitio web de PliegoFacil.ai e incluso imprimirlos, copiarlos y almacenarlos en el disco duro de su ordenador o en cualquier otro soporte físico, siempre que sea única y exclusivamente para su uso personal y privado. El USUARIO no podrá suprimir, alterar, eludir ni manipular ningún dispositivo de protección o sistema de seguridad instalado en las páginas de PliegoFacil.SL.'
      ]
    },
    {
      title: 'Exclusión de garantías y responsabilidad',
      content: [
        'El USUARIO reconoce que el uso del sitio web, sus contenidos y servicios se realiza bajo su exclusiva responsabilidad. En concreto, a título enunciativo, PliegoFacil.SL no asume ninguna responsabilidad en los siguientes ámbitos:',
        'La disponibilidad en el funcionamiento del sitio web, sus servicios y contenidos y su calidad o interoperabilidad.',
        'La finalidad para la que el sitio web sirve a los objetivos del USUARIO.',
        'La infracción de la legislación vigente por parte del USUARIO o de terceros y, específicamente, de los derechos de propiedad intelectual o industrial que sean propiedad de otras personas o entidades.',
        'La existencia de códigos maliciosos o cualquier otro elemento informático dañino que pudiera causar daños al sistema informático del USUARIO o de terceros. Es responsabilidad del USUARIO, en todo caso, disponer de las herramientas adecuadas para la detección y desinfección de dichos elementos.',
        'El acceso fraudulento a los contenidos o servicios por parte de terceros no autorizados o, en su caso, la captura, eliminación, alteración, modificación o manipulación de mensajes y comunicaciones de cualquier tipo que dichos terceros puedan realizar.',
        'La exactitud, veracidad, actualidad y utilidad de los contenidos y servicios ofrecidos y el uso posterior que el USUARIO haga de ellos. PliegoFacil.SL empleará todos los medios y esfuerzos razonables para proporcionar información actualizada y fiable.',
        'Daños causados a los equipos informáticos durante el acceso al sitio web y daños causados a los USUARIOS cuando tengan su origen en fallas o desconexiones en las redes de telecomunicaciones que interrumpan el servicio.',
        'Daños derivados de circunstancias resultantes de un caso fortuito o de fuerza mayor.',
        'En caso de que existan foros o espacios similares, al utilizarlos, se debe tener en cuenta que los mensajes reflejan únicamente la opinión del USUARIO que los envía, quien es el único responsable. PliegoFacil.SL no se responsabiliza del contenido de los mensajes enviados por el USUARIO.'
      ]
    },
    {
      title: 'Modificación de este aviso legal y duración',
      content: [
        'PliegoFacil.SL se reserva el derecho de realizar sin previo aviso las modificaciones que considere oportunas en el sitio web de PliegoFacil.ai, pudiendo cambiar, eliminar o añadir tanto los contenidos y servicios prestados a través del mismo como la forma en que se presentan o se ubican en el sitio.',
        'La validez de las condiciones antes mencionadas dependerá de su publicación y estarán vigentes hasta que sean modificadas por otras debidamente publicadas.'
      ]
    },
    {
      title: 'Política de Enlaces',
      content: [
        'En caso de que PliegoFacil.ai incluya enlaces o hipervínculos a otros sitios web, PliegoFacil.SL no ejercerá ningún tipo de control sobre dichos sitios ni sus contenidos. En ningún caso PliegoFacil.SL asumirá responsabilidad alguna por el contenido de los enlaces a sitios web de terceros, ni garantizará la disponibilidad técnica, la calidad, la fiabilidad, la exactitud, la amplitud, la veracidad, la validez ni la constitucionalidad de ningún material o información contenida en dichos hipervínculos u otros sitios web. Asimismo, la inclusión de estas conexiones externas no implicará ningún tipo de asociación, fusión ni participación con las entidades enlazadas.'
      ]
    },
    {
      title: 'Derecho de exclusión',
      content: [
        'PliegoFacil.SL se reserva el derecho de denegar o retirar el acceso al sitio web y/o a los servicios ofrecidos sin previo aviso, a petición propia o de un tercero, a aquellos usuarios que no cumplan con el contenido de este Aviso Legal.'
      ]
    },
    {
      title: 'Generalidades',
      content: [
        'PliegoFacil.SL perseguirá el incumplimiento de estas condiciones, así como cualquier uso indebido del sitio web, ejerciendo todas las acciones civiles y penales que le correspondan por ley.'
      ]
    },
    {
      title: 'Ley aplicable y jurisdicción',
      content: [
        'La relación entre PliegoFacil.SL y el USUARIO se regirá por la normativa española vigente. Todas las controversias y reclamaciones derivadas de este Aviso Legal serán resueltas por los juzgados y tribunales de la ciudad de Barcelona.'
      ]
    }
  ]
};

const legalEN = {
  title: 'Legal Notice',
  update: 'Mandatory legal information - Last update: April 2026',
  back: 'Back to home',
  sections: [
    {
      title: 'Identification Data',
      content: [
        'You are visiting the website PliegoFacil.ai owned by PliegoFacil SL., with registered office at Carrer de la Innovació, 15, Floor 2, 08005 Barcelona, Spain, with NIF No. B67123455, registered in the Commercial Registry of Barcelona, volume 48123, folio 45, sheet B-512345, 1st inscription (hereinafter referred to as "PliegoFacil.SL").',
        'This activity is not subject to any prior administrative authorization regime.',
        'You can contact PliegoFacil.SL by any of the following means:',
        'Phone: +34 931 234 567',
        'Contact email: info@PliegoFacil.com'
      ]
    },
    {
      title: 'Web Hosting',
      content: [
        'HostingFicticio Cloud S.L.',
        'Avenida de la Nube, 99, 28001 Madrid, Spain.',
        'Phone: +34 910 111 222',
        'Contact email: legal@hostingficticio.com'
      ]
    },
    {
      title: 'Users',
      content: [
        'These conditions (hereinafter, Legal Notice) are intended to regulate the use of the PliegoFacil.SL website made available to the public.',
        'Access and/or use of this PliegoFacil.SL website attributes the condition of USER, who accepts, from said access and/or use, the general conditions of use reflected here. These conditions will be applicable regardless of the general contracting conditions that may be mandatory.'
      ]
    },
    {
      title: 'Use of the Portal',
      content: [
        'PliegoFacil.ai provides access to a multitude of information, services, programs, or data (hereinafter, "the contents") on the Internet belonging to PliegoFacil.SL or its licensors to which the USER may have access.',
        'The USER assumes responsibility for the use of the PliegoFacil.ai website. This responsibility extends to the registration necessary to access certain services or contents. In said registration, the USER must provide truthful and lawful information. As a result of this registration, a password may be assigned, for which they will be responsible, committing to make diligent and confidential use of it.',
        'The USER undertakes to make appropriate use of the contents and services (for example, chat services, discussion forums, or newsgroups) that PliegoFacil.SL offers through its website and (including, but not limited to) not to use them to:',
        'Engage in illicit, illegal activities or those contrary to good faith and public order.',
        'Disseminate content or propaganda of a racist, xenophobic, illegal pornographic nature, advocating terrorism or violating human rights.',
        'Cause damage to the physical and logical systems of PliegoFacil.SL, its suppliers, or third parties, introduce or spread computer viruses or any other physical or logical systems that are capable of causing the aforementioned damage.',
        'Attempt to access and, where appropriate, use the email accounts of other users and modify or manipulate their messages.',
        'Use the website or the information contained therein for commercial, political, advertising purposes, or for any other commercial use, especially for sending unsolicited emails.',
        'PliegoFacil.SL reserves the right to withdraw all comments and contributions that violate respect for the dignity of the person, that are discriminatory, xenophobic, racist, pornographic, that threaten youth or childhood, order, or public safety, or that, in its opinion, are not suitable for publication. In no case will PliegoFacil.SL be responsible for the opinions expressed by users through forums, chats, or other participation tools.'
      ]
    },
    {
      title: 'Data Protection',
      content: [
        'Everything related to the data protection policy is contained in the Privacy Policy document.'
      ]
    },
    {
      title: 'Content. Intellectual and Industrial Property',
      content: [
        'PliegoFacil.SL owns all intellectual and industrial property rights of its website, as well as the elements contained therein (by way of example: images, photographs, sound, audio, video, software, or texts; trademarks or logos, color combinations, structure and design, selection of materials used, computer programs necessary for its operation, access, and use, etc.), owned by PliegoFacil.SL or its licensors.',
        'All rights reserved. In accordance with the provisions of Articles 8 and 32.1, second paragraph, of the Intellectual Property Law, the reproduction, distribution, and public communication, including its modality of making available, of all or part of the contents of this website, for commercial purposes, in any medium and by any technical means, without the authorization of PliegoFacil.SL, are expressly prohibited.',
        'The USER undertakes to respect the intellectual and industrial property rights of PliegoFacil.SL. They may view the elements of the PliegoFacil.ai website and even print, copy, and store them on their computer\'s hard drive or on any other physical medium, provided it is solely and exclusively for their personal and private use. The USER may not delete, alter, evade, or manipulate any protection device or security system installed on the pages of PliegoFacil.SL.'
      ]
    },
    {
      title: 'Exclusion of Guarantees and Liability',
      content: [
        'The USER acknowledges that the use of the website, its contents, and services is carried out under their sole responsibility. Specifically, by way of example, PliegoFacil.SL assumes no responsibility in the following areas:',
        'The availability in the operation of the website, its services and contents, and its quality or interoperability.',
        'The purpose for which the website serves the USER\'s objectives.',
        'The infringement of current legislation by the USER or third parties and, specifically, of the intellectual or industrial property rights owned by other persons or entities.',
        'The existence of malicious codes or any other harmful computer element that could cause damage to the computer system of the USER or third parties. It is the USER\'s responsibility, in any case, to have adequate tools for the detection and disinfection of these elements.',
        'Fraudulent access to contents or services by unauthorized third parties, or, where appropriate, the capture, deletion, alteration, modification, or manipulation of messages and communications of any kind that such third parties may carry out.',
        'The accuracy, veracity, timeliness, and usefulness of the contents and services offered and the subsequent use that the USER makes of them. PliegoFacil.SL will use all reasonable means and efforts to provide updated and reliable information.',
        'Damage caused to computer equipment during access to the website and damage caused to USERS when they originate from failures or disconnections in telecommunications networks that interrupt the service.',
        'Damages arising from circumstances resulting from a fortuitous event or force majeure.',
        'In the event that there are forums or similar spaces, when using them, it must be taken into account that the messages reflect only the opinion of the USER who sends them, who is solely responsible. PliegoFacil.SL is not responsible for the content of the messages sent by the USER.'
      ]
    },
    {
      title: 'Modification of this Legal Notice and Duration',
      content: [
        'PliegoFacil.SL reserves the right to make without prior notice the modifications it deems appropriate on the PliegoFacil.ai website, being able to change, delete, or add both the contents and services provided through it and the way in which they are presented or located on the site.',
        'The validity of the aforementioned conditions will depend on their publication and will be in force until they are modified by others duly published.'
      ]
    },
    {
      title: 'Link Policy',
      content: [
        'In the event that PliegoFacil.ai includes links or hyperlinks to other websites, PliegoFacil.SL will not exercise any type of control over said sites and contents. In no case will PliegoFacil.SL assume any responsibility for the content of links belonging to a third-party website, nor will it guarantee the technical availability, quality, reliability, accuracy, breadth, veracity, validity, and constitutionality of any material or information contained in any such hyperlinks or other websites. Likewise, the inclusion of these external connections will not imply any type of association, merger, or participation with the connected entities.'
      ]
    },
    {
      title: 'Right of Exclusion',
      content: [
        'PliegoFacil.SL reserves the right to deny or withdraw access to the portal and/or the services offered without prior notice, on its own request or that of a third party, to those users who fail to comply with the contents of this Legal Notice.'
      ]
    },
    {
      title: 'Generalities',
      content: [
        'PliegoFacil.SL will pursue the breach of these conditions as well as any improper use of its portal, exercising all civil and criminal actions that may correspond to it by law.'
      ]
    },
    {
      title: 'Applicable Law and Jurisdiction',
      content: [
        'The relationship between PliegoFacil.SL and the USER will be governed by current Spanish regulations. All disputes and claims arising from this Legal Notice will be resolved by the courts and tribunals of the city of Barcelona.'
      ]
    }
  ]
};

const legalCA = {
  title: 'Avís Legal',
  update: 'Informació legal obligatòria - Última actualització: Abril 2026',
  back: 'Tornar a l\'inici',
  sections: [
    {
      title: 'Dades d\'identificació',
      content: [
        'Vostè està visitant el lloc web PliegoFacil.ai propietat de PliegoFacil SL., amb domicili social a Carrer de la Innovació, 15, Planta 2, 08005 Barcelona, Espanya, amb NIF núm. B67123455, inscrita al Registre Mercantil de Barcelona, tom 48123, foli 45, full B-512345, inscripció 1a (que en aquest document s\'anomena «PliegoFacil.SL»).',
        'Aquesta activitat no està subjecta a cap règim d\'autorització administrativa prèvia.',
        'Pot posar-se en contacte amb PliegoFacil.SL per qualsevol dels mitjans següents:',
        'Telèfon: +34 931 234 567',
        'Correu electrònic de contacte: info@PliegoFacil.com'
      ]
    },
    {
      title: 'Allotjament web',
      content: [
        'HostingFicticio Cloud S.L.',
        'Avenida de la Nube, 99, 28001 Madrid, Espanya.',
        'Telèfon: +34 910 111 222',
        'Correu electrònic de contacte: legal@hostingficticio.com'
      ]
    },
    {
      title: 'Usuaris',
      content: [
        'Aquestes condicions (d\'ara endavant, Avís Legal) tenen per objecte regular l\'ús del lloc web de PliegoFacil.SL que posa a disposició del públic.',
        'L\'accés i/o ús d\'aquest lloc web de PliegoFacil.SL li atribueix la condició d\'USUARI, qui accepta, des d\'aquest accés i/o ús, les condicions generals d\'ús aquí reflectides. Aquestes condicions seran aplicables independentment de les condicions generals de contractació que puguin ser d\'obligat compliment.'
      ]
    },
    {
      title: 'Ús del portal',
      content: [
        'PliegoFacil.ai proporciona accés a multitud d\'informació, serveis, programes o dades (d\'ara endavant, "els continguts") a Internet pertanyents a PliegoFacil.SL o als seus llicenciants als quals l\'USUARI pot tenir accés.',
        'L\'USUARI assumeix la responsabilitat de l\'ús del lloc web de PliegoFacil.ai. Aquesta responsabilitat s\'estén al registre necessari per accedir a determinats serveis o continguts. En aquest registre, l\'USUARI haurà de proporcionar informació veraç i lícita. Com a resultat d\'aquest registre, se li podrà assignar una contrasenya, de la qual serà responsable, comprometent-se a fer-ne un ús diligent i confidencial.',
        'L\'USUARI es compromet a fer un ús adequat dels continguts i serveis (per exemple, serveis de xat, fòrums de discussió o grups de notícies) que PliegoFacil.SL ofereix a través del seu lloc web i (incloent, però sense limitar-se a) no utilitzar-los per:',
        'Participar en activitats il·lícites, il·legals o contràries a la bona fe i a l\'ordre públic.',
        'Difondre contingut o propaganda de caràcter racista, xenòfob, pornogràfic il·legal, que promogui el terrorisme o violi els drets humans.',
        'Causar danys als sistemes físics i lògics de PliegoFacil.SL, els seus proveïdors o tercers, introduir o propagar virus informàtics o qualsevol altre sistema físic o lògic que pugui causar els danys esmentats.',
        'Intentar accedir i, si s\'escau, utilitzar els comptes de correu electrònic d\'altres usuaris i modificar o manipular els seus missatges.',
        'Utilitzar el lloc web ni la informació que conté amb finalitats comercials, polítiques, publicitàries ni per a cap altre ús comercial, especialment per a l\'enviament de correus electrònics no sol·licitats.',
        'PliegoFacil.SL es reserva el dret de retirar tots els comentaris i aportacions que atemptin contra la dignitat de la persona, que siguin discriminatoris, xenòfobs, racistes, pornogràfics, que atemptin contra la joventut o la infància, l\'ordre o la seguretat pública o que, al seu parer, no resultin adequats per a la seva publicació. En cap cas, PliegoFacil.SL serà responsable de les opinions expressades pels usuaris a través dels fòrums, xats o altres eines de participació.'
      ]
    },
    {
      title: 'Protecció de dades',
      content: [
        'Tot allò relacionat amb la política de protecció de dades està contingut en el document de Política de Privacitat.'
      ]
    },
    {
      title: 'Contingut. Propietat intel·lectual i industrial',
      content: [
        'PliegoFacil.SL és titular de tots els drets de propietat intel·lectual i industrial del seu lloc web, així com dels elements continguts en el mateix (a títol enunciatiu: imatges, fotografies, so, àudio, vídeo, programari o textos; marques o logotips, combinacions de colors, estructura i disseny, selecció de materials utilitzats, programes d\'ordinador necessaris per al seu funcionament, accés i ús, etc.), propietat de PliegoFacil.SL o dels seus llicenciants.',
        'Tots els drets reservats. De conformitat amb el que disposen els articles 8 i 32.1, paràgraf segon, de la Llei de Propietat Intel·lectual, queden expressament prohibides la reproducció, la distribució i la comunicació pública, inclosa la seva modalitat de posada a disposició, de la totalitat o part dels continguts d\'aquest lloc web, amb finalitats comercials, en qualsevol suport i per qualsevol mitjà tècnic, sense l\'autorització de PliegoFacil.SL.',
        'L\'USUARI es compromet a respectar els drets de propietat intel·lectual i industrial de PliegoFacil.SL. Podrà visualitzar els elements del lloc web de PliegoFacil.ai i fins i tot imprimir-los, copiar-los i emmagatzemar-los al disc dur del seu ordinador o en qualsevol altre suport físic, sempre que sigui única i exclusivament per al seu ús personal i privat. L\'USUARI no podrà suprimir, alterar, eludir ni manipular cap dispositiu de protecció o sistema de seguretat instal·lat a les pàgines de PliegoFacil.SL.'
      ]
    },
    {
      title: 'Exclusió de garanties i responsabilitat',
      content: [
        'L\'USUARI reconeix que l\'ús del lloc web, els seus continguts i serveis es realitza sota la seva exclusiva responsabilitat. En concret, a títol enunciatiu, PliegoFacil.SL no assumeix cap responsabilitat en els àmbits següents:',
        'La disponibilitat en el funcionament del lloc web, els seus serveis i continguts i la seva qualitat o interoperabilitat.',
        'La finalitat per a la qual el lloc web serveix als objectius de l\'USUARI.',
        'La infracció de la legislació vigent per part de l\'USUARI o de tercers i, específicament, dels drets de propietat intel·lectual o industrial que siguin propietat d\'altres persones o entitats.',
        'L\'existència de codis maliciosos o qualsevol altre element informàtic nociu que pogués causar danys al sistema informàtic de l\'USUARI o de tercers. És responsabilitat de l\'USUARI, en tot cas, disposar de les eines adequades per a la detecció i desinfecció d\'aquests elements.',
        'L\'accés fraudulent als continguts o serveis per part de tercers no autoritzats o, si s\'escau, la captura, eliminació, alteració, modificació o manipulació de missatges i comunicacions de qualsevol tipus que aquests tercers puguin realitzar.',
        'L\'exactitud, veracitat, actualitat i utilitat dels continguts i serveis oferts i l\'ús posterior que l\'USUARI en faci. PliegoFacil.SL emprarà tots els mitjans i esforços raonables per proporcionar informació actualitzada i fiable.',
        'Danys causats als equips informàtics durant l\'accés al lloc web i danys causats als USUARIS quan tinguin el seu origen en fallades o desconnexions a les xarxes de telecomunicacions que interrompin el servei.',
        'Danys derivats de circumstàncies resultants d\'un cas fortuït o de força major.',
        'En cas que hi hagi fòrums o espais similars, en utilitzar-los, s\'ha de tenir en compte que els missatges reflecteixen únicament l\'opinió de l\'USUARI que els envia, qui n\'és l\'únic responsable. PliegoFacil.SL no es responsabilitza del contingut dels missatges enviats per l\'USUARI.'
      ]
    },
    {
      title: 'Modificació d\'aquest avís legal i durada',
      content: [
        'PliegoFacil.SL es reserva el dret de realitzar sense previ avís les modificacions que consideri oportunes al lloc web de PliegoFacil.ai, podent canviar, suprimir o afegir tant els continguts i serveis prestats a través del mateix com la forma en què es presenten o s\'ubiquen al lloc.',
        'La validesa de les condicions esmentades dependrà de la seva publicació i estaran vigents fins que siguin modificades per altres degudament publicades.'
      ]
    },
    {
      title: 'Política d\'Enllaços',
      content: [
        'En cas que PliegoFacil.ai inclogui enllaços o hipervincles a altres llocs web, PliegoFacil.SL no exercirà cap tipus de control sobre aquests llocs ni els seus continguts. En cap cas PliegoFacil.SL assumirà cap responsabilitat pel contingut dels enllaços a llocs web de tercers, ni garantirà la disponibilitat tècnica, la qualitat, la fiabilitat, l\'exactitud, l\'amplitud, la veracitat, la validesa ni la constitucionalitat de cap material o informació continguda en aquests hipervincles o altres llocs web. Així mateix, la inclusió d\'aquestes connexions externes no implicarà cap tipus d\'associació, fusió ni participació amb les entitats enllaçades.'
      ]
    },
    {
      title: 'Dret d\'exclusió',
      content: [
        'PliegoFacil.SL es reserva el dret de denegar o retirar l\'accés al portal i/o als serveis oferts sense previ avís, a instància pròpia o d\'un tercer, a aquells usuaris que incompleixin el contingut d\'aquest Avís Legal.'
      ]
    },
    {
      title: 'Generalitats',
      content: [
        'PliegoFacil.SL perseguirà l\'incompliment d\'aquestes condicions, així com qualsevol ús indegut del seu portal, exercint totes les accions civils i penals que li puguin correspondre per llei.'
      ]
    },
    {
      title: 'Llei aplicable i jurisdicció',
      content: [
        'La relació entre PliegoFacil.SL i l\'USUARI es regirà per la normativa espanyola vigent. Totes les controvèrsies i reclamacions derivades d\'aquest Avís Legal seran resoltes pels jutjats i tribunals de la ciutat de Barcelona.'
      ]
    }
  ]
};

let content = fs.readFileSync('src/translations.ts', 'utf8');

content = content.replace(/(\s+)(footer: {)/g, (match, p1, p2) => {
  return p1 + 'legal: ' + JSON.stringify(legalES) + ',' + p1 + p2;
});

// We need to replace the legal object for EN and CA specifically.
// The above replace added legalES to ALL languages.
// Now let's fix EN and CA.

content = content.replace(/EN: \{[\s\S]*?legal: (\{[\s\S]*?\})\,[\s\S]*?footer: \{/, (match, p1) => {
  return match.replace(p1, JSON.stringify(legalEN));
});

content = content.replace(/CA: \{[\s\S]*?legal: (\{[\s\S]*?\})\,[\s\S]*?footer: \{/, (match, p1) => {
  return match.replace(p1, JSON.stringify(legalCA));
});

fs.writeFileSync('src/translations.ts', content);
console.log("Updated translations.ts");
