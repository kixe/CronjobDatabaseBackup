jQuery(document).ready(function($) {
	$("form[action*='CronjobDatabaseBackup'] .InputfieldCheckboxes input:checkbox.check").click(function() {
		var checked = !$(this).data('checked');
		var parent = $(this).data('for');
		var boxes = $(parent + '.InputfieldCheckboxes .InputfieldCheckboxesColumns input:checkbox[disabled!=\'disabled\']');
		var cboxes = $('.Inputfield_tables_content.InputfieldCheckboxes .InputfieldCheckboxesColumns input:checkbox');
    	boxes.prop('checked', checked);
    	if (parent == '.Inputfield_tables') {
    		if (checked) {
    			cboxes.prop('checked', checked);
    			cboxes.removeAttr('disabled');
    		} else {
				cboxes.prop('checked', checked);
				cboxes.attr('disabled','disabled');
    		}
    	}
		$(this).val(checked ? 1 : 0 )
		$(this).data('checked', checked);
    });
    $("form[action*='CronjobDatabaseBackup'] .Inputfield_tables.InputfieldCheckboxes .InputfieldCheckboxesColumns input:checkbox").click(function() {
		var val = $(this).val();
		var checked = $(this).prop('checked');
		var box = $('.Inputfield_tables_content.InputfieldCheckboxes .InputfieldCheckboxesColumns input:checkbox[value=\'' + val + '\']');
		if (!checked) {
			box.prop('checked', checked);
			box.attr('disabled','disabled');
		} else {
			box.removeAttr('disabled');
		}
    });
});