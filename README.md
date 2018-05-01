# Documentation

## 网站主要技术架构 Structures
-   Wordpress 提供后台网站
-   FastComet 提供Secure Service的主机服务网站
-   Flask   (基于python的轻量级响应式开发框架 (待定))
-	前端部分
	-	MVC 框架
	-	div + css 
	-	wordpress 插件
	-	javascript

## 参考 Reference
-   主页参考
    -   [Airbnb](https://www.airbnb.com)
    -   [异乡好居](https://www.uhouzz.com)
-   地图搜索引擎
    -    [Google Map API](https://developers.google.com/maps/documentation/)
    -    [地图中文教程](http://www.runoob.com/googleapi/googleapi-tutorial.html)
	-	 [站内搜索引擎中文教程](https://www.gznotes.com/wordpress-custom-search/)
	-	 [Google Search Engine api](https://cse.google.com.hk/cse/)
## 乙方设计要求 User requirement
-	用户注册(房东，房)(房屋信息，个人信息)(合约)
-	房东月历
-	信息收发，邮件自动发送
-	房源搜索：类型条件式搜索（地铁线路）
-	收费功能： 房客 -> 平台(佣金) -> 房东
-	收藏
-	查看
-	评价
-	支付接口
-	法律合同页面
-	DocuSign (电子签名)

## 开发计划流程 Development 

-	第一阶段： 前期准备
	-	完善甲方合同
		-	完善的过程中需要初步拟定设计方案。
		-	合同
			-	前期准备
				-	参考借鉴其他的合同格式
				-	制定有益于乙方的合同
			-	制定设计方案
				-	设计方案需要


## 设计细节 Details
-	顶端拦参照Airbnb与异乡好居的设计模式
	-	左上方有LOGO字样
	-	右上方主要是"我有房源(Become a host)“，“登陆(Log in)“, "注册(sign up)"
		-	登陆 Log in 
			-	点击会弹出一个Popup窗口，这时背景可以变暗，然后里面有几个登陆关联，facebook, 微信, google都可以支持
			-	然后继续产生新的Popup，按照各自关联的流程走
			-	流程结束后返回到更新的主页，这时导航栏需要更新到登陆后的状态(wordpress应该有这个功能)
		-	注册 Sign up
			-	注册的时候可以有两种选择，对应"我有房源Become a host“ "我要找房Rent a house“
				-	我有房源
					-	这里可以做跳转也可以继续做Pop Up，会有一个form需要填写
					-	form会上传到我们的数据库，所以这里需要用wordpress做数据库管理 (能用wordpress生成最好)
					-	填完了过后应该跳转到房源的用户界面，或者继续进一步的设置
				-	我要找房
					-	这里同上面的逻辑差不多，不过要注意的是需要做一个不同的用户界面。
						-	房客用户界面的内容需要进一步讨论 !!!!!!!!!!!!!!
-	“门面” 参考各类网站的设计
	-	可以做成插图类，也可以做视频类，主要为了吸引眼球
	-	两种选择
		-	可滑动的界面
			-	信息比较多
		-	单界面
			-	亮眼，简洁
	-	搜索引擎
		-	可以使用谷歌Api构建站内搜索
-	数据库设计部分
	-	可以画出ER Diagram,但是整理的部分只需学习Wordpress自建的基于MySQL的图形化界面










