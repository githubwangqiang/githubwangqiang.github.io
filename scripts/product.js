//�����Ʒ����

var Product = Class.extend({
    init: function(){
        this.name='HM���з���ɽ��'
        this.description='�����ģ������ģ���ɽһ��������һ������ã��Һã���Ҳ�ã�̫���ˣ�һ�����������������'
        this.normalPrice=144
        this.groupbuyPrice=120
        this.buySum=100;
        this.images=[
            {small:'../images/s11.jpg',big:'../images/s11.jpg'},
            {small:'../images/s12.jpg',big:'../images/s12.jpg'},
            {small:'../images/s13.jpg',big:'../images/s13.jpg'}
        ]
    },
    /*��ͨ����*/
    buy:function(){},
    /*��ͼƬ�б�*/
    bindDOMImageOld:function(){
        var str=''
        for(var i= 0,len=this.images.length;i<len;i++) {
            str+='<li>'
                str+='<img class="etalage_thumb_image" src="'+ this.images[i].small+'" class="img-responsive" />'
                str+='<img class="etalage_source_image" src="'+ this.images[i].small+'" class="img-responsive" />'
            str+='</li>'
        }
        $('#etalage').html(str)

        /*jquery���ʵ�ֵĻõ�Ƭ��Ч*/
        $('#etalage').etalage({
            thumb_image_width: 300,
            thumb_image_height: 400,

            show_hint: true,
            click_callback: function(image_anchor, instance_id){
                alert('Callback example:\nYou clicked on an image with the anchor: "'+image_anchor+'"\n(in Etalage instance: "'+instance_id+'")');
            }
        });
        // This is for the dropdown list example:
        $('.dropdownlist').change(function(){
            etalage_show( $(this).find('option:selected').attr('class') );
        });
    },
    bindDOMImage:function(){
        /*���趹���Ӽ�*/
        var str=''
        var html=''
        html+='<li>'
        html+='<img class="etalage_thumb_image" src="@(small)" class="img-responsive" />'
        html+='<img class="etalage_source_image" src="@(big)" class="img-responsive" />'
        html+='</li>'

        for(var i= 0,len=this.images.length;i<len;i++) {
            str+= $$.formateString(html,this.images[i])
        }
        $('#etalage').html(str)

        /*jquery���ʵ�ֵĻõ�Ƭ��Ч*/
        $('#etalage').etalage({
            thumb_image_width: 300,
            thumb_image_height: 400,

            show_hint: true,
            click_callback: function(image_anchor, instance_id){
                alert('Callback example:\nYou clicked on an image with the anchor: "'+image_anchor+'"\n(in Etalage instance: "'+instance_id+'")');
            }
        });
        // This is for the dropdown list example:
        $('.dropdownlist').change(function(){
            etalage_show( $(this).find('option:selected').attr('class') );
        });
    },
    /*����ϸ��Ϣ*/
    bindDOMDetail:function(){
        /*��Ԫ��*/
        $('#pname').html(this.name)
        $('#description').html(this.description)
        $('#price').html(this.normalPrice)
        $('#groupPrice').html(this.groupbuyPrice)
        $('#buyCount').html(this.buySum)
    },
    /*�Ź�*/
    groupBuy:function(){},
    /*��ӵ����ﳵ*/
    addCart:function(){

    }
});


