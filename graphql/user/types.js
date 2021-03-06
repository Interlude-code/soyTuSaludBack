import {  gql } from 'apollo-server-express'


export const typesUsuario = gql`
    type Usuario{
        uid: ID!
        identificacion:String!
        nombre: String!
        apellidos: String!
        tipoDocumento: String!
        celular:String!
        correo: String!
        formularioTuHistoria:Boolean
        aplicaEnFundacion: Boolean
        matchService: String
        foto:String
        genero: String
        fechaNacimiento: String
        direccion: String
        discapacitado: String
        tipoDiscapacidad: String
        victimaViolencia: String
        identidadGenero: String
        orientacionSexual: String
        grupoPoblacional: String
        municipio:String
        departamento:String
        EPS:String
        tuHistoria:String
        serviciosSolicitado: [String]
        historiaClinica: String
        sisben: String
        autorizacionFoto:String
        recopilacionDatos:String
        comunidad:String
        fechaSolicitud:String
    }
    type Query{
        UsuariosTabla: [Usuario]
        UsuariosTablaTuHistoria: [Usuario]
        Usuario(uid: String!): Usuario
    }

    type Mutation {
    crearUsuario(
        uid: ID!
        identificacion: String!
        nombre: String!
        apellidos: String!
        tipoDocumento: String!
        celular:String!
        correo: String!
    ): Usuario
    tuHistoria(
        uid:ID!
        foto:String!
        genero: String!
        fechaNacimiento: String!
        direccion: String!
        discapacitado: String!
        tipoDiscapacidad: String
        victimaViolencia: String!
        identidadGenero: String!
        orientacionSexual:String!
        grupoPoblacional: String!
        municipio:String!
        departamento:String!
        EPS:String!
        tuHistoria:String!
        serviciosSolicitado: [String]!
        historiaClinica: String!
        sisben: String!
        autorizacionFoto:String!
        recopilacionDatos:String!
        ):Usuario
    }
    

`