var yanza = {
	mail: function(a) {
		var b = !1;
		return /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(a) && (b = !0), b
	},
	phone: function(a) {
		var b = !1;
		return a.match(/^13[0-9]{9}|15[0-9]{9}|17[0-9]{9}|18[0-9]{9}$/) && 11 == a.length && (b = !0), b
	},
	car_t: function(a) {
		var b = !1;
		return /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(a) && (b = !0), b
	}
};
var version = "9.2.1"
var apiBaseUrl = 'http://test.xiaobay.com';
try {
	Vue.prototype.zhu = function(url, don, zhi) {
		mui.openWindow({
			url: url + '.html',
			id: url,
			show: {
				aniShow: don ? don : "pop-in", //动画
				duration: 300 //持续时间
			},
			extras: zhi
		});
	}

	Vue.prototype.tzqq_w = function() {
		plus.runtime.openURL("http://wpa.qq.com/msgrd?v=3&uin=515235416&site=qq&menu=yes")
	}

	Vue.prototype.city = function(callback) { //选择城市  
		document.activeElement.blur();
		var chengshi = new mui.PopPicker({
			"layer": [3]
		});
		chengshi.setData(cityData3)
		chengshi.show(function(rl) {
			var sd_sdf = ""
			sd_sdf = rl[0].text + "-" + rl[1].text
			if(rl[2].text) {
				sd_sdf += "-" + rl[2].text
			}
			try {
				callback(sd_sdf)
			} catch(e) {

			}
		})
	}
	Vue.prototype.select_z = function(data, callback) { //单选框
		document.activeElement.blur();
		var khyh = new mui.PopPicker();
		khyh.setData(data)
		khyh.show(function(rl) {
			var sd_sdf = rl
			try {
				callback(sd_sdf)
			} catch(e) {

			}
		})
	}

	Vue.filter("time", function(t) {
		var sd_sdf = new Date()
		sd_sdf.setTime(t * 1000)
		return new Date(sd_sdf).Format("yyyy-MM-dd")
	})

	Vue.filter("zhaungtai", function(t) {
		var sd_dser = ""
		if(t == 1) {
			sd_dser = "申请中"
		}
		if(t == 2) {
			sd_dser = "付款完成"
		}
		if(t == 3) {
			sd_dser = "付款失败"
		}
		return sd_dser
	})

} catch(e) {

}

