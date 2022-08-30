frappe.ui.form.on('Delivery Note Item', {
    qty:function(frm, cdt, cdn){
        var row = locals[cdt][cdn]; // qty = 2000 NOS
        row.poly_bag = row.qty/10; // poly_bag = 200
        row.small_box = row.poly_bag/20; // small_box = 10
        row.large_box = row.small_box/5; // large_box = 2
        row.empty_carton = row.large_box/2; // carton = 1
        frm.refresh_field('poly_bag');
        
        let child = cur_frm.add_child("packaging_details");
            child.packaging_material = "Poly Bag";
            child.qty = row.poly_bag;
        let child1 = cur_frm.add_child("packaging_details");
            child1.packaging_material = "Small Box";
            child1.qty = row.small_box;
        let child2 = cur_frm.add_child("packaging_details");
            child2.packaging_material = "Large Box";
            child2.qty = row.large_box;
        let child3 = cur_frm.add_child("packaging_details");
            child3.packaging_material = "Empty Carton";
            child3.qty = row.empty_carton;
            
         frm.refresh_field("packaging_details");
	},
});