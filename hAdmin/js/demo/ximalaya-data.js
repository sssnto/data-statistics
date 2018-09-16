/*!
 * Remark (http://getbootstrapadmin.com/remark)
 * Copyright 2015 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */


(function(document, window, $) {
  'use strict';

  // Example Bootstrap Table From Data
  // ---------------------------------
  (function() {
    var bt_data = [{
      "Tid": "1",
      "First": "奔波儿灞",
      "sex": "男",
      "Score": "50"
    }, {
      "Tid": "2",
      "First": "灞波儿奔",
      "sex": "男",
      "Score": "94"
    }, {
      "Tid": "3",
      "First": "作家崔成浩",
      "sex": "男",
      "Score": "80"
    }, {
      "Tid": "4",
      "First": "韩寒",
      "sex": "男",
      "Score": "67"
    }, {
      "Tid": "5",
      "First": "郭敬明",
      "sex": "男",
      "Score": "100"
    }, {
      "Tid": "6",
      "First": "马云",
      "sex": "男",
      "Score": "77"
    }, {
      "Tid": "7",
      "First": "范爷",
      "sex": "女",
      "Score": "87"
    }];
  //   var url = 'https://www.ximalaya.com/revision/search?core=album&kw=%E5%8C%97%E4%BA%AC%E9%98%B3%E5%85%89%E5%8D%9A%E5%AE%A2&page=1&spellchecker=true&rows=100';


  var url = 'https://www.ximalaya.com/revision/search?core=album&kw=%E5%8C%97%E4%BA%AC%E9%98%B3%E5%85%89%E5%8D%9A%E5%AE%A2&page=1&spellchecker=true&rows=100';
  // var param = {core:'album',kw:"%E5%8C%97%E4%BA%AC%E9%98%B3%E5%85%89%E5%8D%9A%E5%AE%A2",page:1,rows:100}
  var jsonData=$.ajax({url:url,async:false});

  var displayData = jsonData.responseJSON.data.result.response.docs;

    $('#exampleTableFromData').bootstrapTable({
      data: displayData,
      mobileResponsive: true,
      // height: "250"
    });
  })();

 
})(document, window, jQuery);