Date.prototype.Format = function(fmt) { //author: meizz 
	var o = {
		"M+": this.getMonth() + 1, //月份 
		"d+": this.getDate(), //日 
		"h+": this.getHours(), //小时 
		"m+": this.getMinutes(), //分 
		"s+": this.getSeconds(), //秒 
		"q+": Math.floor((this.getMonth() + 3) / 3), //季度 
		"S": this.getMilliseconds() //毫秒 
	};
	if(/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	for(var k in o)
		if(new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
	return fmt;
}

//下拉刷新
function xiala(shua, time) {
	var ws = plus.webview.currentWebview();
	ws.setPullToRefresh({
		support: true,
		height: '50px',
		range: '200px',
		contentdown: {
			caption: '下拉可以刷新'
		},
		contentover: {
			caption: '释放立即刷新'
		},
		contentrefresh: {
			caption: '正在刷新...'
		}
	}, function() {

		if(time) {
			setTimeout(function() {
				shua()
				ws.endPullToRefresh();
			}, time)
		} else {
			shua()
			ws.endPullToRefresh();
		}

	});
}

function assign_dsdf(jsonbject1, jsonbject2) {
	var resultJsonObject = {};
	for(var attr in jsonbject1) {
		resultJsonObject[attr] = jsonbject1[attr];
	}
	for(var attr in jsonbject2) {
		resultJsonObject[attr] = jsonbject2[attr];
	}
	return resultJsonObject;
};

function zhu(url, don, zhi) {
	mui.openWindow({
		url: url + '.html',
		id: url,
		show: {
			aniShow: don ? don : "pop-in", //动画
			duration: 300 //持续时间
		},
		extras: zhi
	});
}

function zhuer(url, don, zhi) {
	mui.openWindow({
		url: url,
		id: url,
		show: {
			aniShow: don ? don : "pop-in", //动画
			duration: 300 //持续时间
		},
		extras: zhi
	});
}
//上拉加载
function shangla(call) {
	document.addEventListener("plusscrollbottom", function() {
		call()
	}, false);
}
//分享
function shareSystem() {
	plus.share.sendWithSystem({

		content: '独行工匠',
		href: 'http://duxinggj.com/'
	}, function() {
		console.log('分享成功');
	}, function(e) {
		console.log('分享失败：' + JSON.stringify(e));
	});
}

//窗口滑动切换
function qiehuan(da_iu, call_bk, type_e,num) {
	mui.plusReady(function() {
		var _self = plus.webview.currentWebview();
		var sd_dsd = []
		da_iu.map(function(a) {
			var sd_sff = {}
			sd_sff.id = a.url + a.id
			sd_sff.url = a.url

			sd_sff.extras = {
				chanshu: a.id
			}
			if(type_e) {
				sd_sff.extras.type_e = type_e
			}

			sd_dsd.push(sd_sff)
		})
		var group = new webviewGroup(_self.id, {
			items: sd_dsd,
			onChange: function(obj) {
				var c = document.querySelector(".mui-control-item.mui-active");
				if(c) {
					c.classList.remove("mui-active");
				}
				var target = document.querySelector(".mui-scroll .mui-control-item:nth-child(" + (parseInt(obj.index) + 1) + ")");
				target.classList.add("mui-active");
				if(target.scrollIntoView) {
					target.scrollIntoView();
				}
			}
		},num);

		call_bk(group)
		mui(".mui-content").on("tap", ".mui-control-item", function(e) {
			var c = document.querySelector(".mui-control-item.mui-active");

			c.classList.remove("mui-active");

			var wid = this.getAttribute("data-wid");
			group.switchTab(wid);
		});
	})
}

function hasClass(elem, cls) {
	cls = cls || '';
	if(cls.replace(/\s/g, '').length == 0) return false; //当cls没有参数时，返回false
	return new RegExp(' ' + cls + ' ').test(' ' + elem.className + ' ');
}

function m_ajax(url, dat_a, call_blck, ty) {
	var sd_sd = ""
	if(!ty) {
		try {
			sd_sd = plus.nativeUI.showWaiting("处理中，请等待...");
		} catch(e) {

		}
	}

	$.ajax({
		type: 'POST',
		url: apiBaseUrl + url,
		data: dat_a,
		contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
		dataType: 'json',
		success: function(data) {
			try {
				sd_sd.close()
			} catch(e) {

			}
			if(data.status == 1 && !ty) {
				var sd_dertt = ""
				try {
					sd_dertt = plus.nativeUI.showWaiting(data.msg);
				} catch(e) {
				}
				setTimeout(function() {
					try {
						sd_dertt.close()
					} catch(e) {

					}
					call_blck(data.data, data.request,data)
				}, 500) 
				return
			}
			if(data.status == 2) {
				alert(2)
				call_blck(data.data, data.request,data)
				return
			}
			if(data.status == "40003" && !ty) {
			zhu("login")
				mui.toast(data.msg)
				return
			}
			if(data.status > 100 && !ty) {
				mui.toast(data.msg)
				return
			}

			call_blck(data.data, data.request,data)
		},
		error: function(res) { 
			alert(JSON.stringify(res))
			try {

				mui.toast(res.responseJSON.msg)
				sd_sd.close()
			} catch(e) {

			}
		}
	});

}
if(!localStorage.key_s) {
	m_ajax("/api/common/getKey", "", function(data) {
		localStorage.key_s = data.key
	})
} else {
	console.log(localStorage.key_s)
}

var sc = {
	xz: function(title, call_back) {
		if(mui.os.plus) {
			mui.confirm(" ", (title || '上传头像'), ['相册', '拍照'], function(e) {
				if(e.index == 1) { //拍照
					sc.pai(call_back); //拍照
				} else { //相册
					sc.xiang(call_back); //相册
				}

			}, 'div')
		}
	},
	pai: function(call_back) {
		var sd_sdsd = ""
		var c = plus.camera.getCamera();
		c.captureImage(function(e) {
			plus.io.resolveLocalFileSystemURL(e, function(entry) {
				var s = entry.toLocalURL() + "?version=" + new Date().getTime();
				uploadHead(s, function(url) {
					call_back(url)
				}, true)

			}, function(e) {
				console.log("读取拍照文件错误：" + e.message);
			});
		}, function(s) {
			console.log("error" + s);
		}, {
			filename: "_doc/head.png"
		})

		return sd_sdsd
	},
	xiang: function(call_back) {
		var sd_sdsd = ""
		plus.gallery.pick(function(a) {
			plus.io.resolveLocalFileSystemURL(a, function(entry) {
				plus.io.resolveLocalFileSystemURL("_doc/", function(root) {
					root.getFile("head.png", {}, function(file) {
						file.remove(function() {
							entry.copyTo(root, 'head.png', function(e) {
									var e = e.fullPath + "?version=" + new Date().getTime();
									uploadHead(e, function(url) {
										call_back(url)
									}, true);
								},
								function(e) {
									console.log('copy image fail:' + e.message);
								});
						}, function() {
							console.log("delete image fail:" + e.message);
						});
					}, function() {
						entry.copyTo(root, 'head.png', function(e) {
								var path = e.fullPath + "?version=" + new Date().getTime();
								uploadHead(path, function(url) {
									call_back(url)
								}, true); /*上传图片*/
							},
							function(e) {
								console.log('copy image fail:' + e.message);
							});
					});
				}, function(e) {
					console.log("get _www folder fail");
				})
			}, function(e) {
				console.log("读取拍照文件错误：" + e.message);
			});

		}, function(a) {}, {
			filter: "image"
		})
		return
	}
}

var Base64 = {

	// private property
	_keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",

	// public method for encoding
	encode: function(input) {
		var output = "";
		var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
		var i = 0;

		input = Base64._utf8_encode(input);

		while(i < input.length) {

			chr1 = input.charCodeAt(i++);
			chr2 = input.charCodeAt(i++);
			chr3 = input.charCodeAt(i++);

			enc1 = chr1 >> 2;
			enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
			enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
			enc4 = chr3 & 63;

			if(isNaN(chr2)) {
				enc3 = enc4 = 64;
			} else if(isNaN(chr3)) {
				enc4 = 64;
			}

			output = output + this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) + this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);

		}

		return output;
	},

	// public method for decoding
	decode: function(input) {
		var output = "";
		var chr1, chr2, chr3;
		var enc1, enc2, enc3, enc4;
		var i = 0;

		input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

		while(i < input.length) {

			enc1 = this._keyStr.indexOf(input.charAt(i++));
			enc2 = this._keyStr.indexOf(input.charAt(i++));
			enc3 = this._keyStr.indexOf(input.charAt(i++));
			enc4 = this._keyStr.indexOf(input.charAt(i++));

			chr1 = (enc1 << 2) | (enc2 >> 4);
			chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
			chr3 = ((enc3 & 3) << 6) | enc4;

			output = output + String.fromCharCode(chr1);

			if(enc3 != 64) {
				output = output + String.fromCharCode(chr2);
			}
			if(enc4 != 64) {
				output = output + String.fromCharCode(chr3);
			}

		}

		output = Base64._utf8_decode(output);

		return output;

	},

	// private method for UTF-8 encoding
	_utf8_encode: function(string) {
		string = string.replace(/\r\n/g, "\n");
		var utftext = "";

		for(var n = 0; n < string.length; n++) {

			var c = string.charCodeAt(n);

			if(c < 128) {
				utftext += String.fromCharCode(c);
			} else if((c > 127) && (c < 2048)) {
				utftext += String.fromCharCode((c >> 6) | 192);
				utftext += String.fromCharCode((c & 63) | 128);
			} else {
				utftext += String.fromCharCode((c >> 12) | 224);
				utftext += String.fromCharCode(((c >> 6) & 63) | 128);
				utftext += String.fromCharCode((c & 63) | 128);
			}

		}

		return utftext;
	},

	// private method for UTF-8 decoding
	_utf8_decode: function(utftext) {
		var string = "";
		var i = 0;
		var c = c1 = c2 = 0;

		while(i < utftext.length) {

			c = utftext.charCodeAt(i);

			if(c < 128) {
				string += String.fromCharCode(c);
				i++;
			} else if((c > 191) && (c < 224)) {
				c2 = utftext.charCodeAt(i + 1);
				string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
				i += 2;
			} else {
				c2 = utftext.charCodeAt(i + 1);
				c3 = utftext.charCodeAt(i + 2);
				string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
				i += 3;
			}

		}

		return string;
	}

}

