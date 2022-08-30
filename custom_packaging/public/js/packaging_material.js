frappe.ui.form.on('Packaging Material', {
	validate:function(frm){
        
        let poly_bag = cur_frm.doc.qty/10; // poly_bag = 200
        let small_box = poly_bag/20; // small_box = 10
        let large_box = small_box/5; // large_box = 2
        let empty_carton = large_box/2; // carton = 1

        let child = cur_frm.add_child("items");
            child.packaging_material = "Poly Bag";
            child.qty = poly_bag;
            
        let child1 = cur_frm.add_child("items");
            child1.packaging_material = "Small Box";
            child1.qty = small_box;
            
        let child2 = cur_frm.add_child("items");
            child2.packaging_material = "Large Box";
            child2.qty = large_box;
            
        let child3 = cur_frm.add_child("items");
            child3.packaging_material = "Empty Carton";
            child3.qty = empty_carton;
           
       
         frm.refresh_field("items");
	},
});