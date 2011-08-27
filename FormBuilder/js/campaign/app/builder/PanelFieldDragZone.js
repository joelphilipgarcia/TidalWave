Ext.define('PM.builder.PanelFieldDragZone', {

    extend: 'Ext.dd.DragZone',
    ddGroup: 'treeDrag',
    constructor: function(){},
    panel: null,
    prevSelection: null,
    tabPanel: null,

//  Call the DRagZone's constructor. The Panel must have been rendered.
    init: function(panel) {
        if (panel.nodeType) {
        	PM.builder.PanelFieldDragZone.superclass.init.apply(this, arguments);
        } else {
            if (panel.rendered) {
            	PM.builder.PanelFieldDragZone.superclass.constructor.call(this, panel.getEl());
                var i = Ext.fly(panel.getEl()).select('input');
                i.unselectable();
            } else {
                panel.on('afterlayout', this.init, this, {single: true});
            }
        }
        this.panel = panel;
        this.tabPanel = panel.tabPanel;
    },

    scroll: false,

//  On mousedown, we ascertain whether it is on one of our draggable Fields.
//  If so, we collect data about the draggable object, and return a drag data
//  object which contains our own data, plus a "ddel" property which is a DOM
//  node which provides a "view" of the dragged data.
    getDragData: function(e) {
		//first check ot see if we're a container
    	var container = e.getTarget('.x-container', 10, true);
		if ( container != null )
		{
			//groups of radio buttons and checkboxes use containers as well. we need
			//to find the container that is associated with the form-item.
			var isCorrectContainer = container.is('.x-form-item');
			if ( !isCorrectContainer )
				container = container.up('.x-form-item', 10, true);
		}
		if ( container )
		{
			e.stopEvent();
			
//          Ugly code to "detach" the drag gesture from the input field.
//          Without this, Opera never changes the mouseover target from the input field
//          even when dragging outside of the field - it just keeps selecting.
            if (Ext.isOpera) {
                Ext.fly(container.dom).on('mousemove', function(e1){
                    container.dom.style.visibility = 'hidden';
                    Ext.defer(function(){
                        container.dom.style.visibility = '';
                    }, 1);
                }, null, {single:true});
            }
            
            var f = Ext.getCmp( container.dom.id );
            this.highlightElement( f );
            
            var d = document.createElement('div');
            d.className = 'x-form-text';
            d.appendChild(document.createTextNode(''));
            Ext.fly(d).setWidth(f.getEl().getWidth());
            return {
                field: f,
                ddel: d
            };
			
		}
		
        var t = e.getTarget('input');
        if (t) {
            e.stopEvent();

//          Ugly code to "detach" the drag gesture from the input field.
//          Without this, Opera never changes the mouseover target from the input field
//          even when dragging outside of the field - it just keeps selecting.
            if (Ext.isOpera) {
                Ext.fly(t).on('mousemove', function(e1){
                    t.style.visibility = 'hidden';
                    Ext.defer(function(){
                        t.style.visibility = '';
                    }, 1);
                }, null, {single:true});
            }

//          Get the data we are dragging: the Field
//          create a ddel for the drag proxy to display
            var f = Ext.ComponentQuery.query('field[inputEl]{inputEl.id=="' + t.id + '"}')[0];
        	this.highlightElement( f );
            
            var d = document.createElement('div');
            d.className = 'x-form-text';
            d.appendChild(document.createTextNode(t.value));
            Ext.fly(d).setWidth(f.getEl().getWidth());
            return {
                field: f,
                ddel: d
            };
        }
        var l = e.getTarget('label');
        if (l) {
            e.stopEvent();

//          Ugly code to "detach" the drag gesture from the input field.
//          Without this, Opera never changes the mouseover target from the input field
//          even when dragging outside of the field - it just keeps selecting.
            if (Ext.isOpera) {
                Ext.fly(l).on('mousemove', function(e1){
                    l.style.visibility = 'hidden';
                    Ext.defer(function(){
                        l.style.visibility = '';
                    }, 1);
                }, null, {single:true});
            }

//          Get the data we are dragging: the Field
//          create a ddel for the drag proxy to display
            var f = null;
            if ( l.control )
            	f = Ext.ComponentQuery.query('field[inputEl]{inputEl.id=="' + l.control.id + '"}')[0];
        	else
        		f = Ext.getCmp(l.parentNode.id );

        	this.highlightElement( f );
            
            var d = document.createElement('div');
            d.className = 'x-form-text';
            d.appendChild(document.createTextNode(l.value));
            Ext.fly(d).setWidth(f.getEl().getWidth());
            return {
                field: f,
                ddel: d
            };
        }

    },
    //this is moronic but IE8 doesn't support setProperty. I tried a couple of different solutions
    //none of them worked, so went with this.
    highlightElementIE8: function (el ) {
    	if ( el == this.prevSelection )
    		return;

    	this.tabPanel.setSelectedElement(  el );
    	
    	//are we an input item or a field label
        if (el && el.bodyEl) 
        {
        	//yes we're an input item and a field label so we should have a parent node.
        	if ( el.bodyEl.dom.parentNode !== undefined || el.bodyEl.dom.parentNode != null )
        	{
        		//set the parent node so that we have a border
            	el.bodyEl.dom.parentNode.style.setAttribute('border-style','dashed','');
            	el.bodyEl.dom.parentNode.style.setAttribute('border-width','1px','')
            	if ( this.prevSelection != null )
            	{
            		//does the prevSelection have a parentnode, if so then we're a label or input item
            		if( this.prevSelection.bodyEl != null )
            			this.prevSelection.bodyEl.dom.parentNode.style.setAttribute('border-style','none','');
            		else
            		//ok, no parent node, then we must be a container.
            			this.prevSelection.applyStyles( 'border-style:none');
            	}
            	this.prevSelection = el;
        	}
        }
        else
        {
        	//we're a container set the border-style.
        	el.applyStyles('border-style:dashed;border-width:1px' );
        	if ( this.prevSelection != null )
        	{
        		//what was the previous selection. if we have a parent node then it was a label\input
        		//field.
        		if ( this.prevSelection.bodyEl != null )
        		{
    				this.prevSelection.bodyEl.dom.parentNode.style.setAttribute('border-style','none','');
        		}
        		else
        			this.prevSelection.applyStyles( 'border-style:none');
        	}
        	this.prevSelection = el;
        }
    	
    },
    highlightElement : function(el) {
    	if ( Ext.isIE8 || Ext.isIE9 )
    		return this.highlightElementIE8 ( el );
    
    	if ( el == this.prevSelection )
    		return;

    	this.tabPanel.setSelectedElement(  el );
    	
    	//are we an input item or a field label
        if (el && el.bodyEl) 
        {
        	//yes we're an input item and a field label so we should have a parent node.
        	if ( el.bodyEl.dom.parentNode !== undefined || el.bodyEl.dom.parentNode != null )
        	{
        		//set the parent node so that we have a border
            	el.bodyEl.dom.parentNode.style.setProperty('border-style','dashed','');
            	el.bodyEl.dom.parentNode.style.setProperty('border-width','1px','')
            	if ( this.prevSelection != null )
            	{
            		//does the prevSelection have a parentnode, if so then we're a label or input item
            		if( this.prevSelection.bodyEl != null )
            			this.prevSelection.bodyEl.dom.parentNode.style.setProperty('border-style','none','');
            		else
            		//ok, no parent node, then we must be a container.
            			this.prevSelection.applyStyles( 'border-style:none');
            	}
            	this.prevSelection = el;
        	}
        }
        else
        {
        	//we're a container set the border-style.
        	el.applyStyles('border-style:dashed;border-width:1px' );
        	if ( this.prevSelection != null )
        	{
        		//what was the previous selection. if we have a parent node then it was a label\input
        		//field.
        		if ( this.prevSelection.bodyEl != null )
        		{
    				this.prevSelection.bodyEl.dom.parentNode.style.setProperty('border-style','none','');
        		}
        		else
        			this.prevSelection.applyStyles( 'border-style:none');
        	}
        	this.prevSelection = el;
        }
    },    
//  The coordinates to slide the drag proxy back to on failed drop.
    getRepairXY: function() {
        return this.dragData.field.getEl().getXY();
    }
});