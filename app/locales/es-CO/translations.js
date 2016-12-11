export default {
  dashboard: {
    title: 'Que deseas hacer?'
  },
  navigation: {
    imaging: 'Radiografia',
    inventory: 'Inventario',
    patients: 'Pacientes',
    appointments: 'Citas',
    medication: 'Recetas medicas',
    labs: 'Laboratorio',
    billing: 'Facturas',
    administration: 'Administracion',
    subnav: {
      requests: 'Pedidos',
      items: 'Items',
      completed: 'Completado',
      newRequest: 'New pedido',
      inventoryReceived: 'Inventario recibido',
      reports: 'Reportes',
      patientListing: 'Lista de pacientes',
      newPatient: 'Nuevo paciente',
      thisWeek: 'Esta semana',
      today: 'Hoy',
      search: 'Buscar',
      addAppointment: 'Nueva cita',
      dispense: 'Dispense',
      returnMedication: 'Devolver medicamento',
      invoices: 'Facturas',
      newInvoice: 'Nueva factura',
      prices: 'Precios',
      priceProfiles: 'Perfil de precios',
      lookupLists: 'Lista de busuedas',
      addressFields: 'Campos de dirección',
      loadDb: 'Cargar base de datos',
      users: 'Usuarios',
      newUser: 'Nuevo usuario',
      userRoles: 'Roles'
    },
    actions: {
      logout: 'Salir',
      login: 'Ingresar'
    },
    about: 'Información de '
  },
  user: {
    plusNewUser: '+ nuevo usuario',
    usersPageTile: 'Listado de usuarios'
  },
  admin: {
    addressOptions: 'Opciones de direcciones',
    lookupLists: 'Lista de busqueda',
    loadDb: 'Cargar Base de datos',
    userRoles: 'Roles',
    users: 'Usuarios',
    address: {
      address1Label: 'Texto direccion 1',
      address2Label: 'Texto direccion 2',
      address3Label: 'Texto direccion 3',
      address4Label: 'Texto direccion 4',
      include1Label: 'Incluir 1',
      include2Label: 'Incluir 2',
      include3Label: 'Incluir 3',
      include4Label: 'Incluir 4',
      titles: {
        optionsSaved: 'Opciones guardadas'
      },
      messages: {
        addressSaved: 'las opciones de dirección han sido guardadas'
      },

      newTitle: 'Opciones de dirección',
      editTitle: 'Opciones de dirección',
      addressLabel: 'Direcciones'
    },
    loaddb: {
      progressMessage: 'Por favor espere mientras la base de datos es cargada.',
      progressTitle: 'Cargando ase de datos',
      displayAlertTitle: 'Seleccione un archivo para cargar',
      displayAlertMessage: 'Por favor seleccione un archivo para ser cargado.',
      errorDisplayAlertTitle: 'Error cargando',
      errorDisplayAlertMessage: 'La base de datos no fue cargada el error fue: {{error}}',
      editTitle: 'Cargar bd'
    },
    lookup: {
      deleteValueInventoryTypeMedicationTitle: 'No se puede eliminar el medicamento',
      deleteValueInventoryTypeMedicationMessage: 'El tipo de inventario de medicamentos no se pueden eliminar porque se necesita para el módulo de medicación.',
      deleteValueLabPricingTypeProcedureTitle: 'No se puede eliminar el tipo de precio',
      deleteValueLabPricingTypeProcedureMessage: 'El tipo de precio Procedimiento Lab no se puede eliminar porque es necesaria para el módulo de laboratorios.',
      deleteValueImagingPricingTypeProcedureTitle: 'No se puede eliminar el tipo de imagen',
      deleteValueImagingPricingTypeProcedureMessage: 'No se puede eliminar porque es necesario para el modulo de radiografias',
      deleteValueVisitTypeAdmissionTitle: 'No se puede eliminar admision tipo visita',
      deleteValueVisitTypeAdmissionMessage: 'Tipo de visita es necesaria para el modulo de admisiones.',
      deleteValueVisitTypeImagingTitle: 'No se puede eliminar el tipo radiografia',
      deleteValueVisitTypeImagingMessage: 'No se puede eliminar por que es necesario para el modulo de radiografias.',
      deleteValueVisitTypeLabTitle: 'No se puede eliminar el tipo laboratorio',
      deleteValueVisitTypeLabMessage: 'Es necesario para el modulo de laboratorio.',
      deleteValueVisitTypePharmacyTitle: 'No se puede eliminar el tipo farmacia',
      deleteValueVisitTypePharmacyMessage: 'Es requerido por el modulo de recetas.',
      alertImportListTitle: 'Seleccione un archivo para importar',
      alertImportListMessage: 'Por favor seleccione un archivo para importar.',
      alertImportListSaveTitle: 'Lista importada',
      alertImportListSaveMessage: 'Lista de busqueda importada.',
      alertImportListUpdateTitle: 'Lista salvada',
      alertImportListUpdateMessage: 'La lista de busqueda ha sido salvada.',
      pageTitle: 'Listas de busqueda',
      edit: {
        template: {
          addTitle: 'Adicionar valor',
          editTitle: 'Editar valor',
          updateButtonTextAdd: 'Adicionar',
          updateButtonTextUpdate: 'Actualizar',
          labelTitle: 'Valor'
        }
      },
      anesthesiaTypes: 'Tipos de anestesia',
      anesthesiologists: 'Anestesiologo',
      billingCategories: 'Categorias de facturacion',
      clinicList: 'Ubicacion de las clinicas',
      countryList: 'Paises',
      diagnosisList: 'Diagnosticos',
      cptCodeList: 'Codigos CPT',
      expenseAccountList: 'Cuentas de gastos',
      aisleLocationList: 'Ubicacion de inventario de pasillo',
      warehouseList: 'Ubicacciones de inventarios',
      inventoryTypes: 'Tipos de inventarios',
      imagingPricingTypes: 'Tipos de precios de radiografias',
      labPricingTypes: 'Precios de laboratorio',
      patientStatusList: 'Lista de estado de pacientes',
      physicianList: 'Medicos',
      procedureList: 'Procedimientos',
      procedureLocations: 'Ubicacion de los procedimientos',
      procedurePricingTypes: 'Tipos de procedimientos y precios',
      radiologists: 'Radiologo',
      unitTypes: 'Tipos de unidad',
      vendorList: 'Proveedor',
      visitLocationList: 'Lugares de visista',
      visitTypes: 'Tipos de visita',
      wardPricingTypes: 'Tipos de las tarifas'
    },
    roles: {
      capability: {
        admin: 'Administracion',
        loadDb: 'Cargar base de datos',
        updateConfig: 'Actualizar configuracion',
        appointments: 'Citas',
        addAppointment: 'Adicionar cita',
        billing: 'Facturacion',
        addCharge: 'Adicionar cargo (valor)',
        addPricing: 'Adicionar precio',
        addPricingProfile: 'Adicionar perfil de precios',
        addInvoice: 'Adicionar factura',
        addPayment: 'Adicionar pago',
        deleteInvoice: 'Eliminar factura',
        deletePricing: 'Eliminar precio',
        deletePricingProfile: 'Eliminar perfil de precio',
        editInvoice: 'Editar factura',
        invoices: 'Facturas',
        overrideInvoice: 'Sobreescribir factura',
        pricing: 'Precio',
        patients: 'Pacientes',
        addDiagnosis: 'Adicionar diagnostico',
        addPhoto: 'Adicionar foto',
        addPatient: 'Adicionar paciente',
        addVisit: 'Adicionar visita',
        addVitals: 'Adicionar partes vitales',
        admitPatient: 'Admitir paciente',
        deletePhoto: 'Eliminar foto',
        deletePatient: 'Eliminar paciente',
        deleteAppointment: 'Eliminar cita',
        deleteDiagnosis: 'Eliminar diagnostico',
        deleteProcedure: 'Eliminar procedimiento',
        deleteSocialwork: 'Eliminar trabajo social',
        deleteVitals: 'Eliminar organo vital',
        deleteVisit: 'Eliminar visita',
        dischargePatient: 'Descartar paciente',
        patientReports: 'Reportes por paciente',
        visits: 'Visitas',
        medication: 'Medicación',
        addMedication: 'Adicionar medicación',
        deleteMedication: 'Eliminar medicación',
        fulfillMedication: 'Cumplir la medicación',
        labs: 'Laboratorios',
        addLab: 'Adicionar laboratorio',
        completeLab: 'Completar laboratorio',
        deleteLab: 'Eliminar laboratorio',
        imaging: 'Radiografia',
        addImaging: 'Adicionar radiografia',
        completeImaging: 'Completar radiografia',
        deleteImaging: 'Eliminar radiografia',
        inventory: 'Inventario',
        addInventoryRequest: 'Pedido de inventario',
        addInventoryItem: 'Adicionar elemento al inventario',
        addInventoryPurchase: 'Adicionar compra',
        adjustInventoryLocation: 'Ajustar lugar elemento en el inventario',
        deleteInventoryItem: 'Eliminar elemento del inventario',
        deleteInventoryPurchase: 'Eliminar compra del inventario',
        fulfillInventory: 'Cumplimiento de inventario',
        userRoles: 'Roles de usuario'
      },
      messages: {
        roleSaved: 'El {{roleName}} rol ha sido salvado.'
      },
      titles: {
        roleSaved: 'Role salvado'
      }
    }
  },
  labels: {
    cptcode: 'Codigo CPT',
    loading: 'Cargando',
    name: 'Nombre',
    patient: 'Paciente',
    quantity: 'Cantidada',
    requestedOn: 'Pedido On',
    date: 'Fecha',
    dateOfBirth: 'Fecha de nacimiento',
    dateOfBirthShort: 'FDN',
    dateRequested: 'Fecha de pedido',
    dateCompleted: 'Fecha completada',
    description: 'Descripción',
    requestedBy: 'Pedido por|',
    fulfill: 'Cumplomiento',
    fulfillRequest: 'Pedido de cumplimiento',
    fulfillRequestNow: 'Pedido de cumplimiento ahora',
    actions: 'Acciones',
    action: 'Accion',
    notes: 'Notas',
    edit: 'Editar',
    imageOrders: 'Ordenes de radiografias',
    labOrders: 'Ordenes de laboratorio',
    patientHistory: 'Historia del paciente',
    imagingType: 'Tipo de radiografia',
    result: 'Resultado',
    results: 'Resultados',
    visit: 'Visita',
    requests: 'Pedido',
    completed: 'Completado',
    id: 'Id',
    on: 'on',
    type: 'Tipo',
    sex: 'Genero',
    age: 'Edad',
    username: 'Nombre de usuario',
    email: 'Email',
    role: 'Rol',
    delete: 'Eliminar',
    userCanAddNewValue: 'Los usuarios pueden agregar nuevos valores',
    value: 'Valor',
    lookupType: 'Tipo de busqueda',
    importFile: 'Importar archivo',
    fileLoadSuccessful: 'Archivo cargado exitosamente',
    fileToLoad: 'Archivo cargado',
    startTime: 'Hora de inicio',
    startDate: 'Fecha de inicio',
    endTime: 'Hora de finalización',
    endDate: 'Fecha final',
    docRead: 'Leer documento',
    docWritten: 'Documento escrito',
    displayName: 'Nombre para mostrar',
    password: 'Contraseña',
    editUser: 'Editar usuario',
    newUser: 'Nuevo usuario',
    deleteUser: 'Eliminar usuario',
    medication: 'Medicación',
    status: 'Estado',
    addNewOutpatientVisit: '--Nueva visita a paciente externo--',
    prescription: 'Receta medica',
    prescriptionDate: 'Fecha de la receta medica',
    billTo: 'Facturar a',
    pullFrom: 'Traer de',
    fulfilled: 'Cumplido',
    deleteRequest: 'Eliminar pedido',
    location: 'Ubicacion',
    provider: 'Proveedor',
    with: 'con',
    allDay: 'Todo el dia',
    physician: 'Médico',
    assisting: 'Asistencia',
    anesthesia: 'Anestesia',
    procedures: 'Procedimiento'
  },
  messages: {
    noItemsFound: 'Elementos no encontrados.',
    noHistoryAvailable: 'Historia no disponible.',
    createNewRecord: 'Crear un nuevo registro?',
    createNewUser: 'Crear un nuevo usuario?',
    noUsersFound: 'Ningun usuario encontrado.',
    areYouSureDelete: 'Estas seguro de eliminar este usuario {{user}}?',
    userHasBeenSaved: 'El usuario ha sido salvado.',
    userSaved: 'Usuario salvado',
    onBehalfOf: 'a nombre de',
    newPatientHasToBeCreated: 'Un nuevo paciente debe ser creado...Por favor espere..',
    noNotesAvailable: 'No hay notas clínicas adicionales están disponibles para esta visita.',
    sorry: 'Lo sentimos, un error ha ocurrido...',
    forAuthorizedPersons: 'Este informe es sólo para personas autorizadas.'
  },
  alerts: {
    pleaseWait: 'Por favor espere'
  },
  buttons: {
    complete: 'Completado',
    cancel: 'Cancelar',
    close: 'Cerrar',
    returnButton: 'Regresar',
    barcode: 'Codigo de barras',
    add: 'Adicionar',
    update: 'Actualizar',
    ok: 'Ok',
    fulfill: 'Cumplimiento',
    remove: 'Remover',
    delete: 'Eliminar',
    newUser: 'Nuevo usuario',
    addValue: 'Adicionar valor',
    newNote: 'Nueva nota',
    import: 'Importar',
    loadFile: 'Cargar archivo',
    newRequest: 'Nueva solicitud',
    allRequests: 'Todas las solicitudes',
    dispense: 'Repartir',
    newItem: '+ nuevo elemento',
    newRequestPlus: '+ nuevo pedido',
    addVisit: 'Adicionar visita',
    search: 'Buscar'
  },
  login: {
    messages: {
      signIn: 'por favor ingrese',
      error: 'Nombre de usuario o clave incorrectos.'
    },
    labels: {
      password: 'Clave',
      username: 'Nombre de usuario',
      signIn: 'Ingresar'
    }
  },
  inventory: {
    edit: {
      cost: 'Costo por unidad:',
      delivered: 'Enviado A:',
      location: 'Cambio de ubicación:',
      prescription: 'Recetado por:',
      pulled: 'Pulled From:',
      quantity: 'Quantity at Completion:',
      reason: 'Razón:',
      returned: 'Regresado al paciente:',
      transferredFrom: 'Transferido a:',
      transferredTo: 'Transferido a:'
    },
    labels: {
      action: 'Acción',
      add: 'Adicionar',
      adjust: 'Adjustar',
      adjustmentDate: 'Fecha de ajuste',
      adjustmentFor: 'Ajustado para',
      adjustmentType: 'Tipo de ajuste',
      aisle: 'Pasillo',
      aisleLocation: 'Ubicación pasillo',
      allInventory: 'Todo el inventario',
      billTo: 'Facturao a',
      consumePurchases: 'Consume Purchases',
      consumptionRate: 'Tasa de consumo',
      cost: 'Costo',
      costPerUnit: 'Costo por Unidad',
      crossReference: 'Referencia cruzada',
      currentQuantity: 'Cantidad actual',
      dateCompleted: 'Fecha completado',
      dateEffective: 'Gecha efectiva',
      dateEnd: 'Fecha final',
      dateStart: 'Fecha inicial',
      dateReceived: 'Fecha recibido',
      dateTransferred: 'Fecha transferencia',
      daysLeft: 'Dias restantes',
      deliveryAisle: 'Enviado a pasillo',
      deliveryLocation: 'Ubicación del envio',
      distributionUnit: 'Unidad de distribución',
      deleteItem: 'Eliminar elemento',
      details: 'Detalles',
      editItem: 'Editar elemento',
      expense: 'Gastos a',
      expirationDate: 'Fecha de vencimiento',
      fulfillRequest: 'Pedido de cumplimiento',
      fulfillRequestNow: 'Pedido de incumplimiento para hoy',
      gift: 'Regalo en especie',
      giftUsage: 'Uso del regalo en especie',
      giftInKindNo: 'N',
      giftInKindYes: 'Y',
      inventoryConsumed: 'Inventario consumido',
      inventoryItem: 'Elemento del inventario',
      inventoryObsolence: 'Obsolescencia de inventario',
      invoiceItems: 'Articulos de factura',
      invoiceLineItem: 'Elemento de la factura linea',
      invoiceNumber: 'Factura numero',
      item: 'Elemento',
      items: 'Elementos',
      itemNumber: 'Numero de elemento',
      location: 'Ubicación',
      locations: 'Ubicaciones',
      name: 'Nombre',
      markAsConsumed: 'Marcar como consumido',
      newItem: 'Nuevo elemento',
      originalQuantity: 'Cantidad original',
      print: 'Imprimir',
      printBarcode: 'Imprimir codigo de  barras',
      printer: 'Impresora',
      pullFrom: 'Traido de',
      purchases: 'Compras',
      purchaseCost: 'Costo de compra',
      purchaseInfo: 'Informacion de la compra',
      quantity: 'Cantidad ({{unit}})',
      quantityAvailable: 'Cantidad disponible',
      quantityOnHand: 'Cantidad a la mano',
      quantityRequested: 'Cantidad pedida',
      rank: 'Ranking',
      reason: 'Razón',
      remove: 'Remover',
      reorderPoint: 'Reordenar punto',
      requestedItems: 'Elementos solicitados',
      salePricePerUnit: 'Costo de venta por unidad',
      save: 'Guardar',
      serialNumber: 'Serial/Numero de lote',
      total: 'Total',
      totalCost: 'Costo total',
      totalReceived: 'Total Recivido: {{total}}',
      transaction: 'Transaccion',
      transactions: 'Transacciones',
      transfer: 'Translados',
      transferFrom: 'Translado desde',
      transferTo: 'Translado a ubicación',
      transferToAisle: 'Translado a pasillo',
      unit: 'Unidad',
      unitCost: 'Unidad Costo',
      vendor: 'Proveedor',
      vendorItemNumber: 'Proveedor numero de elemento',
      xref: 'XRef'
    },
    messages: {
      adjust: 'Por favor ajust las cantidades en la ubicación adecuada(s) la diferencia de la cuenta es {{difference}}.',
      createRequest: 'Crear un nuevo pedido?',
      delete: 'Estas seguro de eliminar {{name}}?',
      itemNotFound: 'El elemento del inventario <strong>{{item}}</strong> no se pudo encontrar.<br>Si desea crear un nuevo elemento, Ingrese la información abajo.<br>De lo contrario opria cancelar para volver.',
      loading: 'Cargando transacciones ...',
      purchaseSaved: 'La compra de inventario ha sido salvada.',
      noRequests: 'No se encontraron pedidos.',
      noItems: 'No se encontraron elementos.',
      quantity: 'La cantidad total <strong>({{quantity}})</strong> no encaja con la cantidad total en las ubicaciones <strong>({{locationQuantity}})</strong>.',
      removeItem: 'Esta seguro de eliminar este elemento de la factura?',
      removeItemRequest: 'Seguro que quiere eliminar este elemento del pedido?',
      requestFulfilled: 'El pedido de inventario ha sido procesado.',
      requestUpdated: 'El pedido de inventario ha sido actualizado.',
      warning: 'Valide los campos requeridos (marcados con *) corrija los errores antes de adicionar.'
    },
    reports: {
      rows: {
        adjustments: 'Ajustes',
        adjustmentsTotal: 'Ajustes totales',
        balanceBegin: 'Balance inicial',
        balanceEnd: 'Balance Final',
        category: 'Categoria',
        consumed: 'Consumado',
        consumedGik: 'GiK Consumido',
        consumedGikTotal: 'Total GiK Consumido',
        consumedPuchases: 'Total de lo comprado consumido',
        consumedPurchasesTotal: 'Total de lo comprado consumido',
        consumedTotal: 'Total consumido',
        errInFinSum: 'Error en _generateFinancialSummaryReport: ',
        errInFindPur: 'Error en _findInventoryItemsByPurchase: ',
        errInFindReq: 'Error en _findInventoryItemsByRequest: ',
        expensesFor: 'Gatos para: ',
        noAccount: '(No Cuenta)',
        subtotal: 'Subtotal: ',
        subtotalFor: 'Subtotal para {{category}} - {{account}}: ',
        total: 'Total: ',
        totalFor: 'Total para {{var}}: ',
        totalPurchases: 'Compras Totales',
        transfer1: '{{quantity}} de {{location}}',
        trasnfer2: 'De: {{source}} A: {{target}}'
      },
      adjustment: 'Ajuste detallado',
      daysSupply: 'Dias de inventario restante',
      expenseDetail: 'Gastos detallados',
      expenseSum: 'Resumen de gastos',
      expiration: 'Fecha de expiracion',
      export: 'Exportar reporte',
      fields: 'Campos a incluir',
      finance: 'Resumen de finanzas',
      generate: 'Generar reporte',
      invLocation: 'Inventario por ubicacion',
      invValuation: 'Inventario por valoracion',
      purchaseDetail: 'Compras detalladas',
      purchaseSum: 'Resumen de compras',
      reportType: 'Tipo de reporte',
      stockTransferDetail: 'Detalle de traslado de stock',
      stockTransferSum: 'Resumen traslado de stock',
      stockUsageDetail: 'Detalle de uso de stock',
      stockUsageSum: 'Resumen uso de stock'
    },
    titles: {
      addPurchase: 'Adicionar compra',
      addRequest: 'Nuevo pedido',
      adjustment: 'Ajuste',
      editPurchase: 'Editar compra',
      editRequest: 'Editar pedido',
      inventoryItem: 'Nuevo elemento de inventario',
      inventoryReport: 'Reporte de inventario',
      purchaseSaved: 'Compras de inventario guardadas',
      quickAddTitle: 'Nuevo elemento de inventario',
      removeItem: 'Remover elemento',
      requestFulfilled: 'Pedido cumplido',
      requestUpdated: 'Pedido actualizado',
      transfer: 'Trasladar elementos',
      warning: 'Peligro!!!!!'
    }
  },
  imaging: {
    pageTitle: 'Pedido de radriografia',
    sectionTitle: 'Radiografias',
    buttons: {
      newButton: '+ new radiografia'
    },
    labels: {
      radiologist: 'Radiologo',
      addNewVisit: '--Adicionar nueva visita--'
    },
    messages: {
      noCompleted: 'No de items encontrados.'
    },
    titles: {
      completedImaging: 'Radiografia completada',
      editTitle: 'Pedido de edicion de radiografia',
      newTitle: 'Nuevo pedido de radiografia'
    },
    alerts: {
      completedTitle: 'Pedido de radiografia completado',
      completedMessage: 'El pedido de radiografia ha sido completado.',
      savedTitle: 'Pedido de radiografia salvado',
      savedMessage: 'El pedido de radiografia ha sido guardado.'
    }
  },
  medication: {
    pageTitle: 'Pedido de medicación',
    sectionTitle: 'Medication',
    returnMedication: 'Retorno de medicación',
    buttons: {
      dispenseMedication: 'dispensar medicación',
      newButton: '+ nuevo pedido',
      returnMedication: 'debolver medicacion'
    },
    titles: {
      completedMedication: 'Medicacion completada',
      editMedicationRequest: 'Editar pedido de medicacion',
      newMedicationRequest: 'Nuevo pedido de medicacion'
    },
    messages: {
      createNew: 'Crear un nuevo pedido de medicacion?',
      confirmDeletion: 'Estas seguro de eliminar este pedido de medicación?'
    },
    labels: {
      refills: 'Recargas',
      quantityRequested: 'Cantidad solicitada',
      quantityDispensed: 'Cantidad dispensada',
      quantityDistributed: 'Cantidad distribuida',
      quantityToReturn: 'Cantidad a devolver',
      returnLocation: 'Retornar a ubicación',
      returnAisle: 'Devolve a pasillo',
      returnReason: 'Razon por la que se devuelve/Nota',
      adjustmentDate: 'Fecha de ajuste',
      creditToAccount: 'Credito a cuenta'
    },
    alerts: {
      returnedTitle: 'Medicacion devuelta',
      returnedMessage: 'La medicacion ha sido marcada para devolver.',
      savedTitle: 'Pedido de medicacion guardado',
      savedMessage: 'La elemento de medicación ha sido guardado.',
      fulfilledTitle: 'Pedido de medicación cumplido'
    }
  },
  appointments: {
    currentScreenTitle: 'Listado de citas',
    editTitle: 'Editar cita',
    newTitle: 'Nueva cita',
    sectionTitle: 'Citas',
    thisWeek: 'Citas esta semana',
    missed: 'Citas perdidas',
    searchTitle: 'Buscar citas',
    todayTitle: 'Citas para hoy',
    messages: {
      deleteAppointmentMessage: 'Esta seguro de eliminar esta cita?',
      endTimeLaterThanStart: 'Seleccione una hora de finalizacion despues de la de inicio.'
    },
    buttons: {
      newButton: '+ nueva cita'
    }
  },
  visits: {
    edit: {
      buttons: {
        newAppointment: 'Nuevas citas',
        addDiagnosis: 'Adicionar diagnostico',
        newProcedure: 'Nuevo procedimiento',
        newLab: 'New laboratorio',
        newMedication: 'Nueva mediicación',
        newImaging: 'Nueva radiografia'
      },
      labels: {
        diagnosis: 'Diagnostico',
        procedure: 'Procedimiento',
        authoredBy: 'Escrito por',
        labs: 'Laboratorios',
        imaging: 'Radiografias',
        visitInformation: 'Informacion de visita'
      }
    }
  },
  labs: {
    sectionTitle: 'Laboratorios',
    requestsTitle: 'Pedido de laboratorio',
    editTitle: 'Editar pedido de laboratorio',
    newTitle: 'Nuevo pedido de laboratorio',
    deleteTitle: 'Eliminar pedido',
    completedTitle: 'Completar laboratorio',
    labels: {
      labType: 'Tipo de laboratorio',
      addNewVisit: '--Adicionar nueva visita--'
    },
    messages: {
      noItemsFound: 'No boratorios encontrados.',
      createNewRecord: 'Crear un registro?',
      confirmDeletion: 'Esta seguro de eliminar esta solicitud de laboratorio?',
      noCompleted: 'No elementos completados encontrados.'
    },
    buttons: {
      newButton: '+ nuevo laboratorio'
    },
    alerts: {
      requestCompletedTitle: 'Pedido de laboratorio competado',
      requestCompletedMessage: 'El pedido de laboratorio ha sido completado.',
      requestSavedTitle: 'Silicitud de laboratorio guardado',
      requestSavedMessage: 'El pedido de laboratorio ha sido guardado.'
    }
  },
  common: {
    actions: 'Acciones'
  },
  patients: {
    notes: {
      onBehalfOfLabel: 'A nombre de',
      onBehalfOfCopy: 'a nombre de',
      pleaseSelectAVisit: 'Por favor seleccione una visista',
      noteLabel: 'Nota'
    }
  }
};
