// defs.js
// This file has global
// list of ENUMs etc.

//global object to store enums
var ENUM={};

function are_init()
{
    //Relationship types
    var arrReltypes=['ATTRACTION','FRIENSHIP','SYMPATHY','REPULSION','FROWN','JEALOUSY','ANTAGONISM','FEAR','FAMILIARITY'];
    ENUM.RELATION=ArrayToEnum(arrReltypes);
    arrReltypes=null;

    // Intrinsic trait types
    // This list is very random, it will rapidly evolve
    // TODO: Separate SKILLS from TRAITS
    var arrTraits=['RACIST','SEXIST','HOMOPHOBE','HETEROPHOB','CASTIST+','SHY','NOBLE','CROOK','CRIPPLED+','ORPHAN','SLAVE','EMPATHIC','CHARISMATIC','RELIGIOUS'];
    ENUM.TRAIT=ArrayToEnum(arrTraits);
    arrTraits=null;
}

