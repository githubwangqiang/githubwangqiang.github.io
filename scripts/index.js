


//ҳ���ҵ���߼�
$(document).ready(function(){


    /*��ʼ���*/
    /*��Ʒ���*/
    /*ʵ����*/
    var product =  new Product()
    product.name='HM���з���ɽ��55'
    product.description='�����ģ������ģ���ɽһ��������һ������ã��Һã���Ҳ�ã�̫���ˣ�һ�����������������'
    product.normalPrice=144
    product.groupbuyPrice=120
    product.buySum=100;
    product.images=[
        {small:'images/s11.jpg',big:'images/s11.jpg'},
        {small:'images/s12.jpg',big:'images/s12.jpg'},
        {small:'images/s13.jpg',big:'images/s13.jpg'}
    ]
    /*ʹ�ö����еķ�������*/
    product.bindDOMDetail()
    product.bindDOMImage()

    /*���¼�*/
    $('#btnaddcart').click(function(){
        /*���ﳵ����һ����Ʒ*/
        console.log('12222')
        cart.products.push(product)
        ///*���¹��ﳵ - ���°󶨹��ﳵ*/
        /*�������װ������Ϳ��ܲ��������ظ�*/
        cart.bindBasic()
        cart.bindList()
        $(window).scrollTop(0);
    });





    /*ʵ�����ﳵ*/
    var cart =  new Cart()
    cart.sum=3
    cart.allPrice=2000

    /*���蹺�ﳵ���Ѿ���������Ʒ*/
    cart.products.push(product)
    cart.products.push(product)
    cart.products.push(product)

    /*ʹ�ö����еķ�������*/
    cart.bindBasic()
    cart.bindList()

});