function get_TE(call_back, kje) {
	var sd_der = {},
		th = this
	sd_der.key = localStorage.token
	sd_der.event = kje || 1
	m_ajax("/api/common/getQiniuToken", sd_der, function(data) {
		call_back(data)
	})
}

function putb64(base_64, datae, callback) {

	var key = "uploads" + datae.filePath;
	var pic = base_64;
	key = Base64.encode(key);
	var url = 'http://upload.qiniu.com/putb64/-1/key/' + key; //非华东空间需要根据注意事项 1 修改上传域名
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if(xhr.readyState == 4) {
			callback(datae.domain + "/" + JSON.parse(xhr.responseText).key)
		}
	}
	xhr.open("POST", url, true);
	xhr.setRequestHeader("Content-Type", "application/octet-stream");
	xhr.setRequestHeader("Authorization", "UpToken " + datae.token);
	xhr.send(pic);
}

//上传头像图片 
function uploadHead(imgPath, cllblack, sd_sdf) {
	var image = new Image();
	image.src = imgPath;
	var imgData = ""
	image.onload = function() {
		imgData = ""
		if(sd_sdf) {
			imgData = getBase64Imageer(image);
		} else {
			imgData = getBase64Image(image);
		}

		cllblack(imgData)
		var sd_sdff = {}
		sd_sdff.logo = imgData
	}
}
//将图片压缩转成base64 
function getBase64Image(img) {
	var canvas = document.createElement("canvas");
	var width = img.width;
	var height = img.height;
	// calculate the width and height, constraining the proportions 
	if(width > height) {
		if(width > 100) {
			height = Math.round(height *= 100 / width);
			width = 100;
		}
	} else {
		if(height > 100) {
			width = Math.round(width *= 100 / height);
			height = 100;
		}
	}
	canvas.width = width; /*设置新的图片的宽度*/
	canvas.height = height; /*设置新的图片的长度*/
	var ctx = canvas.getContext("2d");
	ctx.drawImage(img, 0, 0, width, height); /*绘图*/
	var dataURL = canvas.toDataURL("image/png", 0.8);
	return dataURL.replace("data:image/png;base64,", "");
}
//将图片压缩转成base64 
function getBase64Imageer(img) {
	var canvas = document.createElement("canvas");
	var width = img.width;
	var height = img.height;
	// calculate the width and height, constraining the proportions 
	if(width > height) {
		if(width > 640) {
			height = Math.round(height *= 640 / width);
			width = 640;
		}
	} else {
		if(height > 640) {
			width = Math.round(width *= 640 / height);
			height = 640;
		}
	}
	canvas.width = width; /*设置新的图片的宽度*/
	canvas.height = height; /*设置新的图片的长度*/
	var ctx = canvas.getContext("2d");
	ctx.drawImage(img, 0, 0, width, height); /*绘图*/
	var dataURL = canvas.toDataURL("image/png", 0.8);
	return dataURL.replace("data:image/png;base64,", "");
}

