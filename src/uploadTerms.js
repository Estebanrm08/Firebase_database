import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAS8ZLM3tHIIO8HRyUXRl8klik_mzOaOp0",
    authDomain: "database-9380a.firebaseapp.com",
    projectId: "database-9380a",
    storageBucket: "database-9380a.firebasestorage.app",
    messagingSenderId: "727572765529",
    appId: "1:727572765529:web:acdf9d21f051d9250d0a48",
    measurementId: "G-4344SEJFHP",
  };

  // Inicializar Firebase y Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Datos para subir a Firestore
const terminos = [
  {
    término: "Crédito",
    definición: "La confianza que permite a una persona (o empresa) prestar dinero (o bienes o servicios) a otra persona, donde la segunda persona paga la deuda en una fecha posterior.",
    enlace: "https://www.principal.com/es/personas/vida-y-dinero/conceptos-basicos-de-finanzas-que-es-el-credito-la-puntuacion-crediticia-y",
  },
  {
    término: "Inversiones",
    definición: "Uso de dinero para obtener beneficios futuros.",
    enlace: "https://www.bbva.com/es/salud-financiera/que-son-las-inversiones-financieras-y-que-tipos-existen/",
  },
  {
    término: "Interés",
    definición: "Tasa cobrada por el uso de créditos o por la tenencia de dinero en efectivo.",
    enlace: "https://www.bbva.com/es/salud-financiera/que-es-el-interes-y-que-tipos-de-interes-existen/",
  },
  {
    término: "Hipoteca",
    definición: "Acuerdo para pedir dinero prestado a un banco u organización similar para comprar una casa. Generalmente, la casa o propiedad se utiliza como garantía del préstamo.",
    enlace: "https://www.scotiabank.com.mx/glosario-financiero/hipoteca.aspx",
  },
  {
    término: "Amortización",
    definición: "La reducción gradual y sistemática de la deuda mediante pagos periódicos que incluyen tanto el capital como los intereses.",
    enlace: "https://www.scotiabank.com.mx/glosario-financiero/amortizacion.aspx",
  },
  {
    término: "Activo",
    definición: "Cualquier artículo que tenga un valor equitativo, como una casa o acciones, que pueda convertirse en efectivo.",
    enlace: "https://www.scotiabank.com.mx/glosario-financiero/activos.aspx",
  },
  {
    término: "Pago global",
    definición: "Un pago de gran tamaño que vence al final de un préstamo.",
    enlace: "https://www.consumerfinance.gov/es/obtener-respuestas/que-es-un-prestamo-reembolsable-al-vencimiento-balloon-loan-es-104/",
  },
  {
    término: "Quiebra",
    definición: "Incapacidad de una persona u organización para pagar sus deudas pendientes.",
    enlace: "https://www.estrategiasdeinversion.com/herramientas/diccionario/analisis-fundamental/quiebra-t-476",
  },
  {
    término: "Bono",
    definición: "Un título que devenga intereses y que obliga al emisor a pagar una cantidad específica de intereses durante un período específico, generalmente varios años, antes de reembolsar al tenedor del bono el valor nominal del pagaré.",
    enlace: "https://www.scotiabank.com.mx/glosario-financiero/bonos.aspx",
  },
  {
    término: "Prestatario",
    definición: "Cualquier persona u organización que obtiene fondos de otra persona por un período de tiempo con la condición de que devuelva el dinero.",
    enlace: "https://www.bancosantander.es/glosario/prestatario",
  },
  {
    término: "Corredores de bolsa",
    definición: "También llamados B/D, son vendedores o firmas que compran y venden valores para sí mismos y para otros.",
    enlace: "https://www.arch.finance/blogs/corredor-de-bolsa",
  },
  {
    término: "Capital",
    definición: "Riqueza en forma de dinero u otros activos que posee una persona u organización.",
    enlace: "https://www.scotiabank.com.mx/glosario-financiero/capital.aspx",
  },
  {
    término: "Garantía",
    definición: "Un activo (como un automóvil o una propiedad) que una persona ofrece para garantizar un préstamo y promete entregarlo al prestamista si no puede cumplir con los pagos del préstamo. La garantía también se refiere a la colección de cuentas por cobrar, como hipotecas, que se utilizan para respaldar los intereses o el capital.",
    enlace: "https://balanz.com/balanz-university/glosario-financiero/garantia/",
  },
  {
    término: "Cosignatario",
    definición: "Persona que no es el prestatario principal y que también firma un préstamo. En caso de que el prestatario principal incumpla con el pago, el cosignatario o los cosignatarios asumen la responsabilidad de reembolsar el préstamo.",
    enlace: "https://www.billin.net/glosario/definicion-consignatario/#:~:text=%C2%BFQu%C3%A9%20es%20consignatario%3F,diferencia%20entre%20acreedor%20y%20proveedor.",
  },
  {
    término: "Tarjeta de crédito",
    definición: "Tarjeta emitida por una empresa financiera que permite al titular de la tarjeta pedir prestados fondos. Estos fondos pueden utilizarse como pago por bienes y servicios. El límite de crédito está predeterminado y tiene la condición de que el titular de la tarjeta pague el monto original prestado más cualquier cargo adicional acordado.",
    enlace: "https://handsonbanking.org/es/resources/tarjetas-de-credito-2/",
  },
  {
    término: "Acreedor",
    definición: "Persona, institución financiera u otra empresa que presta dinero.",
    enlace: "https://www.bancosantander.es/glosario/acreedor",
  },
  {
    término: "Tarjeta de débito",
    definición: "Tarjeta de pago que se puede utilizar en lugar de dinero efectivo al realizar compras. Es similar a una tarjeta de crédito, excepto que después de una transacción los fondos se retiran directamente del titular de la tarjeta de débito. También se puede utilizar para retirar efectivo en un cajero automático.",
    enlace: "https://www.bcra.gob.ar/BCRAyVos/Preg-Frec-Qu%C3%A9-es-una-tarjeta-de-d%C3%A9bito-y%20-como-se-utiliza.asp",
  },
  {
    término: "Servicio de la deuda",
    definición: "La cantidad de dinero necesaria durante un período de tiempo para pagar la deuda, incluido el reembolso del capital y los intereses.",
    enlace: "https://www.bbva.com/es/salud-financiera/que-es-la-deuda-para-que-sirve-y-como-se-mide-el-endeudamiento-financiero/",
  },
  {
    término: "Morosidad",
    definición: "Situación en la que un pago de la deuda de un prestatario se atrasa o se vence, como puede ser el de una hipoteca, una cuenta de tarjeta de crédito u otro tipo de préstamo.",
    enlace: "https://www.bbva.com/es/salud-financiera/que-es-la-morosidad-y-que-consecuencias-tiene/",
  },
  {
    término: "Diversificación",
    definición: "Método para equilibrar el riesgo invirtiendo en distintos valores. Esta estrategia también ofrece la posibilidad de maximizar el rendimiento de la inversión.",
    enlace: "https://www.scotiabank.com.mx/glosario-financiero/diversificacion-financiera.aspx",
  },
  {
    término: "Pago extendido",
    definición: "Un plan de pago, generalmente utilizado para préstamos estudiantiles, en el que los pagos pueden ser fijos o graduados y que garantizará que los préstamos se paguen dentro de 25 años.",
    enlace: "https://www.consumerfinance.gov/es/obtener-respuestas/que-es-un-plan-de-pago-extendido-para-los-prestamos-estudiantiles-federales-es-637/#:~:text=Un%20plan%20de%20pago%20extendido%20le%20permite%20reducir%20los%20pagos,pago%20extendido%20(en%20ingl%C3%A9s)%20.",
  },
  {
    término: "Patrimonio",
    definición: "Participación en la propiedad de un activo después de deducir los pasivos.",
    enlace: "https://www.adrformacion.com/knowledge/administracion-publica/_que_es_el_patrimonio_.html#:~:text=El%20patrimonio%20se%20define%20como,entidad%20en%20un%20momento%20dado.&text=Elementos%20en%20propiedad%20como%20por,banco%20es%20considerado%20un%20bien.",
  },
  {
    término: "Tasa efectiva",
    definición: "Tasa de interés anual que realmente se gana o se paga sobre una inversión, préstamo u otro producto financiero como resultado de la capitalización durante un período de tiempo determinado.",
    enlace: "https://balanz.com/balanz-university/glosario-financiero/tasa-efectiva/",
  },
  {
    término: "Cargo financiero",
    definición: "También conocido como tarifa de financiamiento, es el costo adicional por usar o extender crédito, generalmente cobrado como una tarifa fija o un porcentaje (interés) de los fondos prestados.",
    enlace: "https://carcredittampa.com/la-diferencia-entre-intereses-y-cargo-financiero/?lang=es",
  },
  {
    término: "Tasa fija",
    definición: "una tasa de interés que permanece igual durante la vida de un préstamo o durante una parte del plazo del préstamo, según el contrato de préstamo.",
    enlace: "https://www.debt.com/es/tasas-de-interes/tasa-de-interes-fija/",
  },
  {
    término: "Fraude financiero",
    definición: "El delito de obtener dinero o beneficios financieros mediante el engaño o la mentira.",
    enlace: "https://www.concur.co/blog/article/fraude-financiero-en-empresas-tipos-y-metodos-de-prevencion",
  },
  {
    término: "Plan de pago",
    definición: "Un plan que requiere que el prestatario realice pagos regulares a intervalos específicos durante la vida de un préstamo.",
    enlace: "https://www.debt.com/es/prestamos/como-funcionan-los-planes-de-pago/#:~:text=Un%20plan%20de%20pago%20es,los%20pr%C3%A9stamos%20de%20manera%20responsable.",
  },
  {
    término: "Tasa de interés",
    definición: "Porcentaje de interés que se cobra por un préstamo, generalmente en función de la cantidad de dinero que se pide prestado. La tasa de interés también puede referirse al dinero que se gana con un depósito en una cuenta en una institución financiera.",
    enlace: "https://www.scotiabank.com.mx/glosario-financiero/tasa-interes.aspx",
  },
  {
    término: "Prestamista",
    definición: "Persona o entidad que presta dinero a un prestatario. Los prestatarios deben verificar con un organismo regulador estatal o federal que un prestamista esté autorizado antes de firmar un contrato.",
    enlace: "https://www.bbva.es/finanzas-vistazo/ef/prestamos/prestamista-y-prestatario.html#:~:text=El%20prestamista%20es%20la%20persona,las%20condiciones%20acordadas%20por%20contrato.",
  },
  {
    término: "Pasivo",
    definición: "En finanzas personales, el pasivo es el monto que se le debe a un prestamista. Por lo general, los pasivos pueden incluir hipotecas, préstamos para automóviles y estudiantes y deudas de tarjetas de crédito.",
    enlace: "https://www.raisin.es/inversion/pasivos-financieros-que-son-tipologia-y-ejemplos/",
  },
  {
    término: "Derecho de retención",
    definición: "Derecho de posesión legal que tiene un prestamista sobre una propiedad sobre la cual se debe una deuda. Si no se paga la deuda, el prestamista puede confiscar la propiedad (automóvil, casa, etc.) y venderla para cobrar la deuda.",
    enlace: "https://abogadocivilpenal.com/derecho-retencion-posesion-garantia/",
  },
  {
    término: "Liquidez",
    definición: "Medida de la facilidad con la que se obtiene y utiliza el dinero. También puede referirse al grado en que un activo o un valor puede comprarse o venderse rápidamente en el mercado sin que ello afecte negativamente al precio del activo.",
    enlace: "https://www.scotiabank.com.mx/glosario-financiero/liquidez.aspx",
  },
  {
    término: "Riesgo de liquidez",
    definición: "Riesgo que se produce cuando una empresa o un banco no tiene suficiente efectivo, capital o activos líquidos para satisfacer las demandas financieras a corto plazo. Puede ser el caso de un banco que no puede satisfacer la demanda de efectivo de sus prestatarios o depositantes, o cuando una persona o empresa tiene dificultades para vender sus activos sin incurrir en grandes pérdidas.",
    enlace: "https://www.cesce.es/es/glosario/riesgo-de-liquidez",
  },
  {
    término: "Vencimiento",
    definición: "Cuando un pagaré, bono u otra opción de inversión vence para su pago a inversores o acreedores.",
    enlace: "https://www.economiadigital.es/diccionario-economico/vencimiento-finanzas.html",
  },
  {
    término: "Fondo mutuo",
    definición: "Una cartera administrada profesionalmente de acciones, bonos u otras inversiones dividida en acciones.",
    enlace: "https://www.investor.gov/introduction-investing/investing-basics/glossary/fondos-mutuos",
  },
  {
    término: "Amortización negativa",
    definición: "Ocurre cuando el pago realizado es menor que el interés cobrado sobre un préstamo, lo que provoca que el saldo pendiente del préstamo aumente.",
    enlace: "https://www.consumerfinance.gov/es/obtener-respuestas/que-es-amortizacion-negativa-es-103/#:~:text=%22Amortizaci%C3%B3n%22%20significa%20liquidar%20un%20pr%C3%A9stamo,suficiente%20para%20cubrir%20los%20intereses.",
  },
  {
    término: "Patrimonio neto",
    definición: "El valor de los activos totales de una persona o empresa menos todas las deudas o pasivos. Puede ser negativo si alguien debe más de lo que tiene en dinero u otros activos.",
    enlace: "https://sanjuanasesores.com/patrimonio-neto-negativo-que-es-y-como-afrontarlo-en-tu-empresa/",
  },
  {
    término: "Oficina del Contralor de la Moneda (OCC)",
    definición: "Bajo el Departamento del Tesoro de los EE. UU., la OCC regula todos los bancos nacionales, sucursales federales y agencias de bancos extranjeros.",
    enlace: "https://www.usa.gov/es/agencias/oficina-del-contralor-de-la-moneda#:~:text=La%20misi%C3%B3n%20de%20la%20Oficina,y%20cumpla%20con%20la%20ley.",
  },
  {
    término: "Oficina de Supervisión de Ahorros (OTS)",
    definición: "Bajo el Departamento del Tesoro de los EE. UU., la OTS es el principal regulador federal de todas las instituciones de ahorro autorizadas a nivel federal y estatal que pertenecen al Fondo de Seguros de Asociaciones de Ahorros (SAIF).",
    enlace: "https://www.investopedia.com/terms/o/ots.asp",
  },
  {
    término: "Crédito abierto",
    definición: "Una línea de crédito que puede usarse repetidamente hasta un límite determinado, también conocida como cuenta de cargo o crédito renovable.",
    enlace: "https://www.danielnytra.com/es/marketing/credito-abierto/#:~:text=El%20cr%C3%A9dito%20abierto%20es%20una,para%20financiar%20proyectos%20y%20compras.",
  },
  {
    término: "Costo de oportunidad",
    definición: "El costo de dejar pasar una inversión a favor de otra.",
    enlace: "https://www.bancosantander.es/glosario/coste-oportunidad",
  },
  {
    término: "Tarjeta prepaga",
    definición: "Una tarjeta de crédito que brinda acceso a dinero que se cargó en ella con anticipación. Los tipos incluyen tarjetas prepagas “no recargables”, que no se pueden usar una vez que se han agotado los fondos iniciales de la tarjeta, y tarjetas prepagas “recargables”, que permiten a los titulares agregar fondos adicionales y continuar usando la tarjeta.",
    enlace: "https://www.argentina.gob.ar/economia/inclusion-financiera/tarjeta-prepaga",
  },
  {
    término: "Tasa preferencial",
    definición: "Tasa de interés que los bancos cobran a los clientes preferenciales o aquellos con las calificaciones crediticias más altas. Se utiliza para determinar los costos de endeudamiento en muchos productos de préstamos a corto plazo.",
    enlace: "https://www.banamex.com/sitios/educacion-financiera/blog-de-educacion-financiera/que-es-una-tasa-preferencial-y-donde-la-consigo.html",
  },
  {
    término: "Pagaré",
    definición: "Promesa escrita por la que un prestatario se compromete a devolver el dinero prestado más los intereses en una fecha determinada. Se trata de un contrato legal.",
    enlace: "https://www.bbva.com/es/salud-financiera/que-es-un-pagare/",
  },
  {
    término: "Esquemas Ponzi/Piramidales",
    definición: "Reciben su nombre de Charles Ponzi y son esquemas de inversión fraudulentos que prometen altos rendimientos y bajo riesgo. Los promotores suelen pagar a los primeros inversores con el dinero que recaudan de los inversores más nuevos. Todos los esquemas Ponzi acaban por desmoronarse porque la cantidad de nuevos inversores necesaria para pagar a los primeros se vuelve inalcanzable, por lo que los inversores posteriores suelen perder todo su dinero.",
    enlace: "https://www.newtral.es/esquema-ponzi-estafa-piramidal-que-es/20240408/#google_vignette",
  },
  {
    término: "Tasas de interés nominales",
    definición: "Las tasas de interés que se pagan por un préstamo o que se obtienen a través de un depósito. Cuando se solicita un préstamo, se conoce como la tasa porcentual anual (APR, por sus siglas en inglés) que los prestamistas suelen anunciar. En esta situación, los prestatarios también deben considerar la tasa efectiva. Al invertir, los inversores deben considerar la inflación y la tasa de rendimiento real.",
    enlace: "https://www.eleconomista.es/diccionario-de-economia/tipo-de-interes-nominal",
  },
  {
    término: "Tasas de interés real",
    definición: "Tasas de interés ajustadas en función de la erosión esperada del poder adquisitivo resultante de la inflación. Técnicamente se definen como las tasas de interés nominales menos la tasa de inflación esperada.",
    enlace: "https://generamas.com/definiciones/interes-real/",
  },
  {
    término: "Refinanciar",
    definición: "Pagar un préstamo solicitando otro préstamo. Generalmente se hace para obtener una tasa de interés más baja. La refinanciación también restablece el período de pago. Un consumidor puede cambiar un préstamo a cuatro años por uno a diez años con intereses y pagos mensuales más bajos. Se recomienda tener cuidado, ya que algunos préstamos nuevos pueden no ser buenos para el prestatario. Siempre verifique la licencia del prestamista que ofrece servicios de refinanciación.",
    enlace: "https://es.statefarm.com/simple-insights/finanzas/refinanciar-una-vivienda",
  },
  {
    término: "Tolerancia al riesgo",
    definición: "Grado en el que un inversor está dispuesto a arriesgarse a perder parte (o la totalidad) de su inversión original a cambio de una oportunidad de obtener una mayor tasa de rendimiento. En general, cuanto mayor sea la ganancia potencial de una inversión, mayor será el riesgo de perder dinero o valor.",
    enlace: "https://www.questionpro.com/blog/es/tolerancia-al-riesgo/",
  },
  {
    término: "Cargo por servicio",
    definición: "Un cargo por servicio o una multa, generalmente por parte de un banco, como una tarifa por cajero automático o una tarifa por sobregiro.",
    enlace: "https://fastercapital.com/es/tema/la-diferencia-entre-cargos-por-servicio-y-propina.html",
  },
  {
    término: "Tasas de interés a corto plazo",
    definición: "Tasa de interés sobre préstamos a corto plazo o activos de renta fija con vencimiento inferior a un año. Esta tasa suele ser inferior a las de las inversiones a largo plazo y también se conoce como “tasa del mercado monetario” y “tasa de las letras del Tesoro”.",
    enlace: "https://www.oecd.org/en/data/indicators/short-term-interest-rates.html",
  },
  {
    término: "Pago estándar",
    definición: "Cuotas iguales de pagos mensuales necesarios para saldar un préstamo durante el plazo establecido a la tasa de interés actual.",
    enlace: "https://fastercapital.com/es/palabra-clave/pago-est%C3%A1ndar.html",
  },
  {
    término: "Acción",
    definición: "Una acción que representa la propiedad de la empresa que la emite. El precio de las acciones de una empresa sube y baja, generalmente dependiendo del valor de la empresa y de cómo los inversores especulan sobre el desempeño futuro de la empresa.",
    enlace: "https://www.scotiabank.com.mx/glosario-financiero/accion.aspx",
  },
  {
    término: "Plazo",
    definición: "El período o marco de tiempo desde que se emite un préstamo (u otro contrato) hasta que se paga en su totalidad.",
    enlace: "https://www.bbva.es/diccionario-economico/p/plazo.html",
  },
  {
    término: "Finanzas",
    definición: "Son una rama de la economía que evalúa el uso de recursos por parte de individuos u organizaciones. Es disciplina se basa en metodologías para la correcta gestión de los recursos, la toma de decisión y el registro contable de la actividad económica de los agentes financieros.",
    enlace: "https://blog.hubspot.es/sales/que-son-las-finanzas#:~:text=El%20principal%20objetivo%20de%20las,mayor%20provecho%20de%20sus%20recursos.",
  },
  {
    término: "Institución de ahorro",
    definición: "Término general que abarca bancos de ahorro, asociaciones de ahorro y préstamo y cooperativas de crédito. Estas instituciones aceptan principalmente depósitos de consumidores y otorgan hipotecas para viviendas.",
    enlace: "https://www.bankinter.com/blog/diccionario-economia/institucion-de-ahorro",
  },
  {
    término: "Moneda virtual",
    definición: "También conocida como “moneda digital”, es una representación digital de valor que se utiliza como medio de intercambio, unidad de cuenta o depósito de valor, y que se utiliza principalmente como una forma de rastrear, almacenar y enviar pagos a través de Internet.",
    enlace: "https://www.techopedia.com/es/criptomonedas/monedas-virtuales",
  },
  {
    término: "Cartera",
    definición: "Conjunto de todas sus inversiones.",
    enlace: "https://www.ig.com/latam/glosario-trading/definicion-de-cartera#:~:text=Cartera%20(definici%C3%B3n)-,Cartera%20(definici%C3%B3n),bonos%2C%20materias%20primas%20o%20derivados.",
  },
  {
    término: "Cheque certificado",
    definición: "Cheque con pago garantizado. Cuando un cheque está certificado, se convierte en una obligación del banco, y los fondos se retiran de manera inmediata de la cuenta.",
    enlace: "https://www.pnc.com/insights/es/personal-finance/spend/cashiers-check-vs-certified-check.html",
  },
  {
    término: "Compensación de cheques",
    definición: "Proceso de movimiento de dinero/fondos del banco (u otra institución de depósito) desde donde se libra el cheque hasta el banco en el que este se deposita. Este proceso genera créditos en las cuentas en las instituciones de depósito y los débitos correspondientes en las cuentas en las instituciones de pago.",
    enlace: "https://www.ctisoluciones.com/blog/todo-sobre-compensacion-de-cheques",
  },
  {
    término: "Criptomoneda",
    definición: "A veces denominada “moneda virtual”, no es dinero en efectivo o un activo tangible. Se trata de una representación digital del dinero (usado en su mayoría en Internet), donde su valor, por lo general, está determinado por la oferta y la demanda de sus usuarios.",
    enlace: "https://latam.kaspersky.com/resource-center/definitions/what-is-cryptocurrency",
  },
  {
    término: "Honorarios por tasación",
    definición: "Cargo por estimar el valor de una propiedad, como una casa, en general, para contratos de seguro, inversión o hipoteca.",
    enlace: "https://www.consumerfinance.gov/es/obtener-respuestas/que-son-las-tasaciones-y-por-que-debo-consultarlas-es-167/",
  },
  {
    término: "Agentes bursátiles (Broker Dealers, B/D)",
    definición: "Vendedores o firmas que compran y venden títulos valores para ellos mismos y terceros. Los agentes bursátiles deben estar registrados ante la Comisión de Bolsa y Valores de Estados Unidos (Securities and Exchange Commission) y el Departamento de Supervisión de Empresas de California (California Department of Financial Protection and Innovation). Tienen la obligación de hacer recomendaciones conforme a los objetivos de las inversiones y la tolerancia al riesgo de sus clientes.",
    enlace: "https://www.sumup.com/es-es/facturas/glosario/agente-bursatil/",
  },

  {
    término: "Historial crediticio",
    definición: "Es un registro de cómo una persona ha solicitado préstamos y pagado deudas.",
    enlace: "https://www.bbva.mx/educacion-financiera/creditos/ppi-que-es-un-historial-crediticio.html",
  },
  {
    término: "Interés compuesto",
    definición: "Interés calculado sobre el capital inicial, incluidos todos los intereses acumulados hasta un determinado momento.",
    enlace: "https://www.scotiabank.com.mx/glosario-financiero/interes-compuesto.aspx",
  },
  {
    término: "Interés simple",
    definición: "Interés basado o pagado solo sobre el monto original de dinero prestado o invertido, y no sobre la deuda o las ganancias acumuladas. En el caso de un préstamo de interés simple, el pago cubre primero el interés mensual, y el monto restante salda el capital. Cada mes, el interés se paga en su totalidad para que no se acumule.",
    enlace: "https://www.scotiabank.com.mx/glosario-financiero/interes-simple.aspx",
  },
  {
    término: "Pago final",
    definición: "Pago de gran magnitud adeudado al final de un préstamo.",
    enlace: "https://quickbooks.intuit.com/global/es-es/glosario/pago-final-extraordinario/",
  },
  {
    término: "Período de gracia",
    definición: "Permite a los prestatarios, de manera temporal, dejar de realizar pagos o reducir el monto de los pagos mensuales por un período determinado. Los prestatarios son responsables de pagar el interés acumulado durante este tiempo para todos los tipos de préstamos.",
    enlace: "https://www.bbva.es/diccionario-economico/p/periodo-de-gracia.html",
  },
  {
    término: "Plan de pago en cuotas",
    definición: "Plan que exige que el prestatario realice pagos periódicos en intervalos especificados durante el término de un préstamo.",
    enlace: "https://www.odoo.com/documentation/14.0/es/applications/finance/accounting/receivables/customer_invoices/payment_terms.html#:~:text=Un%20plan%20de%20cuotas%20permite,definidas%20previamente%20por%20el%20proveedor.",
  },
  {
    término: "Planificador financiero",
    definición: "Inversor profesional que ayuda a sus clientes a establecer y lograr objetivos financieros a través de inversiones, planificación impositiva, distribución de activos, gestión del riesgo, planificación de la jubilación y otras formas de administración financiera.",
    enlace: "https://www.businessinsider.es/tags/planificador-financiero",
  },
  {
    término: "Segunda hipoteca",
    definición: "Préstamo a través del cual el prestatario refinancia un préstamo anterior a una tasa de interés que se encuentra entre la tasa actual del mercado y la tasa de interés del primer préstamo, la cual se espera que sea inferior. Esto le permite al prestatario refinanciar el primer préstamo sin estar obligado a aceptar una tasa de interés considerablemente más elevada.",
    enlace: "https://www.consumerfinance.gov/es/obtener-respuestas/que-es-una-segunda-hipoteca-o-junior-lien-es-105/#:~:text=El%20t%C3%A9rmino%20%E2%80%9Csegunda%E2%80%9D%20quiere%20decir,total%20que%20se%20le%20debe.",
  },
  {
    término: "Ratio de Solvencia",
    definición: "Medición que realiza un acreedor sobre el historial de deudas de un cliente, así como la capacidad y voluntad futura de saldar las deudas, que, por lo general, se determina a través de una puntuación crediticia.",
    enlace: "https://www.scotiabank.com.mx/glosario-financiero/ratio-solvencia.aspx",
  },
  {
    término: "Tasa variable",
    definición: "A diferencia de los contratos a tasa fija, un contrato a tasa variable tiene una tasa de interés que puede cambiar (subir o bajar) durante el término del préstamo. La tasa suele estar ligada a un índice que refleja los cambios en las tasas de interés del mercado. Una fluctuación en la tasa genera cambios, ya sea en el monto de los pagos o en el plazo de un préstamo. Suelen establecerse límites al grado en el que la tasa de interés o el monto de los pagos pueden variar.",
    enlace: "https://www.bancofinandina.com/servicio-al-cliente/educacion-y-consumidor-financiero/tasas-de-interes/que-es-tasa-variable#:~:text=La%20tasa%20variable%20es%20un,o%20cr%C3%A9dito%20en%20un%20per%C3%ADodo.",
  },
  {
    término: "Activos intangibles",
    definición: "Los activos intangibles son bienes no físicos, como patentes y marcas, que tienen valor económico y pueden generar ingresos para una empresa.",
    enlace: "https://www.scotiabank.com.mx/glosario-financiero/activos-intangibles.aspx",
  },
  {
    término: "Activos líquidos",
    definición: "Los activos líquidos son bienes y valores fácilmente convertibles en efectivo, proporcionando flexibilidad financiera inmediata.",
    enlace: "https://www.scotiabank.com.mx/glosario-financiero/activos-liquidos.aspx",
  },
  {
    término: "Impuestos",
    definición: "Los impuestos son pagos obligatorios que las personas, empresas y otras entidades realizan al gobierno, basados en ingresos, propiedades, ventas u otros criterios, para financiar los gastos públicos y los servicios gubernamentales, como infraestructura, educación, salud y seguridad.",
    enlace: "https://www.scotiabank.com.mx/glosario-financiero/impuestos.aspx",
  },
  {
    término: "Inflación",
    definición: "La inflación es el aumento generalizado y sostenido en el tiempo del nivel de precios de bienes y servicios en una economía. Este fenómeno reduce el poder adquisitivo de la moneda, ya que con el mismo dinero se pueden adquirir menos bienes o servicios.",
    enlace: "https://www.scotiabank.com.mx/glosario-financiero/inflacion.aspx",
  },
  {
    término: "PIB",
    definición: "El Producto Interno Bruto (PIB) es un indicador económico que representa el valor monetario de todos los bienes y servicios finales producidos dentro de las fronteras de un país en un período de tiempo específico, generalmente anual o trimestral. Es utilizado como medida del tamaño de la economía y su evolución, incluyendo la producción de bienes y servicios en todos los sectores económicos.",
    enlace: "https://www.scotiabank.com.mx/glosario-financiero/pib.aspx",
  },
  {
    término: "PIB per cápita",
    definición: "El PIB per cápita es una medida que calcula el Producto Interno Bruto (PIB) de un país dividido por su población. Es una manera de determinar el promedio de riqueza o producción económica por individuo en un país. Se utiliza para comparar el nivel de desarrollo económico entre distintos países y evaluar el bienestar promedio de la población.",
    enlace: "https://www.scotiabank.com.mx/glosario-financiero/pib-per-capita.aspx",
  },
  {
    término: "Prima",
    definición: "En el ámbito de las finanzas, en el contexto de opciones o seguros, la prima es el costo inicial o precio pagado por la opción o el contrato de seguro. También puede referirse a un sobrecosto por encima del valor nominal o precio actual de un activo o bien.",
    enlace: "https://www.scotiabank.com.mx/glosario-financiero/prima.aspx",
  },
  {
    término: "Banco",
    definición: "Un banco es un intermediario entre los depositantes (quienes le prestan dinero) y los prestatarios (a quienes les presta dinero). Lo que paga por los depósitos, y lo que cobra por los préstamos que otorga, son en ambos casos intereses.",
    enlace: "https://www.gestiopolis.com/como-se-clasifican-los-bancos/#:~:text=Bancos%20p%C3%BAblicos%3A%20Son%20aquellos%20cuyo,Bancos%20multilaterales.",
  },
];

// Función para subir los datos
const subirDatos = async () => {
  try {
    const collectionRef = collection(db, "terminosFinancieros");
    for (const termino of terminos) {
      await addDoc(collectionRef, termino);
      console.log(`Término '${termino.término}' agregado con éxito.`);
    }
    console.log("Todos los términos se han subido correctamente.");
  } catch (error) {
    console.error("Error al subir los datos:", error);
  }
};

subirDatos();