<template>
	<div class="Login">
		<div class="header">
			<div class="logo"><img src="../assets/images/login/logo.png" /></div>
			<div class="other">
				<a href="http://test.edrmd.com:1443/vsep/student/yanshi.pdf" target="_blank" class="sb_btn sb_zm"><span>应用证明</span></a>
				<a href="http://test.edrmd.com:1443/vsep/student/shenbao.mp4" target="_blank" class="sb_btn sb_zm"><span>申报说明</span></a>
				<!-- <router-link to="" class="sb_btn sb_video"><span>申报视频</span></router-link>
				<router-link to="" class="sb_btn sb_book"><span>申报书</span></router-link>-->
			</div>
		</div>
		<!-- 注册弹框开始 -->
		<el-dialog title="注册" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
			<span>
				<el-form :model="registerForm" :rules="register_rules" ref="registerForm" class="demo-ruleForm">
					<el-form-item prop="userName">
						<div class="register">
							<el-input ref="" v-model.trim="registerForm.userName" placeholder="请输入您的账号" class="usern" />
						</div>
					</el-form-item>
					<el-form-item prop="university">
						<div class="register">
							<el-input ref="" v-model.trim="registerForm.university" placeholder="请输入您的学校" class="usern" />
						</div>
					</el-form-item>
					<el-form-item prop="pass">
						<div class="register">
							<el-input type="" ref="" v-model.trim="registerForm.pass" placeholder="请输入您的密码" class="passw" />
						</div>
					</el-form-item>
					<el-form-item prop="checkPass">
						<div class="register">
							<el-input type="" ref="repassword" v-model.trim="registerForm.checkPass" placeholder="再次输入您的密码" class="passw" />
						</div>
					</el-form-item>
				</el-form>
			</span>
			<span slot="" class="dialog-footer" style="text-align: center;">
				<el-button @click="dialogVisible = false">取 消</el-button>
				<el-button type="primary" @click="register">注 册</el-button>
			</span>
		</el-dialog>
		<!-- 注册弹结束 -->
		<!--公告-->
		<!--<div class="announce">
			<div ref="wrap" class="announcement">
				<div class="scrollOuter">
					<div ref="start" class="start">
						<span>人体解剖学3D数字标本教学系统开放了</span>
						<span style="color:transparent">本身是跳转页面的，本身是跳转页面的把跳转的页面地址写</span>
					</div><div class="end">
					<span>人体解剖学3D数字标本教学系统开放了</span>
					<span style="color:transparent">本身是跳转页面的，把跳转的页面地址写在href这个属性A标签本身是跳转页面的，把跳转的页面地址写在href这个属性把跳转的页面地址写在href这个属性</span>
				</div>
				</div>
			</div>
		</div>-->

		<div class="userInfo">
			<div class="loginBox">
				<div class="login_form">
					<div class="headpic_div">
						<div class="headpic"><img src="../assets/images/login/login_icon.png" /></div>
						<p>{{ loginFirst }}</p>
					</div>

					<!--<div id="div_msg_show" v-show="ruleForm.userName === '' || ruleForm.password === ''" class="error_prompt" style=" display:none;">
						<img src="../assets/images/login/icon_warning.png" />
						<span id="Lab_msg">{{ inputName }}</span>
					</div>-->
					<div v-show="input_group" id="input_group" class="input_group">
						<el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
							<el-form-item prop="userName">
								<div class="input_div user">
									<el-input ref="userName" v-model.trim="ruleForm.userName" placeholder="请输入您的账号" class="usern" />
								</div>
							</el-form-item>
							<el-form-item prop="password">
								<div class="input_div pass">
									<el-input type="password" ref="password" v-model.trim="ruleForm.password" placeholder="请输入您的密码" class="passw" />
								</div>
							</el-form-item>
						</el-form>
						<div class="login_btn" @click="login('ruleForm')">登 录</div>
						<!-- <div class="czzn" @click="registerBtn">注册</div> -->
						<el-button type="text" @click="registerBtn">注册</el-button>
						<el-button type="text" @click="prompt">访客说明</el-button>
						<div v-if="promptShow" class="prompt">
							<i style="position: absolute;top:10px;right:10px; cursor: pointer;" @click="testClose" class="el-icon-close"></i>
							<p>您可以使用以下账号密码进行测试</p>
							<div><span>访客账号1：test1</span>&nbsp;<span>密码：test1</span></div>
							<div><span>访客账号2：test2</span>&nbsp;<span>密码：test2</span></div>
							<div><span>访客账号3：test3</span>&nbsp;<span>密码：test3</span></div>
						</div>

					</div>
					<div v-show="login_success" id="login_success" class="login_success">
						<p class="welcome">欢迎使用!</p>
						<el-button type="danger" style="width: 300px;" class="cancel_btn" @click="exit">注 销</el-button>
					</div>
				</div>
				<div v-show="register_group" class="register_group">

					<div class="login_btn" @click="register('registerForm')">注 册</div>
				</div>
			</div>
			<div class="xt_intro">
				<p>
					首创混合解剖教学模式，解剖标本可360度自由转动、标注、3000万象素的高清图像，解剖结构采用互动点击的标注，解决标本缺乏、结构辨认不准确、标本针对性不突出及学生难以理解等问题。
					解剖标本配有“标本说明”、“结构说明”、“基本概念”和“知识拓展”等信息，有利于学生轻松自主学习。
				</p>
			</div>
		</div>
		<div class="subSelect">
			<div class="subTitle">
				<div v-for="subject in subjects" :key="'subject' + subject.id" @click="selectCategory(subject, subject.id)"><img
					 :src="subject.image" /></div>
				<div @click="test3d"><img src="../assets/images/login/btn4.png" /></div>
				<div><img src="../assets/images/login/btn5.png" /></div>
				<div @click="selectPerInfo"><img src="../assets/images/login/btn6.png" /></div>
			</div>
		</div>
		<div class="browser">
			<div class="screen">
				<p>建议在电脑屏幕分辨率大于1280的情况下使用该系统</p>
			</div>
			<div class="advice">
				<p>
					本系统推荐使用浏览器
					<span><a href="http://www.google.cn/intl/zh-CN/chrome/browser/desktop/index.html" target="_blank">Google Chrome</a></span>
					|
					<span><a href="http://www.firefox.com.cn/" target="_blank">Firefox(火狐)</a></span>
					|
					<span><a href="http://windows.microsoft.com/zh-cn/internet-explorer/download-ie" target="_blank">IE 10.0上</a></span>
					请下载安装后使用
				</p>
			</div>
		</div>
		<div class="selectOuter" id="selectOuter">
			<div class="selectSub">
				<div class="selectTop">请选择学科</div>
				<ul>
					<li v-for="category in subCategory" :key="'category' + category.id" @click="selectSub(category.id, category.name)">{{ category.name }}</li>
				</ul>
				<div class="selectClose" @click="selectClose"><i class="el-icon-close"></i></div>
			</div>
		</div>
		<div class="loading" id="loading"></div>
	</div>
