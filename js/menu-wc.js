'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">
                    <img src="../images/weblogo.jpg" />
                    </a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                               
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AdminModule.html" data-type="entity-link" >AdminModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AdminModule-8b053aba0e4e97ce824604dcbec31eeee1fe0e9c4fb932b614d3e751738a116937653291b9c84e2c0d5f0f16a7fb0258cf32cfdf4bf8efa2725a46d5ddc2190e"' : 'data-target="#xs-components-links-module-AdminModule-8b053aba0e4e97ce824604dcbec31eeee1fe0e9c4fb932b614d3e751738a116937653291b9c84e2c0d5f0f16a7fb0258cf32cfdf4bf8efa2725a46d5ddc2190e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AdminModule-8b053aba0e4e97ce824604dcbec31eeee1fe0e9c4fb932b614d3e751738a116937653291b9c84e2c0d5f0f16a7fb0258cf32cfdf4bf8efa2725a46d5ddc2190e"' :
                                            'id="xs-components-links-module-AdminModule-8b053aba0e4e97ce824604dcbec31eeee1fe0e9c4fb932b614d3e751738a116937653291b9c84e2c0d5f0f16a7fb0258cf32cfdf4bf8efa2725a46d5ddc2190e"' }>
                                            <li class="link">
                                                <a href="components/AdminTabComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminTabComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AdminvaluesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminvaluesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DdlAddComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DdlAddComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DdlchildComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DdlchildComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DdlvaluesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DdlvaluesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DetailsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EventAddComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EventAddComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EventComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EventComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/KpiTabComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >KpiTabComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/KpiconfigComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >KpiconfigComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OutcomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OutcomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RolesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RolesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UsersComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AdminRoutingModule.html" data-type="entity-link" >AdminRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-7705f8ca5c86651a425c2d9991751bab7e72ea5689a4d129e17feb8f2c939a01f60b63dd556a12421b6271b02ef896ff76852d91ea247f53fb711cb68b4f2107"' : 'data-target="#xs-components-links-module-AppModule-7705f8ca5c86651a425c2d9991751bab7e72ea5689a4d129e17feb8f2c939a01f60b63dd556a12421b6271b02ef896ff76852d91ea247f53fb711cb68b4f2107"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-7705f8ca5c86651a425c2d9991751bab7e72ea5689a4d129e17feb8f2c939a01f60b63dd556a12421b6271b02ef896ff76852d91ea247f53fb711cb68b4f2107"' :
                                            'id="xs-components-links-module-AppModule-7705f8ca5c86651a425c2d9991751bab7e72ea5689a4d129e17feb8f2c939a01f60b63dd556a12421b6271b02ef896ff76852d91ea247f53fb711cb68b4f2107"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-AppModule-7705f8ca5c86651a425c2d9991751bab7e72ea5689a4d129e17feb8f2c939a01f60b63dd556a12421b6271b02ef896ff76852d91ea247f53fb711cb68b4f2107"' : 'data-target="#xs-pipes-links-module-AppModule-7705f8ca5c86651a425c2d9991751bab7e72ea5689a4d129e17feb8f2c939a01f60b63dd556a12421b6271b02ef896ff76852d91ea247f53fb711cb68b4f2107"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-AppModule-7705f8ca5c86651a425c2d9991751bab7e72ea5689a4d129e17feb8f2c939a01f60b63dd556a12421b6271b02ef896ff76852d91ea247f53fb711cb68b4f2107"' :
                                            'id="xs-pipes-links-module-AppModule-7705f8ca5c86651a425c2d9991751bab7e72ea5689a4d129e17feb8f2c939a01f60b63dd556a12421b6271b02ef896ff76852d91ea247f53fb711cb68b4f2107"' }>
                                            <li class="link">
                                                <a href="pipes/dateFormatPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >dateFormatPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AssigntargetModule.html" data-type="entity-link" >AssigntargetModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AssigntargetModule-dae45c8361f470c6f05ac0980423e2dd37556f7da21b9831079344873e5ccf3eac8e5d2b0cd97a5037739c803efeb70d71ae1f4a7e161460c04e9762850ca1ea"' : 'data-target="#xs-components-links-module-AssigntargetModule-dae45c8361f470c6f05ac0980423e2dd37556f7da21b9831079344873e5ccf3eac8e5d2b0cd97a5037739c803efeb70d71ae1f4a7e161460c04e9762850ca1ea"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AssigntargetModule-dae45c8361f470c6f05ac0980423e2dd37556f7da21b9831079344873e5ccf3eac8e5d2b0cd97a5037739c803efeb70d71ae1f4a7e161460c04e9762850ca1ea"' :
                                            'id="xs-components-links-module-AssigntargetModule-dae45c8361f470c6f05ac0980423e2dd37556f7da21b9831079344873e5ccf3eac8e5d2b0cd97a5037739c803efeb70d71ae1f4a7e161460c04e9762850ca1ea"' }>
                                            <li class="link">
                                                <a href="components/ActivitiesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ActivitiesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AssignTComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AssignTComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AssigninterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AssigninterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AssigntargetComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AssigntargetComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BlocktargetAddComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BlocktargetAddComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BlocktargetComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BlocktargetComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CrptargetAddComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CrptargetAddComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CrptargetComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CrptargetComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TargetComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TargetComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TargetTabComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TargetTabComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AssigntargetRoutingModule.html" data-type="entity-link" >AssigntargetRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AuthModule-9342241db96d96ac46e7da34ef3826f820a695cfc8f4505cf7afc8bc2a51ed471ae0658f6f776bab4e4524a6c2b0e59e5302d0913600b7e834cd272c483c3e90"' : 'data-target="#xs-components-links-module-AuthModule-9342241db96d96ac46e7da34ef3826f820a695cfc8f4505cf7afc8bc2a51ed471ae0658f6f776bab4e4524a6c2b0e59e5302d0913600b7e834cd272c483c3e90"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthModule-9342241db96d96ac46e7da34ef3826f820a695cfc8f4505cf7afc8bc2a51ed471ae0658f6f776bab4e4524a6c2b0e59e5302d0913600b7e834cd272c483c3e90"' :
                                            'id="xs-components-links-module-AuthModule-9342241db96d96ac46e7da34ef3826f820a695cfc8f4505cf7afc8bc2a51ed471ae0658f6f776bab4e4524a6c2b0e59e5302d0913600b7e834cd272c483c3e90"' }>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthRoutingModule.html" data-type="entity-link" >AuthRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CrpModule.html" data-type="entity-link" >CrpModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CrpModule-9e9788a045bbfeba4918170c58cf91b3488ac7b63592d87eadf0725c35f44a2c6e92046e9c321e96aa7b03872f2760de39d5f562525e6f0fcbaf529332cff0f7"' : 'data-target="#xs-components-links-module-CrpModule-9e9788a045bbfeba4918170c58cf91b3488ac7b63592d87eadf0725c35f44a2c6e92046e9c321e96aa7b03872f2760de39d5f562525e6f0fcbaf529332cff0f7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CrpModule-9e9788a045bbfeba4918170c58cf91b3488ac7b63592d87eadf0725c35f44a2c6e92046e9c321e96aa7b03872f2760de39d5f562525e6f0fcbaf529332cff0f7"' :
                                            'id="xs-components-links-module-CrpModule-9e9788a045bbfeba4918170c58cf91b3488ac7b63592d87eadf0725c35f44a2c6e92046e9c321e96aa7b03872f2760de39d5f562525e6f0fcbaf529332cff0f7"' }>
                                            <li class="link">
                                                <a href="components/AddVillagesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddVillagesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AssigncrpAddComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AssigncrpAddComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AssigncrpComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AssigncrpComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AssignshgAddComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AssignshgAddComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AssignshgComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AssignshgComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AssignvillagesAddComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AssignvillagesAddComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AssignvillagesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AssignvillagesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BlocklevelAddComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BlocklevelAddComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BlocklevelComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BlocklevelComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CrpComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CrpComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CrpTabComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CrpTabComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DistlevelAddComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DistlevelAddComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DistlevelComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DistlevelComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HistoryComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HistoryComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CrpRoutingModule.html" data-type="entity-link" >CrpRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/FundModule.html" data-type="entity-link" >FundModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FundModule-0f91c0eaf56cab7692a85f4dc79394030e10e0ae53ed58b774a0d9bbd8fe68e3a880530cd935473f4392ad9b5ab87ef2d291fd7409f628c76fd87336c187fc64"' : 'data-target="#xs-components-links-module-FundModule-0f91c0eaf56cab7692a85f4dc79394030e10e0ae53ed58b774a0d9bbd8fe68e3a880530cd935473f4392ad9b5ab87ef2d291fd7409f628c76fd87336c187fc64"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FundModule-0f91c0eaf56cab7692a85f4dc79394030e10e0ae53ed58b774a0d9bbd8fe68e3a880530cd935473f4392ad9b5ab87ef2d291fd7409f628c76fd87336c187fc64"' :
                                            'id="xs-components-links-module-FundModule-0f91c0eaf56cab7692a85f4dc79394030e10e0ae53ed58b774a0d9bbd8fe68e3a880530cd935473f4392ad9b5ab87ef2d291fd7409f628c76fd87336c187fc64"' }>
                                            <li class="link">
                                                <a href="components/CentralAddComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CentralAddComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CentralComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CentralComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FundComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FundTabComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FundTabComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OtherComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OtherComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StateAddComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StateAddComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StateComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StateComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FundRoutingModule.html" data-type="entity-link" >FundRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PageRoutingModule.html" data-type="entity-link" >PageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PagesModule.html" data-type="entity-link" >PagesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PagesModule-c0d4c7a57bfd83a1c12b9ba31abc042913638158e3a84fa92a19b039325b77c7556d15227e6e643403eb70ca7d94b6a6e7bb29a6272f482aac1280e8f4150f11"' : 'data-target="#xs-components-links-module-PagesModule-c0d4c7a57bfd83a1c12b9ba31abc042913638158e3a84fa92a19b039325b77c7556d15227e6e643403eb70ca7d94b6a6e7bb29a6272f482aac1280e8f4150f11"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PagesModule-c0d4c7a57bfd83a1c12b9ba31abc042913638158e3a84fa92a19b039325b77c7556d15227e6e643403eb70ca7d94b6a6e7bb29a6272f482aac1280e8f4150f11"' :
                                            'id="xs-components-links-module-PagesModule-c0d4c7a57bfd83a1c12b9ba31abc042913638158e3a84fa92a19b039325b77c7556d15227e6e643403eb70ca7d94b6a6e7bb29a6272f482aac1280e8f4150f11"' }>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PagesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PagesComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProjectModule.html" data-type="entity-link" >ProjectModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ProjectModule-395d6ac857634aaaea635c2ca24cc40237aae4762004f39d15b2d63ebd5157619d75bf5dc507a1252f70b47108be893aae846991fca4c4f056d60b4aef91239a"' : 'data-target="#xs-components-links-module-ProjectModule-395d6ac857634aaaea635c2ca24cc40237aae4762004f39d15b2d63ebd5157619d75bf5dc507a1252f70b47108be893aae846991fca4c4f056d60b4aef91239a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProjectModule-395d6ac857634aaaea635c2ca24cc40237aae4762004f39d15b2d63ebd5157619d75bf5dc507a1252f70b47108be893aae846991fca4c4f056d60b4aef91239a"' :
                                            'id="xs-components-links-module-ProjectModule-395d6ac857634aaaea635c2ca24cc40237aae4762004f39d15b2d63ebd5157619d75bf5dc507a1252f70b47108be893aae846991fca4c4f056d60b4aef91239a"' }>
                                            <li class="link">
                                                <a href="components/AddComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AddtargetComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddtargetComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BeneficiaryComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BeneficiaryComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BudgetComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BudgetComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DisbursementAddComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DisbursementAddComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DisbursementComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DisbursementComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DocumentsAddComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DocumentsAddComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DocumentsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DocumentsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GeoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GeoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeadwiseAddComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeadwiseAddComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeadwiseComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeadwiseComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IndicatorsAddComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IndicatorsAddComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IndicatorsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IndicatorsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InterventionAddComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InterventionAddComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InterventionsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InterventionsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PdfComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PdfComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PocAddComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PocAddComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PocComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PocComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProfileComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfileComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProjectComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProjectComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ReviewAddComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReviewAddComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ReviewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReviewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ShgComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ShgComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProjectRoutingModule.html" data-type="entity-link" >ProjectRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ReportModule.html" data-type="entity-link" >ReportModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ReportModule-2f3c80662314b7fb58ab145949a7be41c5d75f018b0a2e7e6bd3b09658e3321e3093045560457fa331e5addfadd295eae9b4e927b8f130f57310c96b1470dc3f"' : 'data-target="#xs-components-links-module-ReportModule-2f3c80662314b7fb58ab145949a7be41c5d75f018b0a2e7e6bd3b09658e3321e3093045560457fa331e5addfadd295eae9b4e927b8f130f57310c96b1470dc3f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ReportModule-2f3c80662314b7fb58ab145949a7be41c5d75f018b0a2e7e6bd3b09658e3321e3093045560457fa331e5addfadd295eae9b4e927b8f130f57310c96b1470dc3f"' :
                                            'id="xs-components-links-module-ReportModule-2f3c80662314b7fb58ab145949a7be41c5d75f018b0a2e7e6bd3b09658e3321e3093045560457fa331e5addfadd295eae9b4e927b8f130f57310c96b1470dc3f"' }>
                                            <li class="link">
                                                <a href="components/FundUtComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FundUtComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/KeyComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >KeyComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ReportComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReportComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ReportRoutingModule.html" data-type="entity-link" >ReportRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedCommonModule.html" data-type="entity-link" >SharedCommonModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedCommonModule-fe604bbd23bef6064823979ebb0557d5ac7097cd8b3fc88ae84235a1d7a63ce8728cfa7042487691a5e347191e818d6b70b5ca315e070fb3bb966c1ee2154092"' : 'data-target="#xs-components-links-module-SharedCommonModule-fe604bbd23bef6064823979ebb0557d5ac7097cd8b3fc88ae84235a1d7a63ce8728cfa7042487691a5e347191e818d6b70b5ca315e070fb3bb966c1ee2154092"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedCommonModule-fe604bbd23bef6064823979ebb0557d5ac7097cd8b3fc88ae84235a1d7a63ce8728cfa7042487691a5e347191e818d6b70b5ca315e070fb3bb966c1ee2154092"' :
                                            'id="xs-components-links-module-SharedCommonModule-fe604bbd23bef6064823979ebb0557d5ac7097cd8b3fc88ae84235a1d7a63ce8728cfa7042487691a5e347191e818d6b70b5ca315e070fb3bb966c1ee2154092"' }>
                                            <li class="link">
                                                <a href="components/AssignUserRoleComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AssignUserRoleComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BreadcumbSecondaryComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BreadcumbSecondaryComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DdFilterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DdFilterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FundCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FundCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageBreadcumbsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageBreadcumbsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageHeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageHeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageTabViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageTabViewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProjectInfoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProjectInfoComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TrackKpiModule.html" data-type="entity-link" >TrackKpiModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TrackKpiModule-d688260b2fa57e5d999657788f514339e8766a33bcd8c9365d7913c33350afec97c38c98876fc8b1dd76584574a29df62914fe79946c03bbf8837ddb8e891df0"' : 'data-target="#xs-components-links-module-TrackKpiModule-d688260b2fa57e5d999657788f514339e8766a33bcd8c9365d7913c33350afec97c38c98876fc8b1dd76584574a29df62914fe79946c03bbf8837ddb8e891df0"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TrackKpiModule-d688260b2fa57e5d999657788f514339e8766a33bcd8c9365d7913c33350afec97c38c98876fc8b1dd76584574a29df62914fe79946c03bbf8837ddb8e891df0"' :
                                            'id="xs-components-links-module-TrackKpiModule-d688260b2fa57e5d999657788f514339e8766a33bcd8c9365d7913c33350afec97c38c98876fc8b1dd76584574a29df62914fe79946c03bbf8837ddb8e891df0"' }>
                                            <li class="link">
                                                <a href="components/CrpwiseAddComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CrpwiseAddComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CrpwiseComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CrpwiseComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TrackKpiComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TrackKpiComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TrackinterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TrackinterComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TrackKpiRoutingModule.html" data-type="entity-link" >TrackKpiRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UtilizationModule.html" data-type="entity-link" >UtilizationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UtilizationModule-b850ab57107cd0341b2cef356319d19bc2020491f64410670f0502e51c99ff14b1e7c585c6ada80ad971e291f9008b34bd404476ede3c0044139d0c1ef8414e4"' : 'data-target="#xs-components-links-module-UtilizationModule-b850ab57107cd0341b2cef356319d19bc2020491f64410670f0502e51c99ff14b1e7c585c6ada80ad971e291f9008b34bd404476ede3c0044139d0c1ef8414e4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UtilizationModule-b850ab57107cd0341b2cef356319d19bc2020491f64410670f0502e51c99ff14b1e7c585c6ada80ad971e291f9008b34bd404476ede3c0044139d0c1ef8414e4"' :
                                            'id="xs-components-links-module-UtilizationModule-b850ab57107cd0341b2cef356319d19bc2020491f64410670f0502e51c99ff14b1e7c585c6ada80ad971e291f9008b34bd404476ede3c0044139d0c1ef8414e4"' }>
                                            <li class="link">
                                                <a href="components/ComponentAddComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ComponentAddComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ComponentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ComponentComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UtilizationAddComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UtilizationAddComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UtilizationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UtilizationComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UtilizationRoutingModule.html" data-type="entity-link" >UtilizationRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/AdminComponent.html" data-type="entity-link" >AdminComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/IncludeComponent.html" data-type="entity-link" >IncludeComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/KpiComponent.html" data-type="entity-link" >KpiComponent</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AdminService.html" data-type="entity-link" >AdminService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AdminService-1.html" data-type="entity-link" >AdminService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/Api.html" data-type="entity-link" >Api</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AssigntargetService.html" data-type="entity-link" >AssigntargetService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService-1.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BudgetService.html" data-type="entity-link" >BudgetService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CommonService.html" data-type="entity-link" >CommonService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CrpService.html" data-type="entity-link" >CrpService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DatePickerPlacement.html" data-type="entity-link" >DatePickerPlacement</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DisbursService.html" data-type="entity-link" >DisbursService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DocumentService.html" data-type="entity-link" >DocumentService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EventService.html" data-type="entity-link" >EventService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FundService.html" data-type="entity-link" >FundService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GeoService.html" data-type="entity-link" >GeoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HeadwiseService.html" data-type="entity-link" >HeadwiseService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/IndicatorsService.html" data-type="entity-link" >IndicatorsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/InterventionService.html" data-type="entity-link" >InterventionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/KpiconfigService.html" data-type="entity-link" >KpiconfigService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ManagerService.html" data-type="entity-link" >ManagerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OutcomeService.html" data-type="entity-link" >OutcomeService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PocService.html" data-type="entity-link" >PocService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProjectService.html" data-type="entity-link" >ProjectService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ReviewService.html" data-type="entity-link" >ReviewService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TrackKpiService.html" data-type="entity-link" >TrackKpiService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UtilizationService.html" data-type="entity-link" >UtilizationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/Validator.html" data-type="entity-link" >Validator</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/HttpAuthInterceptor.html" data-type="entity-link" >HttpAuthInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/LoginActivate.html" data-type="entity-link" >LoginActivate</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                       
                    <li class="divider"></li>
                   
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});