var loc_strings = {
    "简体中文": {
        "label_offering":"给予",
        "label_silveroffering":"银器给予",
        "label_craving":"满足的需求",
        "label_stations":"烹饪台",
        "label_recipes":"顶级菜谱",
        "label_cook":"首次烹饪",
        "label_cook_unknown":"某人",
        "label_cook_info":"这个菜谱最初由以下人发现， ",
        "label_cook_info_unknown":"这个菜谱最初由某个没有名字的人发现。",
        
        "pot": "烹饪锅(Cookpot)",
        "oven": "烤炉(Oven)",
        "grill": "烤架(Grill)",
        
        "all": "全部(All)",
        "snack": "小吃(Snack)",
        "bread": "面包(Bread)",
        "veggie": "素食(Veggie)",
        "soup": "汤类(Soup)",
        "fish": "鱼类(Fish)",
        "meat": "肉食(Meat)",
        "cheese": "奶酪(Cheese)",
        "pasta": "面条(Pasta)",
        "sweet": "甜食(Dessert)"
        
        "coin1": "古老硬币",
        "coin2": "蓝宝石徽章",
        "coin3": "红色印记",
        "coin4": "噬咬的好感",

        "quagmire_foliage_cooked": "蕨叶",
        "quagmire_onion_cooked": "洋葱",
        "quagmire_carrot_cooked": "胡萝卜",
        "quagmire_mushrooms_cooked": "蘑菇",
        "quagmire_crabmeat_cooked": "蟹肉",
        "quagmire_potato_cooked": "土豆",
        "quagmire_salmon_cooked": "鲑鱼",
        "quagmire_cookedsmallmeat": "肉片",
        "twigs": "树枝",
        "quagmire_turnip_cooked": "芜菁",
        "quagmire_sap": "树液",
        "rocks": "岩石",
        "quagmire_goatmilk": "山羊奶",
        "quagmire_syrup": "糖浆",
        "quagmire_flour": "面粉",
        "quagmire_garlic_cooked": "大蒜",
        "berries_cooked": "浆果",
        "cookedmeat": "大肉",
        "quagmire_tomato_cooked": "番茄根",
        "quagmire_spotspice_ground": "斑点香料",

        "dish1": "面包",
        "dish2": "薯片",
        "dish3": "蔬菜汤",
        "dish4": "果酱三明治",
        "dish5": "鱼汤",
        "dish6": "芜菁糕",
        "dish7": "土豆饼",
        "dish8": "土豆汤",
        "dish9": "鱼丸串",
        "dish10": "肉丸",
        "dish11": "肉串",
        "dish12": "石头汤",
        "dish13": "炸丸子",
        "dish14": "烘蔬菜",
        "dish15": "肉饼",
        "dish16": "胡萝卜汤",
        "dish17": "鱼派",
        "dish18": "炸鱼薯条",
        "dish19": "肉派",
        "dish20": "小汉堡",
        "dish21": "果酱",
        "dish22": "果冻卷",
        "dish23": "胡萝卜蛋糕",
        "dish24": "土豆泥",
        "dish25": "蒜香面包",
        "dish26": "番茄汤",
        "dish27": "香肠",
        "dish28": "糖渍鱼",
        "dish29": "蘑菇包",
        "dish30": "蔬菜杂烩",
        "dish31": "意式烤面包",
        "dish32": "肉汤",
        "dish33": "汉堡",
        "dish34": "鱼肉汉堡",
        "dish35": "蘑菇汉堡",
        "dish36": "鱼排",
        "dish37": "咖喱",
        "dish38": "意式肉丸面",
        "dish39": "千层面",
        "dish40": "煮鱼",
        "dish41": "肉馅薯派",
        "dish42": "糖果",
        "dish43": "布丁",
        "dish44": "华夫饼",
        "dish45": "浆果挞",
        "dish46": "奶酪意面",
        "dish47": "鱼肉面包圈",
        "dish48": "烤奶酪",
        "dish49": "奶油蘑菇汤",
        "dish50": "饺子",
        "dish51": "意式通心面",
        "dish52": "奶酪汉堡",
        "dish53": "意式宽面条",
        "dish54": "洋葱汤",
        "dish55": "面包屑肉排",
        "dish56": "奶油鱼",
        "dish57": "比萨饼",
        "dish58": "罐炖烤肉",
        "dish59": "蟹肉糕",
        "dish60": "牛排薯条",
        "dish61": "射手三明治",
        "dish62": "培根卷肉",
        "dish63": "蟹肉卷",
        "dish64": "惠灵顿肉排",
        "dish65": "蟹肉馄饨",
        "dish66": "方块焦糖",
        "dish67": "司康饼",
        "dish68": "乳脂松糕",
        "dish69": "奶酪蛋糕",
        "dish70": "糖浆"
    }
}


var loc_selected_language = "English";

function GorgeRecipebookLocalize() {

    // Add language buttons
    var btn_language_div = document.createElement("div");
    $(btn_language_div).attr('class', 'btn_language_div');
    for (var language in loc_strings) {
        let button = document.createElement("div");
        $(button).attr('class', "button language_btn");
        $(button).attr('for', language);
        $(button).text(language);
        $(btn_language_div).append(button);
    }
    $('.recipelist').append(btn_language_div);

    // Look for a cookie
    var language = loc_get_cookie("language");
    if (language != null && loc_strings[language] != null) loc_set_language(language);

    // Select the corresponding button
    $(".language_btn[for='" + loc_selected_language + "']").addClass("selected");

    // Setup button listener
    $('.language_btn').on('click', e => {
        // Unselect others
        $('.language_btn').removeClass('selected');

        $(e.target).addClass('selected');

        loc_set_language($(e.target).attr("for"));
    });
}

function loc_set_language(language_key) {
    loc_selected_language = language_key;

    // Update cravings
    var craving_elems = $('.btn_cat_div label.button');
    for (var i = 0; i < craving_elems.length; i++) {
        $(craving_elems[i]).text(loc_string($(craving_elems[i]).attr('for')));
    }

    // Update stations
    var station_elems = $('.btn_station_div label.button');
    for (var i = 0; i < station_elems.length; i++) {
        $(station_elems[i]).text(loc_string($(station_elems[i]).attr('for')));
    }

    // Set a cookie
    loc_set_cookie("language", loc_selected_language, 6);
}

function loc_set_cookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function loc_get_cookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function loc_string(key) {
    return loc_strings[loc_selected_language][key] ||
        loc_strings["English"][key] || "Invalid String";
}
