<template>
    <div class="Change">
        <div class="register_group">
            <el-form :model="registerForm" :rules="register_rules" ref="registerForm" class="demo-ruleForm">
                <el-form-item prop="userName" label="用户名">
                    <div class=""><el-input ref="userName" v-model.trim="registerForm.userName" placeholder="请输入您的账号" class="usern" /></div>
                </el-form-item>
                <el-form-item prop="pass" label="密码">
                    <div class=""><el-input type="password" ref="" v-model.trim="registerForm.pass" placeholder="请输入您的密码" class="passw" /></div>
                </el-form-item>
                <el-form-item prop="checkPass" label="确认密码">
                    <div class=""><el-input type="password" ref="repassword" v-model.trim="registerForm.checkPass" placeholder="再次输入您的密码" class="passw" /></div>
                </el-form-item>
            </el-form>
            <div class="login_btn" @click="change('registerForm')">确认修改</div>
        </div>
    </div>
</template>
<script>
    import https from '../../https'
    import {Message} from 'element-ui'
    export default{
        name:'Change',
        data(){
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
                registerForm:{
                    userName: '',
                    pass: '',
                    checkPass:''
                },
                register_rules:{
                    userName: [
                        {required: true, message: '请输入用户名', trigger: 'blur'},
                        {min: 3, max: 50, message: '长度在 3 到 50个字符', trigger: 'blur'}
                    ],
                    pass: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    checkPass: [
                        { validator: validatePass2, trigger: 'blur' }
                    ]
                },
                studentID:''
            }
        },
        methods:{
            change(changeForm){
                https.fetchPost('/manage/user/student/reset',{id:this.studentID}).then(res=>{
                    console.log(res);

                }).catch(err=>{
                    console.log(err);
                })
            }
        }

    }
</script>
<style>
    .Change .register_group{
        border-radius:4px;
        width:300px;
        height:500px;
    }
</style>
