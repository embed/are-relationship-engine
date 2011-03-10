// util.js
// This file contains several utility functions
// This should always be included first



//Easy way to create enums
//Given an array of strings,
//this will create an ENUM-like object
//and start numbering from 0
function ArrayToEnum(arr)
{
    var len = arr.length;
    var en = {};
    for(i=0;i<len;i++)
        en[arr[i]]=i;
    return en;
}

//test the functionality
function deneme()
{
    a=['zero','one','two'];
    b=ArrayToEnum(a);

    console.debug(b.one);
}

//window.onload=deneme;