//分类
var fenlei = [{
	id: 1,
	name: "服装鞋包",
	cls: ""
}, {
	id: 2,
	name: "手机数码",
	cls: ""
}, {
	id: 3,
	name: "家用电器",
	cls: ""
}, {
	id: 4,
	name: "美妆饰品",
	cls: ""
}, {
	id: 5,
	name: "母婴用品",
	cls: ""
}, {
	id: 6,
	name: "家居建材",
	cls: ""
}, {
	id: 7,
	name: "百货食品",
	cls: ""
}, {
	id: 8,
	name: "运动户外",
	cls: ""
}, {
	id: 9,
	name: "文化娱乐",
	cls: ""
}, {
	id: 10,
	name: "生活服务",
	cls: ""
}, {
	id: 11,
	name: "汽摩配件",
	cls: ""
}, {
	id: 12,
	name: "游戏话费",
	cls: ""
}]

var dengji = [{
	value: 1,
	text: "3心"
}, {
	value: 2,
	text: "4心"
}, {
	value: 3,
	text: "5心"
}, {
	value: 4,
	text: "1钻"
}, {
	value: 5,
	text: "2钻"
}, {
	value: 6,
	text: "3钻以上"
}]

function copyShareUrl(copy_content) { //复制
	mui.plusReady(function() {
		//复制链接到剪切板
		//判断是安卓还是ios
		if(mui.os.ios) {
			//ios
			var UIPasteboard = plus.ios.importClass("UIPasteboard");
			var generalPasteboard = UIPasteboard.generalPasteboard();
			//设置/获取文本内容:
			generalPasteboard.plusCallMethod({
				setValue: copy_content,
				forPasteboardType: "public.utf8-plain-text"
			});
			generalPasteboard.plusCallMethod({
				valueForPasteboardType: "public.utf8-plain-text"
			});
		} else {
			//安卓
			var context = plus.android.importClass("android.content.Context");
			var main = plus.android.runtimeMainActivity();
			var clip = main.getSystemService(context.CLIPBOARD_SERVICE);
			plus.android.invoke(clip, "setText", copy_content);
		}
	});
}

function getClipbordText() {
	if(!window.plus) return;
	if(mui.os.android) {
		var Context = plus.android.importClass("android.content.Context");
		var main = plus.android.runtimeMainActivity();
		var clip = main.getSystemService(Context.CLIPBOARD_SERVICE);
		return plus.android.invoke(clip, "getText");
	} else {
		var UIPasteboard = plus.ios.importClass("UIPasteboard");
		var generalPasteboard = UIPasteboard.generalPasteboard();
		// 设置/获取文本内容:
		//generalPasteboard.setValueforPasteboardType("testValue", "public.utf8-plain-text");
		//var _val = generalPasteboard.valueForPasteboardType("public.utf8-plain-text");
		//TODO 应用在后台的时候获取剪切版数据被系统限制了，只有在app内才能访问接口
		var _val = generalPasteboard.plusCallMethod({
			valueForPasteboardType: "public.utf8-plain-text"
		});
		console.log("ios复制返回的数据是：", _val);
		return _val || '';

	}
}