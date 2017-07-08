var songTab = (function() {
    var TabBaseConfig = {
        /*存储tab
         *每一项{ tabName:'tab1',tabContent:'html字符串' }
         */
        tabList: [],
        //首屏展示的tab
        indexTab: 0
    }



    var TabFactorty = function(tabConfig) {
        var tabConfig = Object.assign({}, TabBaseConfig, tabConfig);
        //tab数组
        this.tabList = tabConfig.tabList;
        //当前激活的tab 序数
        this.activeTab = tabConfig.indexTab;
        //渲染的目标dom节点
        this.targetDom = null;
    }

    /*TabFactorty.prototype.oldtabContent = function() {
        var content = this.getElement(".tab-body").innerHTML;
        console.log(content);
    }*/

    TabFactorty.prototype.layoutRender = function() {
        var tabListString = this.tabList.map(function(tab, index) {
            return ['<div class="tab-item-' + index + ' ">', tab.tabName, '</div>'].join('');
        }).join('');
        return ['<div class="tab-header clearfix">', tabListString,
            '</div><div class="tab-body"></div>'
        ].join('');
    };

    //获取元素
    /*TabFactorty.prototype.getElement = function(name) {
        if (name.match(/^#/)) {
            return document.getElementById(name.replace(/^#/, ''))[0];
        } else if (name.match(/^\./)) {
            return document.getElementsByClassName(name.replace(/^\./, ''))[0];
        } else {
            return document.getElementsByTagName(name)[0];
        }
    }*/

     TabFactorty.prototype.getElement = function(name) {
        if (name.match(/^#/)) {
            return this.targetDom.getElementById(name.replace(/^#/, ''))[0];
        } else if (name.match(/^\./)) {
            return this.targetDom.getElementsByClassName(name.replace(/^\./, ''))[0];
        } else {
            return this.targetDom.getElementsByTagName(name)[0];
        }
    }



    //渲染对应序数号的元素样式
        TabFactorty.prototype.indexRender = function(index) {
            var targetTab = this.tabList[index];
            var tabBody = this.getElement(".tab-body");
           // var tabBody = this.targetDom.getElementsByClassName("tab-body")[0];
           // console.log(tabBody);
            //console.log(targetTab['tabContent']);
            tabBody.appendChild( targetTab['tabContent']);
        }

        TabFactorty.prototype.showList = function(index) {
            var targetTab = this.tabList[index];
            var tabBody = this.getElement(".tab-body");
            var tabHeader = this.getElement(".tab-item-" + index);
            var previouseTab = this.getElement(".tab-item-" + this.activeTab);
            tabBody.childNodes.forEach(function(cN, idx) {
                cN.style.opacity = '0';
                cN.style.zIndex = '1'
            });
            tabBody.childNodes[index].style.opacity = '1';
            tabBody.childNodes[index].style.zIndex = '2';
            tabHeader.classList.add('active');
            if (index != this.activeTab) {
                previouseTab.classList.remove('active');
                this.activeTab = index;
            }

        }


        //挂载事件
        TabFactorty.prototype.events = function() {
            var _this = this;

            this.tabList.forEach(function(tab, index) {
                _this.getElement('.tab-item-' + index).addEventListener('click', function() {
                    _this.showList(index);
                })
            });
        };


    //程序入口
    TabFactorty.prototype.renderTo = function(targetDom, index) {
        targetDom.innerHTML = this.layoutRender();
        this.targetDom = targetDom;
        this.activeTab = index || this.activeTab;
        for (var i = 0; i < this.tabList.length; i++) {
            this.indexRender(i);
        }
        this.showList(this.activeTab);
        this.events(this.targetDom);
    };

    return {
        TabFactorty: TabFactorty
    }
})()

module.exports = songTab;
