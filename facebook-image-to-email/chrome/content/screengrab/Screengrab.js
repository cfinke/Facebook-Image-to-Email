/*
Copyright (C) 2004-2007  Andy Mutton

This program is free software; you can redistribute it and/or
modify it under the terms of the GNU General Public License
as published by the Free Software Foundation; either version 2
of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.

Contact: andy@5263.org
*/
Screengrab = {
    nsGrab : new SGNsGrab.NsGrab(false),
    nsCbGrab : new SGNsGrab.NsGrab(true),
    
    grabber : function() {
        return this.nsGrab;
    },
    
    format : function() {
        return "png";
    },
    
    defaultFileName : function() {
        filename = window.content.document.title;
        return filename;
    },
    
    grabCompleteDocument : function() {
        this.grabber().grabPage();
    },

    grabVisibleDocument : function() {
        this.grabber().grabVisiblePage()
    },

    grabDocumentPortion : function(offsetX, offsetY, width, height) {
        return this.grabber().grabSelection(new SGDimensions.Box(offsetX, offsetY, width, height))
    },

	grabFullPageContext : function () {
		return this.grabber().grabFullPageContext();
	},
    
    grabBrowserWindow : function() {
        this.grabber().grabBrowser()
    },
    
    copyCompleteDocument : function() {
        this.nsCbGrab.grabPage();
    },

    copyVisibleDocument : function() {
        this.nsCbGrab.grabVisiblePage()
    },

    copyDocumentPortion : function(offsetX, offsetY, width, height) {
        this.nsCbGrab.grabSelection(new SGDimensions.Box(offsetX, offsetY, width, height))
    },
    
    copyBrowserWindow : function() {
        this.nsCbGrab.grabBrowser()
    }
}
