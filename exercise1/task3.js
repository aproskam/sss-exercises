//  ===================================
//  = Serverside scripting in node.js =
//  ===================================

//                                    .__                 ____
//   ____ ___  ___ ___________   ____ |__| ______ ____   /_   |
// _/ __ \\  \/  // __ \_  __ \_/ ___\|  |/  ___// __ \   |   |
// \  ___/ >    <\  ___/|  | \/\  \___|  |\___ \\  ___/   |   |
//  \___  >__/\_ \\___  >__|    \___  >__/____  >\___  >  |___|
//      \/      \/    \/            \/        \/     \/

//  ==========
//  = Task 3 =
//  ==========
//  Creating a module

// We wrapped this code in a try-catch to prevent it
// from crashing when the file has not been created


  var myStringModule = require('./lib/string-helper');

  console.log(myStringModule.titleize('give me titlecase'));
  // kick of test

