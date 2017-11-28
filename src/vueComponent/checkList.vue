<template>
	 <div class="cl-checklist"  v-show="isShow">
	       <div class="topbar">
		       <span class="cancel" @click="cancel()">取消</span>
		       <span class="title">选择考场</span>
		       <span class="confirm" @click="complete()">完成</span>
	        </div>
	       <div class="desc">
	       		您已选中 <span>{{checkboxValue.length}}</span> 个,最多可选<span>3</span>个
	        </div>
	       <div class="list">
			  <div class="line border-1px" v-for="(item,index) in data" :key="index" :class="{'selected':item.isChecked,'disabled':item.isDisabled}" @click="selctedItem(item)">
			     <div class="l">
			        <div class="title">{{item.label}}</div>
			        <div class="address">{{item.address}}</div>
			       </div>
			      <div class="r"></div>
			   </div>
		     </div>

    </div>
	
</template>
<script>
	export default{
		props:{
			isShow:{
				type:Boolean,
				default: false
			},
			data:{
				type:Array,
				default: []
			}
		},
		 data(){
           return {
	  	       checkboxValue: []
	        }
   		 },
   		 methods:{
   		 	selctedItem: function (item) {
                 item.isChecked = !item.isChecked
                 this.checkboxValue =this.data.filter(function(item) {
   		 			return item.isChecked;
   		 		})
                 if(this.checkboxValue.length ===3){
                    this.data.map(function (item) {
                    	if(!item.isChecked){
                    		item.isDisabled = true
                    	}
                    })
                 }else{
                 	this.data.map(function (item) {
                      item.isDisabled = false
       
                    })
                 }
   		 	},
   		 	complete: function (argument) {
   		 		this.checkboxValue =this.data.filter(function(item) {
   		 			return item.isChecked;
   		 		})
   	         this.$emit('change',this.checkboxValue)
   		 	},
   		 	cancel: function (argument) {
	   	       this.data.map(function (item) {
	                item.isChecked = false
	        		item.isDisabled = false	
                    })
	   		    this.$emit('change')
   		 	}
   		 }
	}
</script>
<style lang="less">
  .disabled {
		    pointer-events: none;
		    cursor: default;
	}
	.cl-checklist{
		overflow: scroll;
		.topbar{
		    display: -webkit-flex;
		    display: flex;
		    justify-content: space-between;
		    align-items: center;
		    height: 45px;
		    font-size: 16px;
		    padding: 0 13px;
		    border-bottom: 1px solid rgb(217,217,217);
		    .cancel{
              color: rgb(159,159,159);
           }
           .confirm{
             color: rgb(46,166,242);
           }
      }
	    .desc{
		      height: 30px;
			  line-height: 30px;
			  padding-right: 10px;
			  font-size: 14px;
			  text-align: right;
			  color: rgb(159,159,159);
	   }
	   .list{
		      max-height: 300px;
		      font-size: 14px;
		      padding: 10px 13px;
		      overflow-y: auto;
		      -webkit-overflow-scrolling: touch; 
		      overflow-scrolling: touch;
		       .disabled {
				    pointer-events: none;
				    cursor: default;
			    }
		   	 .line {
			    display: -webkit-flex;
			    display: flex;
			    justify-content: center;
			    align-items: center;
			    height: 50px;
			    .l .address{
				    color: rgb(159,159,159);
				    position: relative;
				    padding-left: 15px;
				  }
			    .l{
				    display: -webkit-flex;
				    display: flex;
				    flex-direction: column;
				    justify-content: center;
				    align-items: flex-start;
				    width: 90%;
			       }
			    .r{
			      width: 20px;
			      height: 20px;
			      border-radius: 50%;
			      border:1px solid #d8d8d8;
			     }
                 }
                 .selected
                 {
                 	.l .title{
		            color: #1799fa;
		            }
		           .l .address::before{
					    content: ' ';
					    display: inline-block;
					    position: absolute;
					    width: 15px;
					    height: 15px;
					    top: 2px;
					    left: 0;
					    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAbCAYAAAB836/YAAABu0lEQVRIiaXUzU8TQRjH8U9fpAkXIZqItHghxEgietuD/gP84R420QSDcCDxIq6KaCoJYCuaeJhdu93OlILfpEnnmWd++7zMM63d3V0RuljHQ9xFr7SP8QNfUOBPlmUzB5tsYBtLkb0eHpS/JzjEcd2hs7W1Vf1v4TkeoxMLu0EHa0VRLBdFcTIYDEC75vCsjO6mbGCnWlSCg1uKVTzK83xAqGFHqFmMX3iP7+X6HjbF67ud5/nnLvomXaxziVcY1WxDfMQLLDf8e+i3sZaIbq8hVjHC28SZtTZWIhs/TdKM8S3xsZW2eLrjOWIVMcFeO2Ik1Kc1R6xltoYI1+Y8Yl8Sxi7Funinz9s4SRzaEa/vKp4mzpx0hSHfjGzewUt8EpoA98voUuUoujgT7tdqxKEl3NN+QqDOMMuys6opRwscuI4jJrP8VYjytgxLjanX5uA/BA+qh7YuOBQadFOKLMv+Zde82Ae4uoHYlUZmTcGx8KwvymGWZVNjGhu9DzhdQOy09J0iNct75qd+VfrMkBIcYX+O4L74a5MUJHT8OGI/Nuc2zBOEd7iorS9KW5LrBH/jjZDeCK9LW5K/QatiGcsSFOsAAAAASUVORK5CYII=");
					    background-repeat: no-repeat;
					    background-size: contain;
					    background-position: 0;
					}
                 .r::before{
				    content: ' ';
				    position: absolute;
				    top: 4px;
				    left: 4px;
				    width: 12px;
				    height: 12px;
				    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAPCAYAAAALWoRrAAAA90lEQVQ4ja3TMSuFURgH8GeQRGIwy6BkUbIYlHwBu0Umi8VkMVlMJoMvIcNdDAYlJuULWCSESBSLwc9we/P2eu715t6nznKe//Or0zknEF1YS3jAHRa7Aa7iy0/ddAquVUC47ARcT8APLPwX3PC73jGPCPRiGSvoqwFuJuAb5opMoFFqnmCwDbiVgK+YLecCn5XQGYYScDsBXzBTzQb2k/A5hkvBnSTzhOnsRIEBHCdDFxjBbtJ7xFQGFmigH0fJ8HOyd4/JVmAZDc2bP0yQct1ioh1YRYvn1cg0XGP8LzBDC/igAl5hrA7YCg30YE/zl5xitC6I+AYJmBaJbbKurAAAAABJRU5ErkJggg==");
				    background-repeat: no-repeat;
				    background-size: contain;
				    background-position: center center;
				    z-index: 1;
				 }
				 .r{
				    border: 1px solid #1799fa;
				    border-radius: 50%;
				    background-color: #1799fa;
				  }
            } 
		          
	 }

}
</style>