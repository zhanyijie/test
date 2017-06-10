

//$(function(){
	var c=new Vue({
		el:'#box',
		data:{
			dataList:[
//				{username:'',age:''}
			],
			username:'',         //vue不同于angular即使通过双向绑定的变量也要声明
			age:''
		},
		methods:{
			add:function(){
				this.dataList.push({
					username:this.username,
					age:this.age

				})
//				this.username='';
//				this.age=''
			}
		}
	})
	
//});