</template>
<script>
	import https from '../https.js';
	import {
		Message
	} from 'element-ui'
	//'20180223002z',
	export default {
		data() {
			let validatePass = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('请输入密码'));
				} else {
					if (this.registerForm.checkPass !== '') {
						this.$refs.registerForm.validateField('checkPass');
					}
					callback();
				}
			};
			let validatePass2 = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('请再次输入密码'));
				} else if (value !== this.registerForm.pass) {
					callback(new Error('两次输入密码不一致!'));
				} else {
					callback();
				}
			};
			return {
				loginFirst: '请先登录',
				inputName: '请填写用户名和密码',
				id: '',
				ruleForm: {
					userName: '',
					password: '',

				},
				registerForm: {
					userName: '',
					pass: '',
					checkPass: ''
				},
				rules: {
					userName: [{
							required: true,
							message: '请输入用户名',
							trigger: 'blur'
						},
						{
							min: 3,
							max: 50,
							message: '长度在 3 到 50个字符',
							trigger: 'blur'
						}
					],
					password: [{
						required: true,
						message: '请输入密码',
						trigger: 'blur'
					}],
				},
				register_rules: {
					userName: [{
							required: true,
							message: '请输入用户名',
							trigger: 'blur'
						},
						{
							min: 3,
							max: 50,
							message: '长度在 3 到 50个字符',
							trigger: 'blur'
						}
					],
					pass: [{
						validator: validatePass,
						trigger: 'blur'
					}],
					checkPass: [{
						validator: validatePass2,
						trigger: 'blur'
					}]
				},
				subjects: '', //this.$store.state.menusModule.subjects,
				subCategory: '', //this.$store.state.menusModule.subjects[0].subCategory
				login_success: false,
				div_msg_show: true,
				input_group: true,
				logined: false,
				register_group: false,
				dialogVisible: false,
				promptShow:false
			};
		},
		computed: {
			storage() {
				return this.$store.state.localStorage;
			}
		},
		watch: {
			storage: {
				handler(newName, oldName) {
					newName = JSON.parse(newName);
					if (newName.length !== 0) {
						this.login_success = true;
						this.input_group = false;
						this.loginFirst = this.ruleForm.userName;
						this.logined = true;
					} else {
						this.logined = false;
						this.input_group = true;
						this.login_success = false;
						this.loginFirst ='请先登录';
					}
				},
				deep: true
			},
			logined(){
				if (this.logined === true) {
					let online = 0;
					let timer = setInterval(function() {
						online += 5;
						https.fetchPost('/student/info/record/online', {time:online}).then(res => {
							//console.log('online',online);
							if (!JSON.parse(localStorage.getItem("token"))) {
								clearInterval(timer);
							}
						}).catch(err => {
							console.log(err);
						})
					}, 300000);
				}
			}
		},
		created() {
			this.init();
			if (JSON.parse(localStorage.getItem("token"))) {
				this.login_success = true;
				this.input_group = false;
				this.loginFirst = this.$store.state.userName;
				this.logined = true;
			} else {
				this.logined = false;
				this.input_group = true;
				this.login_success = false;
			}




		},
		/*mounted(){
			let wrap = this.$refs.wrap;
			let startWidth = this.$refs.start.offsetWidth;
			let timer = setInterval(function () {
				if (wrap.scrollLeft === startWidth) {
					wrap.scrollLeft = 0;
				}
				wrap.scrollLeft++;
			}, 20);
		},*/
		methods: {
			init() {
				https.fetchPost('/student/home')
					.then(res => {
						this.subjects = res.data.data.college;
					})
					.catch(err => {
						console.log(err);
					});

			},
			/*注册弹框开始*/
			handleClose(done) {
				this.$confirm('确认关闭？')
					.then(_ => {
						done();
					})
					.catch(_ => {});
			},
			/*注册弹框结束*/
			login(ruleForm) {
				/*let div_msg = document.getElementById('div_msg_show');
				let login_success = document.getElementById('login_success');
				let input_group = document.getElementById('input_group');
				if (this.ruleForm.userName === '') {
					div_msg.style.display = 'block';
					this.inputName = '请输入用户名';
					this.$refs.userName.focus();
					return false;
				}
				if (this.password === '') {
					div_msg.style.display = 'block';
					this.inputName = '请输入密码';
					this.$refs.password.focus();
					return false;
				}*/
				this.$refs[ruleForm].validate(valid => {
					if (valid) {
						https.fetchPost('/auth/login', {
								username: this.ruleForm.userName,
								password: this.ruleForm.password
							})
							.then(res => {
								//console.log(res);
								if (res.data.status === '0000') {
									//div_msg.style.display = 'none';
									/*login_success.style.display = 'block';
                                    input_group.style.display = 'none';*/
									this.login_success = true;
									this.input_group = false;
									localStorage.setItem('token', JSON.stringify(res.headers['x-token']));
									this.$store.commit('updateStorage', JSON.stringify(res.headers['x-token']));
									this.loginFirst = this.ruleForm.userName;
									this.$store.commit('updateUserName',this.ruleForm.userName);
									this.logined = true;
								}
							})
							.catch(err => {
								Message({
									message: err
								});
								//console.log(err);
							});
					} else {
						console.log('error submit!!')
						return false
					}
				});

			},

			selectCategory(subject, index) {
				//let param=JSON.stringify({'id':index});
				console.log('logined', this.logined);
				if (this.logined === false) {
					Message({
						message: '请先登录'
					});
					return false;
				}

				https.fetchPost('/student/home/subject', {
						id: index
					})
					.then(res => {
						this.subCategory = res.data.data;
					})
					.catch(err => {
						console.log(err);
					});
				let selectOuter = document.getElementById('selectOuter');
				selectOuter.style.display = 'flex';
				let loading = document.getElementById('loading');
				loading.style.display = 'block';
			},
			selectPerInfo() {
				if (this.logined === false) {
					Message({
						message: '请先登录'
					});
					return false;
				}
				this.$store.commit('updateSubjectName', '个人中心');
				this.$router.push({
					path: '/index',
					query: {
						subjectName: '个人中心',
						title: 'PerInfo'
					}
				});
			},
			selectClose() {
				let selectOuter = document.getElementById('selectOuter');
				selectOuter.style.display = 'none';
				let loading = document.getElementById('loading');
				loading.style.display = 'none';
			},
			selectSub(id, name) {
				this.$store.commit('updateSubjectId', id);
				this.$store.commit('updateSubjectName', name);
				this.$store.state.menusModule.menus = [];
				this.$router.push({
					path: '/index',
					query: {
						subjectName: name,
						id: id
					}
				});
			},
			exit() {
				this.input_group = true;
				this.login_success = false;
				https.fetchPost('/auth/logout').then(res => {
					if (res.data.status === '0000') {
						localStorage.setItem('token', JSON.stringify(''));
					}
				}).catch(err => {
					console.log(err);
				});
				this.ruleForm.userName = '';
				this.ruleForm.password = '';
				this.loginFirst = '请先登录';
				this.logined = false;
			},
			test3d() {
				if (this.logined === false) {
					Message({
						message: '请先登录'
					});
					return false;
				}
				this.$store.commit('updateSubjectName', '循环系统科普认知虚拟仿真实验');
				this.$router.push({
					path: '/index',
					query: {
						subjectName: '循环系统科普认知虚拟仿真实验',
						title: '3d'
					}
				});
			},
			registerBtn() {
				this.dialogVisible = true;
			},
			register(registerForm) {
				https.fetchPost('/auth/regist', {
					name: this.registerForm.userName,
					university: this.registerForm.university,
					password: this.registerForm.pass
				}).then(res => {
					if (res.data.status === '0000') {
						Message({
							message: res.data.message
						});
						this.dialogVisible = false;
					}
				});
			},
			prompt(){
				this.promptShow=true;
			},
			testClose(){
				this.promptShow=false;
			}
		}
	};
