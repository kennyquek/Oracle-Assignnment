const fdk=require('@fnproject/fdk');
const tools = require('../tools');

fdk.handle(function(input){
    return tools.generate(input);
});