</script>
<style>
	.Login {
		display: flex;
		flex-direction: column;
	}

	.Login .announce {
		position: absolute;
		z-index: 6;
		top: 78px;
		height: 40px;
		line-height: 40px;
		width: 100%;
		background: rgba(30, 55, 25, 0.5);
		color: #fff;
	}

	.Login .announcement {
		width: 500px;
		margin: 0 auto;
		overflow: hidden;
	}

	.Login .announcement .scrollOuter {
		display: flex;
		white-space: nowrap;

	}

	.Login .announcement .start {
		display: flex;
	}

	.Login .announcement p {
		text-align: left;
	}

	.Login .el-input__icon {
		display: none;
	}

	.Login .el-form-item__error {
		left: 20px;
	}

	.Login .header {
		height: 93px;
		width: 100%;
		background: url('../assets/images/login/topbg.png') repeat-x;
		position: absolute;
		z-index: 5;
	}

	.Login .headpic {
		margin-top: -20px;
	}

	.Login .header {
		display: flex;
	}

	.error_prompt {
		text-align: left;
		background: #fcf5de;
		width: 303px;
		padding: 5px 8px;
		color: #666;
		font-size: 12px;
		line-height: 14px;
		position: absolute;
		top: 108px;
		left: 57px;
	}

	.error_prompt img {
		vertical-align: middle;
		width: 14px;
		height: 14px;
	}

	.error_prompt>span {
		padding-left: 8px;
		vertical-align: middle;
	}

	.sb_btn {
		width: 160px;
		height: 38px;
		line-height: 38px;
		display: block;
		border-radius: 19px;
		color: #fff;
		font-size: 18px;
		text-align: center;
		margin-right: 20px;
	}

	.sb_btn.sb_zm {
		background: #409eff;
	}

	.sb_btn.sb_zm:hover {
		background: #2E8AEA;
	}

	.sb_btn.sb_zm span {
		background: url(../assets/images/login/sb-icon0.png) no-repeat center left;
		padding-left: 26px;
	}

	.sb_btn.sb_video {
		background: #0ec4a0;
	}

	.sb_btn.sb_video:hover {
		background: #11dfb6;
	}

	.sb_btn.sb_video span {
		background: url(../assets/images/login/sb-icon1.png) no-repeat center left;
		padding-left: 30px;
	}

	.sb_btn.sb_book {
		background: #11b8ec;
	}

	.sb_btn.sb_book span {
		background: url(../assets/images/login/sb-icon2.png) no-repeat center left;
		padding-left: 24px;
	}

	.sb_btn.sb_book:hover {
		background: #31ceff;
	}

	.Login .logo {
		margin: 9px 0 0 72px;
	}

	.Login .header .other {
		padding: 19px 73px 0 0;
		display: flex;
		flex: 1;
		justify-content: flex-end;
	}

	.Login .userInfo {
		height: 561px;
		width: 100%;
		background: url('../assets/images/login/bg1.jpg') no-repeat center bottom;
		margin-top: 73px;
		position: absolute;
		z-index: 4;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
	}

	.Login .loginBox {}

	.login_form {
		background-color: #fff;
		box-shadow: 0px 0px 10px #666;
		border-radius: 12px;
		width: 434px;
		height: 350px;
		position: absolute;
		right: 190px;
		top: 58px;
	}

	.xt_intro {
		background: url(../assets/images/login/intro_bg.png) no-repeat center;
		width: 1200px;
		height: 95px;
		align-self: center;
		position: absolute;
		top: 440px;
	}

	.xt_intro p {
		padding: 5px 20px 0;
		text-indent: 2em;
		font-size: 18px;
		color: #fff;
		line-height: 1.6em;
		text-align: left;
	}

	.xt_intro p a {
		color: #fff;
	}

	.xt_intro p a:hover {
		color: #f6c121;
		text-decoration: underline;
	}

	.input_group {
		width: 360px;
		margin: 0 auto;
		position: relative;
		z-index: 3;
		margin-top: 20px;
	}

	

	.input_div.active {
		border: 1px solid #619efb;
	}

	

	.input_div input {
		border: none;
		background: #fff;
		/* padding-left: 6px; */
		width: 318px;
		font-size: 14px;
		height: 48px;
		line-height: 48px;
		border-radius: 4px;
		border: 1px solid #dcdfe6;
		margin: 0 auto;
		
	}

	.login_btn {
		display: block;
		width: 318px;
		height: 48px;
		text-align: center;
		line-height: 48px;
		background-color: #409EFF;
		margin: 0 auto;
		color: #fff;
		font-size: 18px;
		cursor: pointer;
		border-radius: 4px;
		margin-top: 20px;
		z-index: 9999;
	}

	.login_btn:hover {
		background-color: #2E8AEA;
	}

	.login_success {
		margin-top: 20px;
		/* position: absolute; */
		width: 434px;
		/* bottom: 217px;
	left: 50%;
	margin-left: -160px;
	z-index: 2; */
	}

	.welcome {
		color: #354052;
		text-align: center;
		padding: 5px 0;
		margin-bottom: 10px;
	}

	.czzn {
		color: #333;
		font-size: 18px;
		line-height: 48px;
		
		text-align: center;
		cursor: pointer;
	}

	.czzn:hover {
		color: #0080FF;
	}

	.Login .subSelect {
		height: 214px;
		width: 100%;
		/* background: url('../assets/images/login/bg2.png') no-repeat center top; */
		margin-top: 620px;
	}

	.Login .subTitle {
		display: flex;
		justify-content: space-around;
		width: 1200px;
		margin: 13px auto;
	}

	.Login .subTitle div {
		width: 200px;
		height: 188px;
	}

	.Login .subTitle div img {
		margin-top: 20px;
	}

	.Login .subTitle div:hover {
		background: url('../assets/images/login/btnbg.png');
	}

	.Login .browser {
		height: 76px;
		background: #53555b;
		display: flex;
		flex-direction: column;
	}

	.Login .screen {
		color: #fff;
		font-size: 14px;
		padding: 6px 0;
	}

	.Login .advice {
		height: 45px;
		background: #425472;
		width: 100%;
		text-align: center;
		line-height: 45px;
		color: #fff;
		font-size: 12px;
	}

	.Login .advice p span {
		margin: 0 10px;
	}

	.Login .advice a {
		color: #f87f0f;
	}

	.Login .advice a:hover {
		color: #f6c121;
		text-decoration: underline;
	}

	.selectOuter {
		display: none;
		justify-content: center;
		align-items: center;
		height: 100vh;
		width: 100vw;
		position: absolute;
		z-index: 10;
	}

	.selectSub {
		background-color: #fff;
		border-radius: 4px;
		color: #fff;
		position: relative;
	}

	.selectTop {
		background-color: #99a9bf;
		height: 40px;
		width: 100%;
		border-top-left-radius: 4px;
		border-top-right-radius: 4px;
		line-height: 40px;
		color: #fff;
	}

	.selectSub ul {
		padding: 20px 30px;
		display: flex;
		flex-wrap: wrap;
		width: 540px;
		justify-content: space-between;
	}

	.selectSub ul:after {
		content: '';
		width: 30%;
		border: 1px solid transparent;
	}

	.selectSub ul li {
		width: 30%;
		height: 38px;
		line-height: 38px;
		border-radius: 8px;
		text-align: center;
		background: #ecf5ff;
		margin: 10px 0;
		cursor: pointer;
		border: 1px solid #b3d8ff;
		color: #409EFF;
	}

	.selectSub ul li:hover {
		background: #409EFF;
		color: #fff;
		border: 1px solid #409EFF;
	}

	.selectClose {
		position: absolute;
		top: 10px;
		right: 15px;
		width: 16px;
		height: 16px;
		color: #000;
		cursor: pointer;
	}

	.Login .register_group {
		background: #F5F7FA;
		border: 1px solid #A3B6CC;
		border-radius: 4px;
		width: 300px;
		height: 300px;
		padding: 30px;
		/* display: none; */
		justify-content: center;
		align-items: center;
		position: relative;
		z-index: 10;
	}
	.Login .prompt{
		width:380px;
		height:240px;
		position: absolute;
		right:400px;
		top:-20px;
		background:#ffffff;
		box-shadow:0px 0px 10px #666;
		border-radius: 4px;

	}
	.Login .prompt p{
		line-height: 40px;
		background-color: #99a9bf;
		color: #fff;
		border-top-left-radius:4px;
		border-top-right-radius:4px;
		margin-bottom: 20px;
	}
	/* .Login .prompt i{
		color: #fff;
	} */
	.Login .prompt div{
		height: 40px;
		margin: 15px auto;
		color: #909399;
		width: 300px;
		border: 1px solid #d3d4d6;
		background-color: #f4f4f5;
		border-radius: 4px;
	}
	.Login .prompt span{
		line-height: 40px;
		margin: 0 10px;
	}
</style>
