# NX 1872
# Journal created by scorpio on Thu Jun 13 18:18:34 2024 台北標準時間

#
import math
import os
import NXOpen
import NXOpen.Assemblies
import NXOpen.Assemblies.ProductInterface
import NXOpen.Features
import NXOpen.PDM
import NXOpen.Positioning
import NXOpen.Preferences
parent_dir = os.path.dirname(os.path.abspath(__file__))
body_path = os.path.join(parent_dir, "body.prt")
connect_path = os.path.join(parent_dir, "connect.prt")
forearm_path = os.path.join(parent_dir, "forearm.prt")
pin_path = os.path.join(parent_dir, "pin.prt")
shovel_path = os.path.join(parent_dir, "shovel.prt")
wheel_path = os.path.join(parent_dir, "wheel.prt")
back_arm_path = os.path.join(parent_dir, "back arm.prt")
def main() : 

    theSession  = NXOpen.Session.GetSession()
    # ----------------------------------------------
    #   Menu: File->New...
    # ----------------------------------------------
    markId1 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Visible, "Start")
    
    fileNew1 = theSession.Parts.FileNew()
    
    theSession.SetUndoMarkName(markId1, "New Dialog")
    
    markId2 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "New")
    
    theSession.DeleteUndoMark(markId2, None)
    
    markId3 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "New")
    
    fileNew1.TemplateFileName = "model-plain-1-mm-template.prt"
    
    fileNew1.UseBlankTemplate = False
    
    fileNew1.ApplicationName = "ModelTemplate"
    
    fileNew1.Units = NXOpen.Part.Units.Millimeters
    
    fileNew1.RelationType = ""
    
    fileNew1.UsesMasterModel = "No"
    
    fileNew1.TemplateType = NXOpen.FileNewTemplateType.Item
    
    fileNew1.TemplatePresentationName = "Model"
    
    fileNew1.ItemType = ""
    
    fileNew1.Specialization = ""
    
    fileNew1.SetCanCreateAltrep(False)
    
    fileNew1.NewFileName = "./football player\model1(0613).prt"
    
    fileNew1.MasterFileName = ""
    
    fileNew1.MakeDisplayedPart = True
    
    fileNew1.DisplayPartOption = NXOpen.DisplayPartOption.AllowAdditional
    
    nXObject1 = fileNew1.Commit()
    
    workPart = theSession.Parts.Work
    displayPart = theSession.Parts.Display
    theSession.DeleteUndoMark(markId3, None)
    
    fileNew1.Destroy()
    
    theSession.ApplicationSwitchImmediate("UG_APP_MODELING")
    
    # ----------------------------------------------
    #   Menu: Assemblies->Components->Add Component...
    # ----------------------------------------------
    markId4 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Visible, "Start")
    
    addComponentBuilder1 = workPart.AssemblyManager.CreateAddComponentBuilder()
    
    componentPositioner1 = workPart.ComponentAssembly.Positioner
    
    componentPositioner1.ClearNetwork()
    
    componentPositioner1.BeginAssemblyConstraints()
    
    allowInterpartPositioning1 = theSession.Preferences.Assemblies.InterpartPositioning
    
    expression1 = workPart.Expressions.CreateSystemExpressionWithUnits("1.0", NXOpen.Unit.Null)
    
    unit1 = workPart.UnitCollection.FindObject("MilliMeter")
    expression2 = workPart.Expressions.CreateSystemExpressionWithUnits("1.0", unit1)
    
    expression3 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit1)
    
    unit2 = workPart.UnitCollection.FindObject("Degrees")
    expression4 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit2)
    
    expression5 = workPart.Expressions.CreateSystemExpressionWithUnits("1", NXOpen.Unit.Null)
    
    expression6 = workPart.Expressions.CreateSystemExpressionWithUnits("1.0", unit1)
    
    expression7 = workPart.Expressions.CreateSystemExpressionWithUnits("0", unit1)
    
    expression8 = workPart.Expressions.CreateSystemExpressionWithUnits("0", unit2)
    
    network1 = componentPositioner1.EstablishNetwork()
    
    componentNetwork1 = network1
    componentNetwork1.MoveObjectsState = True
    
    componentNetwork1.DisplayComponent = NXOpen.Assemblies.Component.Null
    
    theSession.SetUndoMarkName(markId4, "Add Component Dialog")
    
    componentNetwork1.MoveObjectsState = True
    
    markId5 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "Assembly Constraints Update")
    
    addComponentBuilder1.SetComponentAnchor(NXOpen.Assemblies.ProductInterface.InterfaceObject.Null)
    
    addComponentBuilder1.SetInitialLocationType(NXOpen.Assemblies.AddComponentBuilder.LocationType.Snap)
    
    addComponentBuilder1.SetCount(1)
    
    addComponentBuilder1.SetScatterOption(True)
    
    addComponentBuilder1.ReferenceSet = "Unknown"
    
    addComponentBuilder1.Layer = -1
    
    basePart1, partLoadStatus1 = theSession.Parts.OpenBase(body_path)
    
    partLoadStatus1.Dispose()
    addComponentBuilder1.ReferenceSet = "Use Model"
    
    addComponentBuilder1.Layer = -1
    
    partstouse1 = [NXOpen.BasePart.Null] * 1 
    part1 = basePart1
    partstouse1[0] = part1
    addComponentBuilder1.SetPartsToAdd(partstouse1)
    
    productinterfaceobjects1 = addComponentBuilder1.GetAllProductInterfaceObjects()
    
    arrangement1 = workPart.ComponentAssembly.Arrangements.FindObject("Arrangement 1")
    componentPositioner1.PrimaryArrangement = arrangement1
    
    datumAxis1 = workPart.Datums.FindObject("DATUM_CSYS(0) X axis")
    direction1 = workPart.Directions.CreateDirection(datumAxis1, NXOpen.Sense.Forward, NXOpen.SmartObject.UpdateOption.WithinModeling)
    
    datumPlane1 = workPart.Datums.FindObject("DATUM_CSYS(0) XY plane")
    datumCsys1 = workPart.Features.FindObject("DATUM_CSYS(0)")
    point1 = datumCsys1.FindObject("POINT 1")
    xform1 = workPart.Xforms.CreateXformByPlaneXDirPoint(datumPlane1, direction1, point1, NXOpen.SmartObject.UpdateOption.WithinModeling, 0.625, False, False)
    
    cartesianCoordinateSystem1 = workPart.CoordinateSystems.CreateCoordinateSystem(xform1, NXOpen.SmartObject.UpdateOption.WithinModeling)
    
    point2 = NXOpen.Point3d(0.0, 0.0, 0.0)
    orientation1 = NXOpen.Matrix3x3()
    
    orientation1.Xx = 1.0
    orientation1.Xy = 0.0
    orientation1.Xz = 0.0
    orientation1.Yx = 0.0
    orientation1.Yy = 1.0
    orientation1.Yz = 0.0
    orientation1.Zx = 0.0
    orientation1.Zy = 0.0
    orientation1.Zz = 1.0
    addComponentBuilder1.SetInitialLocationAndOrientation(point2, orientation1)
    
    movableObjects1 = [NXOpen.NXObject.Null] * 1 
    component1 = workPart.ComponentAssembly.RootComponent.FindObject("COMPONENT body 1")
    movableObjects1[0] = component1
    componentNetwork1.SetMovingGroup(movableObjects1)
    
    markId6 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Visible, "Rotate About X-axis")
    
    loaded1 = componentNetwork1.IsReferencedGeometryLoaded()
    
    componentNetwork1.BeginDrag()
    
    translation1 = NXOpen.Vector3d(0.0, 0.24734464331569939, -5.6651237201631783)
    rotation1 = NXOpen.Matrix3x3()
    
    rotation1.Xx = 1.0
    rotation1.Xy = 0.0
    rotation1.Xz = 0.0
    rotation1.Yx = 0.0
    rotation1.Yy = 0.99619469809174555
    rotation1.Yz = -0.087155742747658096
    rotation1.Zx = 0.0
    rotation1.Zy = 0.087155742747658096
    rotation1.Zz = 0.99619469809174555
    componentNetwork1.DragByTransform(translation1, rotation1)
    
    translation2 = NXOpen.Vector3d(0.0, 2.2148214638437693, -16.823239242943302)
    rotation2 = NXOpen.Matrix3x3()
    
    rotation2.Xx = 1.0
    rotation2.Xy = 0.0
    rotation2.Xz = 0.0
    rotation2.Yx = 0.0
    rotation2.Yy = 0.96592582628906842
    rotation2.Yz = -0.25881904510252057
    rotation2.Zx = 0.0
    rotation2.Zy = 0.25881904510252057
    rotation2.Zz = 0.96592582628906842
    componentNetwork1.DragByTransform(translation2, rotation2)
    
    translation3 = NXOpen.Vector3d(0.0, 6.0899943172994782, -27.470189154296413)
    rotation3 = NXOpen.Matrix3x3()
    
    rotation3.Xx = 1.0
    rotation3.Xy = 0.0
    rotation3.Xz = 0.0
    rotation3.Yx = 0.0
    rotation3.Yy = 0.90630778703665016
    rotation3.Yz = -0.42261826174069916
    rotation3.Zx = 0.0
    rotation3.Zy = 0.42261826174069916
    rotation3.Zz = 0.90630778703665016
    componentNetwork1.DragByTransform(translation3, rotation3)
    
    translation4 = NXOpen.Vector3d(0.0, 8.70834943277967, -32.500002533197382)
    rotation4 = NXOpen.Matrix3x3()
    
    rotation4.Xx = 1.0
    rotation4.Xy = 0.0
    rotation4.Xz = 0.0
    rotation4.Yx = 0.0
    rotation4.Yy = 0.86602540378443893
    rotation4.Yz = -0.49999999999999967
    rotation4.Zx = 0.0
    rotation4.Zy = 0.49999999999999967
    rotation4.Zz = 0.86602540378443893
    componentNetwork1.DragByTransform(translation4, rotation4)
    
    translation5 = NXOpen.Vector3d(0.0, 15.20711238257762, -41.78119788624084)
    rotation5 = NXOpen.Matrix3x3()
    
    rotation5.Xx = 1.0
    rotation5.Xy = 0.0
    rotation5.Xz = 0.0
    rotation5.Yx = 0.0
    rotation5.Yy = 0.76604444311897846
    rotation5.Yz = -0.64278760968653892
    rotation5.Zx = 0.0
    rotation5.Zy = 0.64278760968653892
    rotation5.Zz = 0.76604444311897846
    componentNetwork1.DragByTransform(translation5, rotation5)
    
    translation6 = NXOpen.Vector3d(0.0, 23.218807180153895, -49.792892683817129)
    rotation6 = NXOpen.Matrix3x3()
    
    rotation6.Xx = 1.0
    rotation6.Xy = 0.0
    rotation6.Xz = 0.0
    rotation6.Yx = 0.0
    rotation6.Yy = 0.64278760968654003
    rotation6.Yz = -0.76604444311897757
    rotation6.Zx = 0.0
    rotation6.Zy = 0.76604444311897757
    rotation6.Zz = 0.64278760968654003
    componentNetwork1.DragByTransform(translation6, rotation6)
    
    translation7 = NXOpen.Vector3d(0.0, 32.500002533197346, -56.291655633615093)
    rotation7 = NXOpen.Matrix3x3()
    
    rotation7.Xx = 1.0
    rotation7.Xy = 0.0
    rotation7.Xz = 0.0
    rotation7.Yx = 0.0
    rotation7.Yy = 0.50000000000000089
    rotation7.Yz = -0.86602540378443826
    rotation7.Zx = 0.0
    rotation7.Zy = 0.86602540378443826
    rotation7.Zz = 0.50000000000000089
    componentNetwork1.DragByTransform(translation7, rotation7)
    
    translation8 = NXOpen.Vector3d(0.0, 42.768694017417189, -61.080025111937843)
    rotation8 = NXOpen.Matrix3x3()
    
    rotation8.Xx = 1.0
    rotation8.Xy = 0.0
    rotation8.Xz = 0.0
    rotation8.Yx = 0.0
    rotation8.Yy = 0.34202014332566988
    rotation8.Yz = -0.93969262078590821
    rotation8.Zx = 0.0
    rotation8.Zy = 0.93969262078590821
    rotation8.Zz = 0.34202014332566988
    componentNetwork1.DragByTransform(translation8, rotation8)
    
    translation9 = NXOpen.Vector3d(0.0, 53.712872638274021, -64.012508935218406)
    rotation9 = NXOpen.Matrix3x3()
    
    rotation9.Xx = 1.0
    rotation9.Xy = 0.0
    rotation9.Xz = 0.0
    rotation9.Yx = 0.0
    rotation9.Yy = 0.17364817766693166
    rotation9.Yz = -0.98480775301220813
    rotation9.Zx = 0.0
    rotation9.Zy = 0.98480775301220813
    rotation9.Zz = 0.17364817766693166
    componentNetwork1.DragByTransform(translation9, rotation9)
    
    translation10 = NXOpen.Vector3d(0.0, 65.000005066394706, -65.000005066394834)
    rotation10 = NXOpen.Matrix3x3()
    
    rotation10.Xx = 1.0
    rotation10.Xy = 0.0
    rotation10.Xz = 0.0
    rotation10.Yx = 0.0
    rotation10.Yy = 1.4432899320127035e-15
    rotation10.Yz = -1.0000000000000004
    rotation10.Zx = 0.0
    rotation10.Zy = 1.0000000000000004
    rotation10.Zz = 1.4432899320127035e-15
    componentNetwork1.DragByTransform(translation10, rotation10)
    
    translation11 = NXOpen.Vector3d(0.0, 70.665128786557887, -64.752660423079135)
    rotation11 = NXOpen.Matrix3x3()
    
    rotation11.Xx = 1.0
    rotation11.Xy = 0.0
    rotation11.Xz = 0.0
    rotation11.Yx = 0.0
    rotation11.Yy = -0.087155742747656695
    rotation11.Yz = -0.9961946980917461
    rotation11.Zx = 0.0
    rotation11.Zy = 0.9961946980917461
    rotation11.Zz = -0.087155742747656695
    componentNetwork1.DragByTransform(translation11, rotation11)
    
    translation12 = NXOpen.Vector3d(0.0, 76.287137494515406, -64.012508935218463)
    rotation12 = NXOpen.Matrix3x3()
    
    rotation12.Xx = 1.0
    rotation12.Xy = 0.0
    rotation12.Xz = 0.0
    rotation12.Yx = 0.0
    rotation12.Yy = -0.17364817766692886
    rotation12.Yz = -0.9848077530122088
    rotation12.Zx = 0.0
    rotation12.Zy = 0.9848077530122088
    rotation12.Zz = -0.17364817766692886
    componentNetwork1.DragByTransform(translation12, rotation12)
    
    translation13 = NXOpen.Vector3d(0.0, 81.823244309338023, -62.785183602551086)
    rotation13 = NXOpen.Matrix3x3()
    
    rotation13.Xx = 1.0
    rotation13.Xy = 0.0
    rotation13.Xz = 0.0
    rotation13.Yx = 0.0
    rotation13.Yy = -0.2588190451025193
    rotation13.Yz = -0.9659258262890692
    rotation13.Zx = 0.0
    rotation13.Zy = 0.9659258262890692
    rotation13.Zz = -0.2588190451025193
    componentNetwork1.DragByTransform(translation13, rotation13)
    
    translation14 = NXOpen.Vector3d(0.0, 76.287137494515406, -64.012508935218463)
    rotation14 = NXOpen.Matrix3x3()
    
    rotation14.Xx = 1.0
    rotation14.Xy = 0.0
    rotation14.Xz = 0.0
    rotation14.Yx = 0.0
    rotation14.Yy = -0.17364817766692892
    rotation14.Yz = -0.98480775301220891
    rotation14.Zx = 0.0
    rotation14.Zy = 0.98480775301220891
    rotation14.Zz = -0.17364817766692892
    componentNetwork1.DragByTransform(translation14, rotation14)
    
    translation15 = NXOpen.Vector3d(0.0, 70.665128786557901, -64.752660423079149)
    rotation15 = NXOpen.Matrix3x3()
    
    rotation15.Xx = 1.0
    rotation15.Xy = 0.0
    rotation15.Xz = 0.0
    rotation15.Yx = 0.0
    rotation15.Yy = -0.087155742747656764
    rotation15.Yz = -0.99619469809174621
    rotation15.Zx = 0.0
    rotation15.Zy = 0.99619469809174621
    rotation15.Zz = -0.087155742747656764
    componentNetwork1.DragByTransform(translation15, rotation15)
    
    translation16 = NXOpen.Vector3d(0.0, 65.000005066394721, -65.000005066394849)
    rotation16 = NXOpen.Matrix3x3()
    
    rotation16.Xx = 1.0
    rotation16.Xy = 0.0
    rotation16.Xz = 0.0
    rotation16.Yx = 0.0
    rotation16.Yy = 1.3739009929736312e-15
    rotation16.Yz = -1.0000000000000007
    rotation16.Zx = 0.0
    rotation16.Zy = 1.0000000000000007
    rotation16.Zz = 1.3739009929736312e-15
    componentNetwork1.DragByTransform(translation16, rotation16)
    
    translation17 = NXOpen.Vector3d(0.0, 65.000005066394721, -65.000005066394849)
    rotation17 = NXOpen.Matrix3x3()
    
    rotation17.Xx = 1.0
    rotation17.Xy = 0.0
    rotation17.Xz = 0.0
    rotation17.Yx = 0.0
    rotation17.Yy = 1.3739009929736312e-15
    rotation17.Yz = -1.0000000000000007
    rotation17.Zx = 0.0
    rotation17.Zy = 1.0000000000000007
    rotation17.Zz = 1.3739009929736312e-15
    componentNetwork1.DragByTransform(translation17, rotation17)
    
    componentNetwork1.EndDrag()
    
    componentNetwork1.ResetDisplay()
    
    componentNetwork1.ApplyToModel()
    
    markId7 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Visible, "Translate Along Y-axis")
    
    loaded2 = componentNetwork1.IsReferencedGeometryLoaded()
    
    componentNetwork1.BeginDrag()
    
    translation18 = NXOpen.Vector3d(0.0, 2.8421709430404007e-14, 22.000000000000014)
    componentNetwork1.DragByTranslation(translation18)
    
    translation19 = NXOpen.Vector3d(0.0, 2.8421709430404007e-14, 25.000000000000018)
    componentNetwork1.DragByTranslation(translation19)
    
    translation20 = NXOpen.Vector3d(0.0, 4.2632564145606011e-14, 28.000000000000018)
    componentNetwork1.DragByTranslation(translation20)
    
    translation21 = NXOpen.Vector3d(0.0, 4.2632564145606011e-14, 29.000000000000018)
    componentNetwork1.DragByTranslation(translation21)
    
    translation22 = NXOpen.Vector3d(0.0, 4.2632564145606011e-14, 30.000000000000021)
    componentNetwork1.DragByTranslation(translation22)
    
    componentNetwork1.EndDrag()
    
    componentNetwork1.ResetDisplay()
    
    componentNetwork1.ApplyToModel()
    
    markId8 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Visible, "Translate Along Z-axis")
    
    loaded3 = componentNetwork1.IsReferencedGeometryLoaded()
    
    componentNetwork1.BeginDrag()
    
    translation23 = NXOpen.Vector3d(0.0, -21.000000000000014, 2.8421709430404007e-14)
    componentNetwork1.DragByTranslation(translation23)
    
    translation24 = NXOpen.Vector3d(0.0, -25.000000000000014, 3.5527136788005009e-14)
    componentNetwork1.DragByTranslation(translation24)
    
    translation25 = NXOpen.Vector3d(0.0, -29.000000000000014, 3.907985046680551e-14)
    componentNetwork1.DragByTranslation(translation25)
    
    translation26 = NXOpen.Vector3d(0.0, -32.000000000000021, 4.2632564145606011e-14)
    componentNetwork1.DragByTranslation(translation26)
    
    translation27 = NXOpen.Vector3d(0.0, -37.000000000000021, 4.9737991503207013e-14)
    componentNetwork1.DragByTranslation(translation27)
    
    translation28 = NXOpen.Vector3d(0.0, -41.000000000000028, 5.6843418860808015e-14)
    componentNetwork1.DragByTranslation(translation28)
    
    translation29 = NXOpen.Vector3d(0.0, -43.000000000000028, 6.0396132539608516e-14)
    componentNetwork1.DragByTranslation(translation29)
    
    translation30 = NXOpen.Vector3d(0.0, -44.000000000000028, 6.0396132539608516e-14)
    componentNetwork1.DragByTranslation(translation30)
    
    componentNetwork1.EndDrag()
    
    componentNetwork1.ResetDisplay()
    
    componentNetwork1.ApplyToModel()
    
    markId9 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "Add Component")
    
    theSession.DeleteUndoMark(markId9, None)
    
    markId10 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "Add Component")
    
    markId11 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "AddComponent on_apply")
    
    componentNetwork1.Solve()
    
    componentPositioner1.ClearNetwork()
    
    nErrs1 = theSession.UpdateManager.AddToDeleteList(componentNetwork1)
    
    nErrs2 = theSession.UpdateManager.DoUpdate(markId5)
    
    componentPositioner1.EndAssemblyConstraints()
    
    logicalobjects1 = addComponentBuilder1.GetLogicalObjectsHavingUnassignedRequiredAttributes()
    
    addComponentBuilder1.ComponentName = "BODY"
    
    nXObject2 = addComponentBuilder1.Commit()
    
    errorList1 = addComponentBuilder1.GetOperationFailures()
    
    errorList1.Dispose()
    markId12 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "ComponentOperationUtilities CreateFixConstraint")
    
    componentPositioner2 = workPart.ComponentAssembly.Positioner
    
    componentPositioner2.ClearNetwork()
    
    network2 = componentPositioner2.EstablishNetwork()
    
    componentNetwork2 = network2
    componentNetwork2.MoveObjectsState = True
    
    componentNetwork2.DisplayComponent = NXOpen.Assemblies.Component.Null
    
    componentNetwork2.NetworkArrangementsMode = NXOpen.Positioning.ComponentNetwork.ArrangementsMode.Existing
    
    constraint1 = componentPositioner2.CreateConstraint(True)
    
    componentConstraint1 = constraint1
    componentConstraint1.ConstraintType = NXOpen.Positioning.Constraint.Type.Fix
    
    component2 = nXObject2
    constraintReference1 = componentConstraint1.CreateConstraintReference(component2, component2, False, False, False)
    
    componentNetwork2.Solve()
    
    componentPositioner2.ClearNetwork()
    
    nErrs3 = theSession.UpdateManager.AddToDeleteList(componentNetwork2)
    
    nErrs4 = theSession.UpdateManager.DoUpdate(markId8)
    
    theSession.DeleteUndoMark(markId10, None)
    
    theSession.SetUndoMarkName(markId4, "Add Component")
    
    addComponentBuilder1.Destroy()
    
    componentPositioner2.PrimaryArrangement = NXOpen.Assemblies.Arrangement.Null
    
    theSession.DeleteUndoMark(markId5, None)
    
    theSession.DeleteUndoMark(markId8, None)
    
    theSession.DeleteUndoMark(markId7, None)
    
    theSession.DeleteUndoMark(markId6, None)
    
    # ----------------------------------------------
    #   Menu: Assemblies->Components->Add Component...
    # ----------------------------------------------
    markId13 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Visible, "Start")
    
    addComponentBuilder2 = workPart.AssemblyManager.CreateAddComponentBuilder()
    
    componentPositioner3 = workPart.ComponentAssembly.Positioner
    
    componentPositioner3.ClearNetwork()
    
    componentPositioner3.PrimaryArrangement = arrangement1
    
    componentPositioner3.BeginAssemblyConstraints()
    
    allowInterpartPositioning2 = theSession.Preferences.Assemblies.InterpartPositioning
    
    expression9 = workPart.Expressions.CreateSystemExpressionWithUnits("1.0", NXOpen.Unit.Null)
    
    expression10 = workPart.Expressions.CreateSystemExpressionWithUnits("1.0", unit1)
    
    expression11 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit1)
    
    expression12 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit2)
    
    expression13 = workPart.Expressions.CreateSystemExpressionWithUnits("1", NXOpen.Unit.Null)
    
    expression14 = workPart.Expressions.CreateSystemExpressionWithUnits("1.0", unit1)
    
    expression15 = workPart.Expressions.CreateSystemExpressionWithUnits("0", unit1)
    
    expression16 = workPart.Expressions.CreateSystemExpressionWithUnits("0", unit2)
    
    network3 = componentPositioner3.EstablishNetwork()
    
    componentNetwork3 = network3
    componentNetwork3.MoveObjectsState = True
    
    componentNetwork3.DisplayComponent = NXOpen.Assemblies.Component.Null
    
    theSession.SetUndoMarkName(markId13, "Add Component Dialog")
    
    componentNetwork3.MoveObjectsState = True
    
    markId14 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "Assembly Constraints Update")
    
    addComponentBuilder2.SetComponentAnchor(NXOpen.Assemblies.ProductInterface.InterfaceObject.Null)
    
    addComponentBuilder2.SetInitialLocationType(NXOpen.Assemblies.AddComponentBuilder.LocationType.Snap)
    
    addComponentBuilder2.SetCount(1)
    
    addComponentBuilder2.SetScatterOption(True)
    
    addComponentBuilder2.ReferenceSet = "Unknown"
    
    addComponentBuilder2.Layer = -1
    
    basePart2, partLoadStatus2 = theSession.Parts.OpenBase(connect_path)
    
    partLoadStatus2.Dispose()
    addComponentBuilder2.ReferenceSet = "Use Model"
    
    addComponentBuilder2.Layer = -1
    
    partstouse2 = [NXOpen.BasePart.Null] * 1 
    part2 = basePart2
    partstouse2[0] = part2
    addComponentBuilder2.SetPartsToAdd(partstouse2)
    
    productinterfaceobjects2 = addComponentBuilder2.GetAllProductInterfaceObjects()
    
    coordinates1 = NXOpen.Point3d(-52.631056285799303, 186.66929155313471, 0.0)
    point3 = workPart.Points.CreatePoint(coordinates1)
    
    coordinates2 = NXOpen.Point3d(-52.631056285799303, 186.66929155313471, 0.0)
    point4 = workPart.Points.CreatePoint(coordinates2)
    
    origin1 = NXOpen.Point3d(-52.631056285799303, 186.66929155313471, 0.0)
    vector1 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    direction2 = workPart.Directions.CreateDirection(origin1, vector1, NXOpen.SmartObject.UpdateOption.WithinModeling)
    
    origin2 = NXOpen.Point3d(-52.631056285799303, 186.66929155313471, 0.0)
    vector2 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    direction3 = workPart.Directions.CreateDirection(origin2, vector2, NXOpen.SmartObject.UpdateOption.WithinModeling)
    
    xform2 = workPart.Xforms.CreateXformByPointXDirZDir(point4, direction3, direction2, NXOpen.SmartObject.UpdateOption.WithinModeling, 0.625)
    
    cartesianCoordinateSystem2 = workPart.CoordinateSystems.CreateCoordinateSystem(xform2, NXOpen.SmartObject.UpdateOption.WithinModeling)
    
    point5 = NXOpen.Point3d(-52.631056285799303, 186.66929155313471, 0.0)
    orientation2 = NXOpen.Matrix3x3()
    
    orientation2.Xx = 1.0
    orientation2.Xy = 0.0
    orientation2.Xz = 0.0
    orientation2.Yx = 0.0
    orientation2.Yy = 1.0
    orientation2.Yz = 0.0
    orientation2.Zx = 0.0
    orientation2.Zy = 0.0
    orientation2.Zz = 1.0
    addComponentBuilder2.SetInitialLocationAndOrientation(point5, orientation2)
    
    movableObjects2 = [NXOpen.NXObject.Null] * 1 
    component3 = workPart.ComponentAssembly.RootComponent.FindObject("COMPONENT connect 1")
    movableObjects2[0] = component3
    componentNetwork3.SetMovingGroup(movableObjects2)
    
    markId15 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Visible, "Transform Origin")
    
    loaded4 = componentNetwork3.IsReferencedGeometryLoaded()
    
    componentNetwork3.BeginDrag()
    
    point6 = NXOpen.Point3d(-52.631056285799303, 251.66929103159407, -30.042568221688271)
    direction4 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork3.DragByRay(point6, direction4)
    
    point7 = NXOpen.Point3d(-52.631056285799311, 123.40534046746654, -25.777659583237913)
    direction5 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork3.DragByRay(point7, direction5)
    
    point8 = NXOpen.Point3d(-52.631056285799303, 111.07085943818531, -24.288849884753695)
    direction6 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork3.DragByRay(point8, direction6)
    
    point9 = NXOpen.Point3d(-52.631056285799311, 101.52158380261277, -21.847358506352933)
    direction7 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork3.DragByRay(point9, direction7)
    
    point10 = NXOpen.Point3d(-52.631056285799311, 96.349059500010938, -21.523754008889266)
    direction8 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork3.DragByRay(point10, direction8)
    
    point11 = NXOpen.Point3d(-52.631056285799318, 95.155400045564392, -21.88448091936921)
    direction9 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork3.DragByRay(point11, direction9)
    
    point12 = NXOpen.Point3d(-52.631056285799318, 95.155400045564392, -21.88448091936921)
    direction10 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork3.DragByRay(point12, direction10)
    
    point13 = NXOpen.Point3d(-52.631056285799311, 99.134264893719617, -22.901768993702859)
    direction11 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork3.DragByRay(point13, direction11)
    
    point14 = NXOpen.Point3d(-52.631056285799318, 103.5110162266904, -23.021915876299818)
    direction12 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork3.DragByRay(point14, direction12)
    
    point15 = NXOpen.Point3d(-52.631056285799311, 104.3067891963214, -22.892416824776504)
    direction13 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork3.DragByRay(point15, direction13)
    
    point16 = NXOpen.Point3d(-52.631056285799303, 105.10256216595246, -23.095874439643239)
    direction14 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork3.DragByRay(point16, direction14)
    
    point17 = NXOpen.Point3d(-52.631056285799303, 105.50044865076799, -23.197603247076607)
    direction15 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork3.DragByRay(point17, direction15)
    
    point18 = NXOpen.Point3d(-52.631056285799303, 105.50044865076799, -23.197603247076607)
    direction16 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork3.DragByRay(point18, direction16)
    
    point19 = NXOpen.Point3d(-52.631056285799303, 105.10256216595246, -23.095874439643239)
    direction17 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork3.DragByRay(point19, direction17)
    
    point20 = NXOpen.Point3d(-52.631056285799303, 103.90890271150592, -23.123644683733172)
    direction18 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork3.DragByRay(point20, direction18)
    
    point21 = NXOpen.Point3d(-52.631056285799303, 102.31735677224378, -23.382642786779755)
    direction19 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork3.DragByRay(point21, direction19)
    
    point22 = NXOpen.Point3d(-52.631056285799311, 100.72581083298169, -23.974597556216363)
    direction20 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork3.DragByRay(point22, direction20)
    
    point23 = NXOpen.Point3d(-52.631056285799318, 99.134264893719617, -24.899508992043)
    direction21 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork3.DragByRay(point23, direction21)
    
    point24 = NXOpen.Point3d(-52.631056285799325, 96.746945984826482, -25.953919479392933)
    direction22 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork3.DragByRay(point24, direction22)
    
    point25 = NXOpen.Point3d(-52.631056285799332, 92.370194651855712, -26.499685929576028)
    direction23 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork3.DragByRay(point25, direction23)
    
    point26 = NXOpen.Point3d(-52.631056285799332, 90.380762227778106, -27.655825224359329)
    direction24 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork3.DragByRay(point26, direction24)
    
    point27 = NXOpen.Point3d(-52.631056285799332, 88.391329803700486, -28.146051186362573)
    direction25 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork3.DragByRay(point27, direction25)
    
    point28 = NXOpen.Point3d(-52.631056285799325, 86.004010894807408, -29.533418340102532)
    direction26 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork3.DragByRay(point28, direction26)
    
    point29 = NXOpen.Point3d(-52.631056285799332, 84.412464955545261, -30.458329775929162)
    direction27 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork3.DragByRay(point29, direction27)
    
    point30 = NXOpen.Point3d(-52.631056285799332, 83.616691985914258, -31.253742160232505)
    direction28 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork3.DragByRay(point30, direction28)
    
    point31 = NXOpen.Point3d(-52.631056285799332, 82.820919016283185, -33.048024543705921)
    direction29 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork3.DragByRay(point31, direction29)
    
    point32 = NXOpen.Point3d(-52.631056285799332, 82.820919016283185, -33.380981210095925)
    direction30 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork3.DragByRay(point32, direction30)
    
    point33 = NXOpen.Point3d(-52.631056285799332, 82.820919016283185, -33.380981210095925)
    direction31 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork3.DragByRay(point33, direction31)
    
    point34 = NXOpen.Point3d(-52.631056285799332, 82.820919016283185, -33.380981210095925)
    direction32 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork3.DragByRay(point34, direction32)
    
    componentNetwork3.EndDrag()
    
    componentNetwork3.ResetDisplay()
    
    componentNetwork3.ApplyToModel()
    
    markId16 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Visible, "Translate Along Z-axis")
    
    loaded5 = componentNetwork3.IsReferencedGeometryLoaded()
    
    componentNetwork3.BeginDrag()
    
    translation31 = NXOpen.Vector3d(0.0, 0.0, 6.0)
    componentNetwork3.DragByTranslation(translation31)
    
    translation32 = NXOpen.Vector3d(0.0, 0.0, 10.0)
    componentNetwork3.DragByTranslation(translation32)
    
    translation33 = NXOpen.Vector3d(0.0, 0.0, 15.0)
    componentNetwork3.DragByTranslation(translation33)
    
    translation34 = NXOpen.Vector3d(0.0, 0.0, 17.0)
    componentNetwork3.DragByTranslation(translation34)
    
    translation35 = NXOpen.Vector3d(0.0, 0.0, 19.0)
    componentNetwork3.DragByTranslation(translation35)
    
    translation36 = NXOpen.Vector3d(0.0, 0.0, 20.0)
    componentNetwork3.DragByTranslation(translation36)
    
    translation37 = NXOpen.Vector3d(0.0, 0.0, 25.0)
    componentNetwork3.DragByTranslation(translation37)
    
    translation38 = NXOpen.Vector3d(0.0, 0.0, 27.0)
    componentNetwork3.DragByTranslation(translation38)
    
    translation39 = NXOpen.Vector3d(0.0, 0.0, 31.0)
    componentNetwork3.DragByTranslation(translation39)
    
    translation40 = NXOpen.Vector3d(0.0, 0.0, 35.0)
    componentNetwork3.DragByTranslation(translation40)
    
    translation41 = NXOpen.Vector3d(0.0, 0.0, 37.0)
    componentNetwork3.DragByTranslation(translation41)
    
    translation42 = NXOpen.Vector3d(0.0, 0.0, 40.0)
    componentNetwork3.DragByTranslation(translation42)
    
    translation43 = NXOpen.Vector3d(0.0, 0.0, 42.0)
    componentNetwork3.DragByTranslation(translation43)
    
    translation44 = NXOpen.Vector3d(0.0, 0.0, 43.0)
    componentNetwork3.DragByTranslation(translation44)
    
    translation45 = NXOpen.Vector3d(0.0, 0.0, 44.0)
    componentNetwork3.DragByTranslation(translation45)
    
    translation46 = NXOpen.Vector3d(0.0, 0.0, 46.0)
    componentNetwork3.DragByTranslation(translation46)
    
    translation47 = NXOpen.Vector3d(0.0, 0.0, 47.0)
    componentNetwork3.DragByTranslation(translation47)
    
    translation48 = NXOpen.Vector3d(0.0, 0.0, 48.0)
    componentNetwork3.DragByTranslation(translation48)
    
    translation49 = NXOpen.Vector3d(0.0, 0.0, 50.0)
    componentNetwork3.DragByTranslation(translation49)
    
    translation50 = NXOpen.Vector3d(0.0, 0.0, 52.0)
    componentNetwork3.DragByTranslation(translation50)
    
    translation51 = NXOpen.Vector3d(0.0, 0.0, 53.0)
    componentNetwork3.DragByTranslation(translation51)
    
    translation52 = NXOpen.Vector3d(0.0, 0.0, 54.0)
    componentNetwork3.DragByTranslation(translation52)
    
    translation53 = NXOpen.Vector3d(0.0, 0.0, 55.0)
    componentNetwork3.DragByTranslation(translation53)
    
    translation54 = NXOpen.Vector3d(0.0, 0.0, 56.0)
    componentNetwork3.DragByTranslation(translation54)
    
    componentNetwork3.EndDrag()
    
    componentNetwork3.ResetDisplay()
    
    componentNetwork3.ApplyToModel()
    
    markId17 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Visible, "Translate Along X-axis")
    
    loaded6 = componentNetwork3.IsReferencedGeometryLoaded()
    
    componentNetwork3.BeginDrag()
    
    translation55 = NXOpen.Vector3d(15.0, 0.0, 0.0)
    componentNetwork3.DragByTranslation(translation55)
    
    translation56 = NXOpen.Vector3d(20.0, 0.0, 0.0)
    componentNetwork3.DragByTranslation(translation56)
    
    translation57 = NXOpen.Vector3d(25.0, 0.0, 0.0)
    componentNetwork3.DragByTranslation(translation57)
    
    translation58 = NXOpen.Vector3d(30.0, 0.0, 0.0)
    componentNetwork3.DragByTranslation(translation58)
    
    translation59 = NXOpen.Vector3d(35.0, 0.0, 0.0)
    componentNetwork3.DragByTranslation(translation59)
    
    translation60 = NXOpen.Vector3d(40.0, 0.0, 0.0)
    componentNetwork3.DragByTranslation(translation60)
    
    translation61 = NXOpen.Vector3d(45.0, 0.0, 0.0)
    componentNetwork3.DragByTranslation(translation61)
    
    translation62 = NXOpen.Vector3d(50.0, 0.0, 0.0)
    componentNetwork3.DragByTranslation(translation62)
    
    translation63 = NXOpen.Vector3d(55.0, 0.0, 0.0)
    componentNetwork3.DragByTranslation(translation63)
    
    translation64 = NXOpen.Vector3d(60.0, 0.0, 0.0)
    componentNetwork3.DragByTranslation(translation64)
    
    componentNetwork3.EndDrag()
    
    componentNetwork3.ResetDisplay()
    
    componentNetwork3.ApplyToModel()
    
    # ----------------------------------------------
    #   Menu: Orient View->Top
    # ----------------------------------------------
    workPart.ModelingViews.WorkView.Orient(NXOpen.View.Canned.Top, NXOpen.View.ScaleAdjustment.Fit)
    
    markId18 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Visible, "Transform Origin")
    
    loaded7 = componentNetwork3.IsReferencedGeometryLoaded()
    
    componentNetwork3.BeginDrag()
    
    point35 = NXOpen.Point3d(7.3689437142006682, 82.820919016283185, 22.619018789904075)
    direction33 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork3.DragByRay(point35, direction33)
    
    point36 = NXOpen.Point3d(5.3404430526280802, 75.71467725378568, 22.619018789904075)
    direction34 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork3.DragByRay(point36, direction34)
    
    point37 = NXOpen.Point3d(4.4863375109132813, 74.860571712070893, 22.619018789904075)
    direction35 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork3.DragByRay(point37, direction35)
    
    point38 = NXOpen.Point3d(4.2728111254845951, 74.433518941213507, 22.619018789904075)
    direction36 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork3.DragByRay(point38, direction36)
    
    point39 = NXOpen.Point3d(3.8457583546271872, 73.792939784927412, 22.619018789904075)
    direction37 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork3.DragByRay(point39, direction37)
    
    point40 = NXOpen.Point3d(3.632231969198501, 73.792939784927412, 22.619018789904075)
    direction38 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork3.DragByRay(point40, direction38)
    
    point41 = NXOpen.Point3d(3.632231969198501, 73.792939784927412, 22.619018789904075)
    direction39 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork3.DragByRay(point41, direction39)
    
    point42 = NXOpen.Point3d(3.2051791983411109, 73.792939784927412, 22.619018789904075)
    direction40 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork3.DragByRay(point42, direction40)
    
    point43 = NXOpen.Point3d(2.9916528129124069, 73.579413399498719, 22.619018789904075)
    direction41 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork3.DragByRay(point43, direction41)
    
    point44 = NXOpen.Point3d(2.3510736566263128, 73.579413399498719, 22.619018789904075)
    direction42 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork3.DragByRay(point44, direction42)
    
    point45 = NXOpen.Point3d(2.1375472711976258, 73.579413399498719, 22.619018789904075)
    direction43 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork3.DragByRay(point45, direction43)
    
    point46 = NXOpen.Point3d(1.9240208857689218, 73.579413399498719, 22.619018789904075)
    direction44 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork3.DragByRay(point46, direction44)
    
    point47 = NXOpen.Point3d(1.9240208857689218, 73.579413399498719, 22.619018789904075)
    direction45 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork3.DragByRay(point47, direction45)
    
    point48 = NXOpen.Point3d(1.7104945003402356, 73.579413399498719, 22.619018789904075)
    direction46 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork3.DragByRay(point48, direction46)
    
    point49 = NXOpen.Point3d(1.2834417294828278, 73.365887014070012, 22.619018789904075)
    direction47 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork3.DragByRay(point49, direction47)
    
    point50 = NXOpen.Point3d(1.2834417294828278, 73.365887014070012, 22.619018789904075)
    direction48 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork3.DragByRay(point50, direction48)
    
    point51 = NXOpen.Point3d(0.85638895862543762, 73.365887014070012, 22.619018789904075)
    direction49 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork3.DragByRay(point51, direction49)
    
    point52 = NXOpen.Point3d(0.64286257319675144, 73.365887014070012, 22.619018789904075)
    direction50 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork3.DragByRay(point52, direction50)
    
    point53 = NXOpen.Point3d(0.64286257319675144, 73.365887014070012, 22.619018789904075)
    direction51 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork3.DragByRay(point53, direction51)
    
    point54 = NXOpen.Point3d(0.42933618776804749, 73.365887014070012, 22.619018789904075)
    direction52 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork3.DragByRay(point54, direction52)
    
    point55 = NXOpen.Point3d(0.42933618776804749, 73.365887014070012, 22.619018789904075)
    direction53 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork3.DragByRay(point55, direction53)
    
    point56 = NXOpen.Point3d(0.0022834169106573654, 73.365887014070012, 22.619018789904075)
    direction54 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork3.DragByRay(point56, direction54)
    
    point57 = NXOpen.Point3d(0.0022834169106573654, 73.365887014070012, 22.619018789904075)
    direction55 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork3.DragByRay(point57, direction55)
    
    point58 = NXOpen.Point3d(0.0022834169106573654, 73.365887014070012, 22.619018789904075)
    direction56 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork3.DragByRay(point58, direction56)
    
    point59 = NXOpen.Point3d(0.0022834169106573654, 73.365887014070012, 22.619018789904075)
    direction57 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork3.DragByRay(point59, direction57)
    
    componentNetwork3.EndDrag()
    
    componentNetwork3.ResetDisplay()
    
    componentNetwork3.ApplyToModel()
    
    # ----------------------------------------------
    #   Menu: Orient View->Right
    # ----------------------------------------------
    workPart.ModelingViews.WorkView.Orient(NXOpen.View.Canned.Right, NXOpen.View.ScaleAdjustment.Fit)
    
    # ----------------------------------------------
    #   Menu: Rendering Style->Face Analysis
    # ----------------------------------------------
    workPart.ModelingViews.WorkView.RenderingStyle = NXOpen.View.RenderingStyleType.FaceAnalysis
    
    markId19 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Visible, "Transform Origin")
    
    loaded8 = componentNetwork3.IsReferencedGeometryLoaded()
    
    componentNetwork3.BeginDrag()
    
    point60 = NXOpen.Point3d(0.0022834169106573654, 73.365887014070012, 22.619018789904075)
    direction58 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork3.DragByRay(point60, direction58)
    
    point61 = NXOpen.Point3d(0.0022834169106573654, 70.968758961185969, 24.874999600534313)
    direction59 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork3.DragByRay(point61, direction59)
    
    point62 = NXOpen.Point3d(0.0022834169106573654, 69.089592148048524, 25.387499640480893)
    direction60 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork3.DragByRay(point62, direction60)
    
    point63 = NXOpen.Point3d(0.0022834169106573654, 67.039591988262202, 26.070833027076322)
    direction61 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork3.DragByRay(point63, direction61)
    
    point64 = NXOpen.Point3d(0.0022834169106573654, 65.502091868422482, 26.754166413671765)
    direction62 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork3.DragByRay(point64, direction62)
    
    point65 = NXOpen.Point3d(0.0022834169106573654, 64.818758481827047, 27.095833106969479)
    direction63 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork3.DragByRay(point65, direction63)
    
    point66 = NXOpen.Point3d(0.0022834169106573654, 63.7937584019339, 27.437499800267194)
    direction64 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork3.DragByRay(point66, direction64)
    
    point67 = NXOpen.Point3d(0.0022834169106573654, 62.08542493544531, 27.779166493564908)
    direction65 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork3.DragByRay(point67, direction65)
    
    point68 = NXOpen.Point3d(0.0022834169106573654, 60.377091468956728, 28.291666533511485)
    direction66 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork3.DragByRay(point68, direction66)
    
    point69 = NXOpen.Point3d(0.0022834169106573654, 59.522924735712436, 28.804166573458065)
    direction67 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork3.DragByRay(point69, direction67)
    
    point70 = NXOpen.Point3d(0.0022834169106573654, 58.497924655819276, 29.14583326675578)
    direction68 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork3.DragByRay(point70, direction68)
    
    point71 = NXOpen.Point3d(0.0022834169106573654, 57.472924575926122, 29.658333306702357)
    direction69 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork3.DragByRay(point71, direction69)
    
    point72 = NXOpen.Point3d(0.0022834169106573654, 56.618757842681831, 29.829166653351209)
    direction70 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork3.DragByRay(point72, direction70)
    
    point73 = NXOpen.Point3d(0.0022834169106573654, 56.277091149384127, 29.829166653351209)
    direction71 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork3.DragByRay(point73, direction71)
    
    point74 = NXOpen.Point3d(0.0022834169106573654, 55.764591109437532, 30.000000000000071)
    direction72 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork3.DragByRay(point74, direction72)
    
    point75 = NXOpen.Point3d(0.0022834169106573654, 55.422924416139836, 30.000000000000071)
    direction73 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork3.DragByRay(point75, direction73)
    
    point76 = NXOpen.Point3d(0.0022834169106573654, 55.081257722842103, 30.000000000000071)
    direction74 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork3.DragByRay(point76, direction74)
    
    point77 = NXOpen.Point3d(0.0022834169106573654, 54.739591029544407, 30.000000000000071)
    direction75 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork3.DragByRay(point77, direction75)
    
    point78 = NXOpen.Point3d(0.0022834169106573654, 54.227090989597812, 30.000000000000071)
    direction76 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork3.DragByRay(point78, direction76)
    
    point79 = NXOpen.Point3d(0.0022834169106573654, 53.372924256353521, 30.000000000000071)
    direction77 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork3.DragByRay(point79, direction77)
    
    point80 = NXOpen.Point3d(0.0022834169106573654, 52.860424216406955, 30.000000000000071)
    direction78 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork3.DragByRay(point80, direction78)
    
    point81 = NXOpen.Point3d(0.0022834169106573654, 52.347924176460396, 30.000000000000071)
    direction79 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork3.DragByRay(point81, direction79)
    
    point82 = NXOpen.Point3d(0.0022834169106573654, 52.006257483162663, 29.829166653351209)
    direction80 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork3.DragByRay(point82, direction80)
    
    point83 = NXOpen.Point3d(0.0022834169106573654, 51.835424136513794, 29.829166653351209)
    direction81 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork3.DragByRay(point83, direction81)
    
    point84 = NXOpen.Point3d(0.0022834169106573654, 51.493757443216097, 29.829166653351209)
    direction82 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork3.DragByRay(point84, direction82)
    
    point85 = NXOpen.Point3d(0.0022834169106573654, 51.493757443216097, 29.658333306702357)
    direction83 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork3.DragByRay(point85, direction83)
    
    point86 = NXOpen.Point3d(0.0022834169106573654, 51.493757443216097, 29.658333306702357)
    direction84 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork3.DragByRay(point86, direction84)
    
    point87 = NXOpen.Point3d(0.0022834169106573654, 51.152090749918372, 29.658333306702357)
    direction85 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork3.DragByRay(point87, direction85)
    
    point88 = NXOpen.Point3d(0.0022834169106573654, 51.152090749918372, 29.658333306702357)
    direction86 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork3.DragByRay(point88, direction86)
    
    point89 = NXOpen.Point3d(0.0022834169106573654, 50.98125740326951, 29.658333306702357)
    direction87 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork3.DragByRay(point89, direction87)
    
    point90 = NXOpen.Point3d(0.0022834169106573654, 50.98125740326951, 29.658333306702357)
    direction88 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork3.DragByRay(point90, direction88)
    
    point91 = NXOpen.Point3d(0.0022834169106573654, 50.98125740326951, 29.658333306702357)
    direction89 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork3.DragByRay(point91, direction89)
    
    point92 = NXOpen.Point3d(0.0022834169106573654, 50.98125740326951, 29.658333306702357)
    direction90 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork3.DragByRay(point92, direction90)
    
    componentNetwork3.EndDrag()
    
    componentNetwork3.ResetDisplay()
    
    componentNetwork3.ApplyToModel()
    
    scaleAboutPoint1 = NXOpen.Point3d(66.368755173081553, 0.34166669329771437, 0.0)
    viewCenter1 = NXOpen.Point3d(-66.368755173081553, -0.34166669329771437, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(1.25, scaleAboutPoint1, viewCenter1)
    
    scaleAboutPoint2 = NXOpen.Point3d(53.095004138465228, 0.27333335463817143, 0.0)
    viewCenter2 = NXOpen.Point3d(-53.095004138465249, -0.27333335463817143, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(1.25, scaleAboutPoint2, viewCenter2)
    
    scaleAboutPoint3 = NXOpen.Point3d(16.673334632928608, -0.87466673484215784, 0.0)
    viewCenter3 = NXOpen.Point3d(-16.673334632928597, 0.87466673484215784, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(1.25, scaleAboutPoint3, viewCenter3)
    
    scaleAboutPoint4 = NXOpen.Point3d(12.98880101240602, -0.7872000613579303, 0.0)
    viewCenter4 = NXOpen.Point3d(-12.98880101240602, 0.78720006135794474, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(1.25, scaleAboutPoint4, viewCenter4)
    
    scaleAboutPoint5 = NXOpen.Point3d(10.321067471137454, -0.62976004908634431, 0.0)
    viewCenter5 = NXOpen.Point3d(-10.321067471137431, 0.62976004908635586, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(1.25, scaleAboutPoint5, viewCenter5)
    
    scaleAboutPoint6 = NXOpen.Point3d(8.2568539769099623, -0.50380803926907081, 0.0)
    viewCenter6 = NXOpen.Point3d(-8.2568539769099445, 0.50380803926908468, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(1.25, scaleAboutPoint6, viewCenter6)
    
    scaleAboutPoint7 = NXOpen.Point3d(6.60548318152797, -0.40304643141525665, 0.0)
    viewCenter7 = NXOpen.Point3d(-6.6054831815279478, 0.40304643141527147, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(1.25, scaleAboutPoint7, viewCenter7)
    
    scaleAboutPoint8 = NXOpen.Point3d(-4.9977757495492803, 0.78817968810096606, 0.0)
    viewCenter8 = NXOpen.Point3d(4.9977757495493096, -0.78817968810095418, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(1.25, scaleAboutPoint8, viewCenter8)
    
    scaleAboutPoint9 = NXOpen.Point3d(-4.1128649179086461, 0.48723835264423887, 0.0)
    viewCenter9 = NXOpen.Point3d(4.1128649179086789, -0.48723835264422466, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(1.25, scaleAboutPoint9, viewCenter9)
    
    scaleAboutPoint10 = NXOpen.Point3d(-3.6342248891346047, 0.22928863653846793, 0.0)
    viewCenter10 = NXOpen.Point3d(3.6342248891346465, -0.22928863653845657, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(1.25, scaleAboutPoint10, viewCenter10)
    
    markId20 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Visible, "Translate Along Z-axis")
    
    loaded9 = componentNetwork3.IsReferencedGeometryLoaded()
    
    componentNetwork3.BeginDrag()
    
    translation65 = NXOpen.Vector3d(0.0, 0.0, 0.30000000000000071)
    componentNetwork3.DragByTranslation(translation65)
    
    componentNetwork3.EndDrag()
    
    componentNetwork3.ResetDisplay()
    
    componentNetwork3.ApplyToModel()
    
    markId21 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "Add Component")
    
    theSession.DeleteUndoMark(markId21, None)
    
    markId22 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "Add Component")
    
    markId23 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "AddComponent on_apply")
    
    componentNetwork3.Solve()
    
    componentPositioner3.ClearNetwork()
    
    nErrs5 = theSession.UpdateManager.AddToDeleteList(componentNetwork3)
    
    nErrs6 = theSession.UpdateManager.DoUpdate(markId14)
    
    componentPositioner3.EndAssemblyConstraints()
    
    logicalobjects2 = addComponentBuilder2.GetLogicalObjectsHavingUnassignedRequiredAttributes()
    
    addComponentBuilder2.ComponentName = "CONNECT"
    
    nXObject3 = addComponentBuilder2.Commit()
    
    errorList2 = addComponentBuilder2.GetOperationFailures()
    
    errorList2.Dispose()
    theSession.DeleteUndoMark(markId22, None)
    
    theSession.SetUndoMarkName(markId13, "Add Component")
    
    addComponentBuilder2.Destroy()
    
    workPart.Points.DeletePoint(point3)
    
    componentPositioner3.PrimaryArrangement = NXOpen.Assemblies.Arrangement.Null
    
    theSession.DeleteUndoMark(markId14, None)
    
    theSession.DeleteUndoMark(markId20, None)
    
    theSession.DeleteUndoMark(markId19, None)
    
    theSession.DeleteUndoMark(markId18, None)
    
    theSession.DeleteUndoMark(markId17, None)
    
    theSession.DeleteUndoMark(markId16, None)
    
    theSession.DeleteUndoMark(markId15, None)
    
    scaleAboutPoint11 = NXOpen.Point3d(5.273638640384652, 2.3295725472307849, 0.0)
    viewCenter11 = NXOpen.Point3d(-5.2736386403846094, -2.3295725472307667, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(0.80000000000000004, scaleAboutPoint11, viewCenter11)
    
    scaleAboutPoint12 = NXOpen.Point3d(6.592048300480811, 2.911965684038476, 0.0)
    viewCenter12 = NXOpen.Point3d(-6.5920483004807693, -2.9119656840384645, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(0.80000000000000004, scaleAboutPoint12, viewCenter12)
    
    scaleAboutPoint13 = NXOpen.Point3d(8.2400603756010096, 3.6399571050480946, 0.0)
    viewCenter13 = NXOpen.Point3d(-8.2400603756009669, -3.6399571050480803, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(0.80000000000000004, scaleAboutPoint13, viewCenter13)
    
    scaleAboutPoint14 = NXOpen.Point3d(10.300075469501248, 4.5499463813101171, 0.0)
    viewCenter14 = NXOpen.Point3d(-10.300075469501213, -4.5499463813100993, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(0.80000000000000004, scaleAboutPoint14, viewCenter14)
    
    scaleAboutPoint15 = NXOpen.Point3d(12.875094336876574, 5.6874329766376412, 0.0)
    viewCenter15 = NXOpen.Point3d(-12.875094336876522, -5.6874329766376306, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(0.80000000000000004, scaleAboutPoint15, viewCenter15)
    
    # ----------------------------------------------
    #   Menu: Orient View->Isometric
    # ----------------------------------------------
    workPart.ModelingViews.WorkView.Orient(NXOpen.View.Canned.Isometric, NXOpen.View.ScaleAdjustment.Fit)
    
    # ----------------------------------------------
    #   Menu: Rendering Style->Shaded with Edges
    # ----------------------------------------------
    workPart.ModelingViews.WorkView.RenderingStyle = NXOpen.View.RenderingStyleType.ShadedWithEdges
    
    # ----------------------------------------------
    #   Menu: Assemblies->Components->Add Component...
    # ----------------------------------------------
    markId24 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Visible, "Start")
    
    addComponentBuilder3 = workPart.AssemblyManager.CreateAddComponentBuilder()
    
    componentPositioner4 = workPart.ComponentAssembly.Positioner
    
    componentPositioner4.ClearNetwork()
    
    componentPositioner4.PrimaryArrangement = arrangement1
    
    componentPositioner4.BeginAssemblyConstraints()
    
    allowInterpartPositioning3 = theSession.Preferences.Assemblies.InterpartPositioning
    
    expression17 = workPart.Expressions.CreateSystemExpressionWithUnits("1.0", NXOpen.Unit.Null)
    
    expression18 = workPart.Expressions.CreateSystemExpressionWithUnits("1.0", unit1)
    
    expression19 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit1)
    
    expression20 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit2)
    
    expression21 = workPart.Expressions.CreateSystemExpressionWithUnits("1", NXOpen.Unit.Null)
    
    expression22 = workPart.Expressions.CreateSystemExpressionWithUnits("1.0", unit1)
    
    expression23 = workPart.Expressions.CreateSystemExpressionWithUnits("0", unit1)
    
    expression24 = workPart.Expressions.CreateSystemExpressionWithUnits("0", unit2)
    
    network4 = componentPositioner4.EstablishNetwork()
    
    componentNetwork4 = network4
    componentNetwork4.MoveObjectsState = True
    
    componentNetwork4.DisplayComponent = NXOpen.Assemblies.Component.Null
    
    theSession.SetUndoMarkName(markId24, "Add Component Dialog")
    
    componentNetwork4.MoveObjectsState = True
    
    markId25 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "Assembly Constraints Update")
    
    addComponentBuilder3.SetComponentAnchor(NXOpen.Assemblies.ProductInterface.InterfaceObject.Null)
    
    addComponentBuilder3.SetInitialLocationType(NXOpen.Assemblies.AddComponentBuilder.LocationType.Snap)
    
    addComponentBuilder3.SetCount(1)
    
    addComponentBuilder3.SetScatterOption(True)
    
    addComponentBuilder3.ReferenceSet = "Unknown"
    
    addComponentBuilder3.Layer = -1
    
    basePart3, partLoadStatus3 = theSession.Parts.OpenBase(wheel_path)
    
    partLoadStatus3.Dispose()
    addComponentBuilder3.ReferenceSet = "Use Model"
    
    addComponentBuilder3.Layer = -1
    
    partstouse3 = [NXOpen.BasePart.Null] * 1 
    part3 = basePart3
    partstouse3[0] = part3
    addComponentBuilder3.SetPartsToAdd(partstouse3)
    
    productinterfaceobjects3 = addComponentBuilder3.GetAllProductInterfaceObjects()
    
    coordinates3 = NXOpen.Point3d(111.46397382523615, 70.580958943396197, 0.0)
    point93 = workPart.Points.CreatePoint(coordinates3)
    
    coordinates4 = NXOpen.Point3d(111.46397382523615, 70.580958943396197, 0.0)
    point94 = workPart.Points.CreatePoint(coordinates4)
    
    origin3 = NXOpen.Point3d(111.46397382523615, 70.580958943396197, 0.0)
    vector3 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    direction91 = workPart.Directions.CreateDirection(origin3, vector3, NXOpen.SmartObject.UpdateOption.WithinModeling)
    
    origin4 = NXOpen.Point3d(111.46397382523615, 70.580958943396197, 0.0)
    vector4 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    direction92 = workPart.Directions.CreateDirection(origin4, vector4, NXOpen.SmartObject.UpdateOption.WithinModeling)
    
    xform3 = workPart.Xforms.CreateXformByPointXDirZDir(point94, direction92, direction91, NXOpen.SmartObject.UpdateOption.WithinModeling, 0.625)
    
    cartesianCoordinateSystem3 = workPart.CoordinateSystems.CreateCoordinateSystem(xform3, NXOpen.SmartObject.UpdateOption.WithinModeling)
    
    point95 = NXOpen.Point3d(111.46397382523615, 70.580958943396197, 0.0)
    orientation3 = NXOpen.Matrix3x3()
    
    orientation3.Xx = 1.0
    orientation3.Xy = 0.0
    orientation3.Xz = 0.0
    orientation3.Yx = 0.0
    orientation3.Yy = 1.0
    orientation3.Yz = 0.0
    orientation3.Zx = 0.0
    orientation3.Zy = 0.0
    orientation3.Zz = 1.0
    addComponentBuilder3.SetInitialLocationAndOrientation(point95, orientation3)
    
    movableObjects3 = [NXOpen.NXObject.Null] * 1 
    component4 = workPart.ComponentAssembly.RootComponent.FindObject("COMPONENT wheel 1")
    movableObjects3[0] = component4
    componentNetwork4.SetMovingGroup(movableObjects3)
    
    markId26 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "Add Component")
    
    markId27 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "AddComponent on_apply")
    
    componentNetwork4.Solve()
    
    componentPositioner4.ClearNetwork()
    
    nErrs7 = theSession.UpdateManager.AddToDeleteList(componentNetwork4)
    
    nErrs8 = theSession.UpdateManager.DoUpdate(markId25)
    
    componentPositioner4.EndAssemblyConstraints()
    
    logicalobjects3 = addComponentBuilder3.GetLogicalObjectsHavingUnassignedRequiredAttributes()
    
    addComponentBuilder3.ComponentName = "WHEEL"
    
    nXObject4 = addComponentBuilder3.Commit()
    
    errorList3 = addComponentBuilder3.GetOperationFailures()
    
    errorList3.Dispose()
    theSession.DeleteUndoMark(markId26, None)
    
    theSession.SetUndoMarkName(markId24, "Add Component")
    
    addComponentBuilder3.Destroy()
    
    workPart.Points.DeletePoint(point93)
    
    componentPositioner4.PrimaryArrangement = NXOpen.Assemblies.Arrangement.Null
    
    theSession.DeleteUndoMark(markId25, None)
    
    markId28 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Visible, "Start")
    
    addComponentBuilder4 = workPart.AssemblyManager.CreateAddComponentBuilder()
    
    componentPositioner5 = workPart.ComponentAssembly.Positioner
    
    componentPositioner5.ClearNetwork()
    
    componentPositioner5.PrimaryArrangement = arrangement1
    
    componentPositioner5.BeginAssemblyConstraints()
    
    allowInterpartPositioning4 = theSession.Preferences.Assemblies.InterpartPositioning
    
    expression25 = workPart.Expressions.CreateSystemExpressionWithUnits("1.0", NXOpen.Unit.Null)
    
    expression26 = workPart.Expressions.CreateSystemExpressionWithUnits("1.0", unit1)
    
    expression27 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit1)
    
    expression28 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit2)
    
    expression29 = workPart.Expressions.CreateSystemExpressionWithUnits("1", NXOpen.Unit.Null)
    
    expression30 = workPart.Expressions.CreateSystemExpressionWithUnits("1.0", unit1)
    
    expression31 = workPart.Expressions.CreateSystemExpressionWithUnits("0", unit1)
    
    expression32 = workPart.Expressions.CreateSystemExpressionWithUnits("0", unit2)
    
    network5 = componentPositioner5.EstablishNetwork()
    
    componentNetwork5 = network5
    componentNetwork5.MoveObjectsState = True
    
    componentNetwork5.DisplayComponent = NXOpen.Assemblies.Component.Null
    
    theSession.SetUndoMarkName(markId28, "Add Component Dialog")
    
    componentNetwork5.MoveObjectsState = True
    
    markId29 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "Assembly Constraints Update")
    
    addComponentBuilder4.SetComponentAnchor(NXOpen.Assemblies.ProductInterface.InterfaceObject.Null)
    
    addComponentBuilder4.SetInitialLocationType(NXOpen.Assemblies.AddComponentBuilder.LocationType.Snap)
    
    addComponentBuilder4.SetCount(1)
    
    addComponentBuilder4.SetScatterOption(True)
    
    addComponentBuilder4.ReferenceSet = "Unknown"
    
    addComponentBuilder4.Layer = -1
    
    # ----------------------------------------------
    #   Dialog Begin Add Component
    # ----------------------------------------------
    addComponentBuilder4.ReferenceSet = "Use Model"
    
    addComponentBuilder4.Layer = -1
    
    partstouse4 = [NXOpen.BasePart.Null] * 1 
    partstouse4[0] = part3
    addComponentBuilder4.SetPartsToAdd(partstouse4)
    
    productinterfaceobjects4 = addComponentBuilder4.GetAllProductInterfaceObjects()
    
    coordinates5 = NXOpen.Point3d(110.72495285326332, -43.683389180361175, 0.0)
    point96 = workPart.Points.CreatePoint(coordinates5)
    
    coordinates6 = NXOpen.Point3d(110.72495285326332, -43.683389180361175, 0.0)
    point97 = workPart.Points.CreatePoint(coordinates6)
    
    origin5 = NXOpen.Point3d(110.72495285326332, -43.683389180361175, 0.0)
    vector5 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    direction93 = workPart.Directions.CreateDirection(origin5, vector5, NXOpen.SmartObject.UpdateOption.WithinModeling)
    
    origin6 = NXOpen.Point3d(110.72495285326332, -43.683389180361175, 0.0)
    vector6 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    direction94 = workPart.Directions.CreateDirection(origin6, vector6, NXOpen.SmartObject.UpdateOption.WithinModeling)
    
    xform4 = workPart.Xforms.CreateXformByPointXDirZDir(point97, direction94, direction93, NXOpen.SmartObject.UpdateOption.WithinModeling, 0.625)
    
    cartesianCoordinateSystem4 = workPart.CoordinateSystems.CreateCoordinateSystem(xform4, NXOpen.SmartObject.UpdateOption.WithinModeling)
    
    point98 = NXOpen.Point3d(110.72495285326332, -43.683389180361175, 0.0)
    orientation4 = NXOpen.Matrix3x3()
    
    orientation4.Xx = 1.0
    orientation4.Xy = 0.0
    orientation4.Xz = 0.0
    orientation4.Yx = 0.0
    orientation4.Yy = 1.0
    orientation4.Yz = 0.0
    orientation4.Zx = 0.0
    orientation4.Zy = 0.0
    orientation4.Zz = 1.0
    addComponentBuilder4.SetInitialLocationAndOrientation(point98, orientation4)
    
    movableObjects4 = [NXOpen.NXObject.Null] * 1 
    component5 = workPart.ComponentAssembly.RootComponent.FindObject("COMPONENT wheel 1")
    movableObjects4[0] = component5
    componentNetwork5.SetMovingGroup(movableObjects4)
    
    markId30 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "Add Component")
    
    markId31 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "AddComponent on_apply")
    
    componentNetwork5.Solve()
    
    componentPositioner5.ClearNetwork()
    
    nErrs9 = theSession.UpdateManager.AddToDeleteList(componentNetwork5)
    
    nErrs10 = theSession.UpdateManager.DoUpdate(markId29)
    
    componentPositioner5.EndAssemblyConstraints()
    
    logicalobjects4 = addComponentBuilder4.GetLogicalObjectsHavingUnassignedRequiredAttributes()
    
    addComponentBuilder4.ComponentName = "WHEEL"
    
    nXObject5 = addComponentBuilder4.Commit()
    
    errorList4 = addComponentBuilder4.GetOperationFailures()
    
    errorList4.Dispose()
    theSession.DeleteUndoMark(markId30, None)
    
    theSession.SetUndoMarkName(markId28, "Add Component")
    
    addComponentBuilder4.Destroy()
    
    workPart.Points.DeletePoint(point96)
    
    componentPositioner5.PrimaryArrangement = NXOpen.Assemblies.Arrangement.Null
    
    theSession.DeleteUndoMark(markId29, None)
    
    markId32 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Visible, "Start")
    
    addComponentBuilder5 = workPart.AssemblyManager.CreateAddComponentBuilder()
    
    componentPositioner6 = workPart.ComponentAssembly.Positioner
    
    componentPositioner6.ClearNetwork()
    
    componentPositioner6.PrimaryArrangement = arrangement1
    
    componentPositioner6.BeginAssemblyConstraints()
    
    allowInterpartPositioning5 = theSession.Preferences.Assemblies.InterpartPositioning
    
    expression33 = workPart.Expressions.CreateSystemExpressionWithUnits("1.0", NXOpen.Unit.Null)
    
    expression34 = workPart.Expressions.CreateSystemExpressionWithUnits("1.0", unit1)
    
    expression35 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit1)
    
    expression36 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit2)
    
    expression37 = workPart.Expressions.CreateSystemExpressionWithUnits("1", NXOpen.Unit.Null)
    
    expression38 = workPart.Expressions.CreateSystemExpressionWithUnits("1.0", unit1)
    
    expression39 = workPart.Expressions.CreateSystemExpressionWithUnits("0", unit1)
    
    expression40 = workPart.Expressions.CreateSystemExpressionWithUnits("0", unit2)
    
    network6 = componentPositioner6.EstablishNetwork()
    
    componentNetwork6 = network6
    componentNetwork6.MoveObjectsState = True
    
    componentNetwork6.DisplayComponent = NXOpen.Assemblies.Component.Null
    
    theSession.SetUndoMarkName(markId32, "Add Component Dialog")
    
    componentNetwork6.MoveObjectsState = True
    
    markId33 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "Assembly Constraints Update")
    
    addComponentBuilder5.SetComponentAnchor(NXOpen.Assemblies.ProductInterface.InterfaceObject.Null)
    
    addComponentBuilder5.SetInitialLocationType(NXOpen.Assemblies.AddComponentBuilder.LocationType.Snap)
    
    addComponentBuilder5.SetCount(1)
    
    addComponentBuilder5.SetScatterOption(True)
    
    addComponentBuilder5.ReferenceSet = "Unknown"
    
    addComponentBuilder5.Layer = -1
    
    # ----------------------------------------------
    #   Dialog Begin Add Component
    # ----------------------------------------------
    # ----------------------------------------------
    #   Menu: Orient View->Top
    # ----------------------------------------------
    workPart.ModelingViews.WorkView.Orient(NXOpen.View.Canned.Top, NXOpen.View.ScaleAdjustment.Fit)
    
    addComponentBuilder5.ReferenceSet = "Use Model"
    
    addComponentBuilder5.Layer = -1
    
    partstouse5 = [NXOpen.BasePart.Null] * 1 
    partstouse5[0] = part3
    addComponentBuilder5.SetPartsToAdd(partstouse5)
    
    productinterfaceobjects5 = addComponentBuilder5.GetAllProductInterfaceObjects()
    
    componentPositioner6.ClearNetwork()
    
    addComponentBuilder5.RemoveAddedComponents()
    
    addComponentBuilder5.Destroy()
    
    componentPositioner6.PrimaryArrangement = NXOpen.Assemblies.Arrangement.Null
    
    componentPositioner6.EndAssemblyConstraints()
    
    theSession.DeleteUndoMark(markId33, None)
    
    theSession.UndoToMark(markId32, None)
    
    theSession.DeleteUndoMark(markId32, None)
    
    # ----------------------------------------------
    #   Menu: Assemblies->Component Position->Move Component...
    # ----------------------------------------------
    markId34 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Visible, "Start")
    
    componentPositioner7 = workPart.ComponentAssembly.Positioner
    
    componentPositioner7.ClearNetwork()
    
    componentPositioner7.PrimaryArrangement = arrangement1
    
    componentPositioner7.BeginMoveComponent()
    
    allowInterpartPositioning6 = theSession.Preferences.Assemblies.InterpartPositioning
    
    expression41 = workPart.Expressions.CreateSystemExpressionWithUnits("1.0", NXOpen.Unit.Null)
    
    expression42 = workPart.Expressions.CreateSystemExpressionWithUnits("1.0", unit1)
    
    expression43 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit1)
    
    expression44 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit2)
    
    expression45 = workPart.Expressions.CreateSystemExpressionWithUnits("1", NXOpen.Unit.Null)
    
    expression46 = workPart.Expressions.CreateSystemExpressionWithUnits("1.0", unit1)
    
    expression47 = workPart.Expressions.CreateSystemExpressionWithUnits("0", unit1)
    
    expression48 = workPart.Expressions.CreateSystemExpressionWithUnits("0", unit2)
    
    network7 = componentPositioner7.EstablishNetwork()
    
    componentNetwork7 = network7
    componentNetwork7.MoveObjectsState = True
    
    componentNetwork7.DisplayComponent = NXOpen.Assemblies.Component.Null
    
    componentNetwork7.NetworkArrangementsMode = NXOpen.Positioning.ComponentNetwork.ArrangementsMode.Existing
    
    expression49 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit1)
    
    expression50 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit1)
    
    expression51 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit1)
    
    expression52 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit1)
    
    expression53 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit2)
    
    componentNetwork7.RemoveAllConstraints()
    
    movableObjects5 = [NXOpen.NXObject.Null] * 1 
    component6 = nXObject4
    movableObjects5[0] = component6
    componentNetwork7.SetMovingGroup(movableObjects5)
    
    componentNetwork7.Solve()
    
    theSession.SetUndoMarkName(markId34, "Move Component Dialog")
    
    componentNetwork7.MoveObjectsState = True
    
    componentNetwork7.NetworkArrangementsMode = NXOpen.Positioning.ComponentNetwork.ArrangementsMode.Existing
    
    markId35 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "Move Component Update")
    
    markId36 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Visible, "Transform Origin")
    
    loaded10 = componentNetwork7.IsReferencedGeometryLoaded()
    
    componentNetwork7.BeginDrag()
    
    point99 = NXOpen.Point3d(126.46397382523617, 70.580958943396183, 0.0)
    direction95 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork7.DragByRay(point99, direction95)
    
    point100 = NXOpen.Point3d(115.56557488351743, 70.107844534203196, 0.0)
    direction96 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork7.DragByRay(point100, direction96)
    
    point101 = NXOpen.Point3d(111.08993690234958, 70.107844534203196, 0.0)
    direction97 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork7.DragByRay(point101, direction97)
    
    point102 = NXOpen.Point3d(104.90929397597492, 70.107844534203196, 0.0)
    direction98 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork7.DragByRay(point102, direction98)
    
    point103 = NXOpen.Point3d(101.71240970371217, 70.107844534203196, 0.0)
    direction99 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork7.DragByRay(point103, direction99)
    
    point104 = NXOpen.Point3d(97.236771722544319, 70.747221388655745, 0.0)
    direction100 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork7.DragByRay(point104, direction100)
    
    point105 = NXOpen.Point3d(92.974259359527309, 71.386598243108295, 0.0)
    direction101 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork7.DragByRay(point105, direction101)
    
    point106 = NXOpen.Point3d(89.777375087264559, 71.812849479410005, 0.0)
    direction102 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork7.DragByRay(point106, direction102)
    
    point107 = NXOpen.Point3d(87.4329932876052, 72.025975097560845, 0.0)
    direction103 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork7.DragByRay(point107, direction103)
    
    point108 = NXOpen.Point3d(85.727988342398419, 72.452226333862541, 0.0)
    direction104 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork7.DragByRay(point108, direction104)
    
    point109 = NXOpen.Point3d(85.301737106096695, 72.452226333862541, 0.0)
    direction105 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork7.DragByRay(point109, direction105)
    
    point110 = NXOpen.Point3d(85.08861148794584, 72.452226333862541, 0.0)
    direction106 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork7.DragByRay(point110, direction106)
    
    point111 = NXOpen.Point3d(85.08861148794584, 72.452226333862541, 0.0)
    direction107 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork7.DragByRay(point111, direction107)
    
    point112 = NXOpen.Point3d(85.08861148794584, 72.665351952013395, 0.0)
    direction108 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork7.DragByRay(point112, direction108)
    
    point113 = NXOpen.Point3d(84.662360251644159, 72.665351952013395, 0.0)
    direction109 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork7.DragByRay(point113, direction109)
    
    point114 = NXOpen.Point3d(84.662360251644159, 72.87847757016425, 0.0)
    direction110 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork7.DragByRay(point114, direction110)
    
    point115 = NXOpen.Point3d(83.809857779040755, 73.517854424616786, 0.0)
    direction111 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork7.DragByRay(point115, direction111)
    
    point116 = NXOpen.Point3d(83.5967321608899, 73.730980042767655, 0.0)
    direction112 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork7.DragByRay(point116, direction112)
    
    point117 = NXOpen.Point3d(83.383606542739045, 73.944105660918495, 0.0)
    direction113 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork7.DragByRay(point117, direction113)
    
    point118 = NXOpen.Point3d(83.17048092458819, 73.944105660918495, 0.0)
    direction114 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork7.DragByRay(point118, direction114)
    
    point119 = NXOpen.Point3d(82.957355306437336, 74.15723127906935, 0.0)
    direction115 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork7.DragByRay(point119, direction115)
    
    point120 = NXOpen.Point3d(82.957355306437336, 74.15723127906935, 0.0)
    direction116 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork7.DragByRay(point120, direction116)
    
    point121 = NXOpen.Point3d(82.744229688286509, 74.15723127906935, 0.0)
    direction117 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork7.DragByRay(point121, direction117)
    
    point122 = NXOpen.Point3d(82.531104070135655, 74.15723127906935, 0.0)
    direction118 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork7.DragByRay(point122, direction118)
    
    point123 = NXOpen.Point3d(82.104852833833945, 74.15723127906935, 0.0)
    direction119 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork7.DragByRay(point123, direction119)
    
    point124 = NXOpen.Point3d(81.678601597532264, 74.15723127906935, 0.0)
    direction120 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork7.DragByRay(point124, direction120)
    
    point125 = NXOpen.Point3d(81.252350361230555, 74.15723127906935, 0.0)
    direction121 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork7.DragByRay(point125, direction121)
    
    point126 = NXOpen.Point3d(80.826099124928831, 74.15723127906935, 0.0)
    direction122 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork7.DragByRay(point126, direction122)
    
    point127 = NXOpen.Point3d(80.399847888627164, 74.15723127906935, 0.0)
    direction123 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork7.DragByRay(point127, direction123)
    
    point128 = NXOpen.Point3d(80.399847888627164, 74.15723127906935, 0.0)
    direction124 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork7.DragByRay(point128, direction124)
    
    point129 = NXOpen.Point3d(79.97359665232544, 74.15723127906935, 0.0)
    direction125 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork7.DragByRay(point129, direction125)
    
    point130 = NXOpen.Point3d(79.97359665232544, 74.15723127906935, 0.0)
    direction126 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork7.DragByRay(point130, direction126)
    
    point131 = NXOpen.Point3d(79.760471034174586, 74.15723127906935, 0.0)
    direction127 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork7.DragByRay(point131, direction127)
    
    point132 = NXOpen.Point3d(79.760471034174586, 74.15723127906935, 0.0)
    direction128 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork7.DragByRay(point132, direction128)
    
    point133 = NXOpen.Point3d(79.760471034174586, 74.15723127906935, 0.0)
    direction129 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork7.DragByRay(point133, direction129)
    
    point134 = NXOpen.Point3d(79.760471034174586, 74.15723127906935, 0.0)
    direction130 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork7.DragByRay(point134, direction130)
    
    componentNetwork7.EndDrag()
    
    componentNetwork7.ResetDisplay()
    
    componentNetwork7.ApplyToModel()
    
    markId37 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "Move Component")
    
    componentNetwork7.Solve()
    
    componentPositioner7.ClearNetwork()
    
    nErrs11 = theSession.UpdateManager.AddToDeleteList(componentNetwork7)
    
    componentPositioner7.DeleteNonPersistentConstraints()
    
    nErrs12 = theSession.UpdateManager.DoUpdate(markId35)
    
    theSession.DeleteUndoMark(markId37, None)
    
    theSession.SetUndoMarkName(markId34, "Move Component")
    
    componentPositioner7.EndMoveComponent()
    
    componentPositioner7.PrimaryArrangement = NXOpen.Assemblies.Arrangement.Null
    
    theSession.DeleteUndoMarksUpToMark(markId35, None, False)
    
    markId38 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Visible, "Start")
    
    componentPositioner8 = workPart.ComponentAssembly.Positioner
    
    componentPositioner8.ClearNetwork()
    
    componentPositioner8.PrimaryArrangement = arrangement1
    
    componentPositioner8.BeginMoveComponent()
    
    allowInterpartPositioning7 = theSession.Preferences.Assemblies.InterpartPositioning
    
    expression54 = workPart.Expressions.CreateSystemExpressionWithUnits("1.0", NXOpen.Unit.Null)
    
    expression55 = workPart.Expressions.CreateSystemExpressionWithUnits("1.0", unit1)
    
    expression56 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit1)
    
    expression57 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit2)
    
    expression58 = workPart.Expressions.CreateSystemExpressionWithUnits("1", NXOpen.Unit.Null)
    
    expression59 = workPart.Expressions.CreateSystemExpressionWithUnits("1.0", unit1)
    
    expression60 = workPart.Expressions.CreateSystemExpressionWithUnits("0", unit1)
    
    expression61 = workPart.Expressions.CreateSystemExpressionWithUnits("0", unit2)
    
    network8 = componentPositioner8.EstablishNetwork()
    
    componentNetwork8 = network8
    componentNetwork8.MoveObjectsState = True
    
    componentNetwork8.DisplayComponent = NXOpen.Assemblies.Component.Null
    
    componentNetwork8.NetworkArrangementsMode = NXOpen.Positioning.ComponentNetwork.ArrangementsMode.Existing
    
    expression62 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit1)
    
    expression63 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit1)
    
    expression64 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit1)
    
    expression65 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit1)
    
    expression66 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit2)
    
    componentNetwork8.RemoveAllConstraints()
    
    movableObjects6 = []
    componentNetwork8.SetMovingGroup(movableObjects6)
    
    componentNetwork8.Solve()
    
    theSession.SetUndoMarkName(markId38, "Move Component Dialog")
    
    componentNetwork8.MoveObjectsState = True
    
    componentNetwork8.NetworkArrangementsMode = NXOpen.Positioning.ComponentNetwork.ArrangementsMode.Existing
    
    markId39 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "Move Component Update")
    
    # ----------------------------------------------
    #   Dialog Begin Move Component
    # ----------------------------------------------
    componentNetwork8.RemoveAllConstraints()
    
    movableObjects7 = [NXOpen.NXObject.Null] * 1 
    component7 = nXObject5
    movableObjects7[0] = component7
    componentNetwork8.SetMovingGroup(movableObjects7)
    
    componentNetwork8.Solve()
    
    markId40 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Visible, "Transform Origin")
    
    loaded11 = componentNetwork8.IsReferencedGeometryLoaded()
    
    componentNetwork8.BeginDrag()
    
    point135 = NXOpen.Point3d(125.72495285326332, -43.683389180361175, 0.0)
    direction131 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork8.DragByRay(point135, direction131)
    
    point136 = NXOpen.Point3d(107.89305263008683, -34.963085214165922, 0.0)
    direction132 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork8.DragByRay(point136, direction132)
    
    point137 = NXOpen.Point3d(103.20428903076811, -34.749959596015067, 0.0)
    direction133 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork8.DragByRay(point137, direction133)
    
    point138 = NXOpen.Point3d(94.466138686583278, -34.749959596015067, 0.0)
    direction134 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork8.DragByRay(point138, direction134)
    
    point139 = NXOpen.Point3d(90.416751941717095, -34.963085214165922, 0.0)
    direction135 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork8.DragByRay(point139, direction135)
    
    point140 = NXOpen.Point3d(88.072370142057764, -35.389336450467617, 0.0)
    direction136 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork8.DragByRay(point140, direction136)
    
    point141 = NXOpen.Point3d(86.154239578700086, -35.815587686769319, 0.0)
    direction137 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork8.DragByRay(point141, direction137)
    
    point142 = NXOpen.Point3d(85.51486272424755, -36.028713304920174, 0.0)
    direction138 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork8.DragByRay(point142, direction138)
    
    point143 = NXOpen.Point3d(84.662360251644159, -36.028713304920174, 0.0)
    direction139 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork8.DragByRay(point143, direction139)
    
    point144 = NXOpen.Point3d(84.449234633493305, -36.241838923071029, 0.0)
    direction140 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork8.DragByRay(point144, direction140)
    
    point145 = NXOpen.Point3d(83.383606542739045, -36.881215777523565, 0.0)
    direction141 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork8.DragByRay(point145, direction141)
    
    point146 = NXOpen.Point3d(82.531104070135655, -37.733718250126977, 0.0)
    direction142 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork8.DragByRay(point146, direction142)
    
    point147 = NXOpen.Point3d(82.104852833833945, -38.373095104579512, 0.0)
    direction143 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork8.DragByRay(point147, direction143)
    
    point148 = NXOpen.Point3d(82.104852833833945, -38.586220722730374, 0.0)
    direction144 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork8.DragByRay(point148, direction144)
    
    point149 = NXOpen.Point3d(82.104852833833945, -38.586220722730374, 0.0)
    direction145 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork8.DragByRay(point149, direction145)
    
    point150 = NXOpen.Point3d(81.89172721568309, -38.586220722730374, 0.0)
    direction146 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork8.DragByRay(point150, direction146)
    
    point151 = NXOpen.Point3d(81.465475979381409, -38.586220722730374, 0.0)
    direction147 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork8.DragByRay(point151, direction147)
    
    point152 = NXOpen.Point3d(81.252350361230555, -38.586220722730374, 0.0)
    direction148 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork8.DragByRay(point152, direction148)
    
    point153 = NXOpen.Point3d(80.826099124928831, -38.586220722730374, 0.0)
    direction149 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork8.DragByRay(point153, direction149)
    
    point154 = NXOpen.Point3d(80.399847888627164, -38.586220722730374, 0.0)
    direction150 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork8.DragByRay(point154, direction150)
    
    point155 = NXOpen.Point3d(79.97359665232544, -39.012471959032069, 0.0)
    direction151 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork8.DragByRay(point155, direction151)
    
    point156 = NXOpen.Point3d(79.547345416023759, -39.225597577182924, 0.0)
    direction152 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork8.DragByRay(point156, direction152)
    
    point157 = NXOpen.Point3d(79.547345416023759, -39.438723195333765, 0.0)
    direction153 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork8.DragByRay(point157, direction153)
    
    point158 = NXOpen.Point3d(78.907968561571181, -39.438723195333765, 0.0)
    direction154 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork8.DragByRay(point158, direction154)
    
    point159 = NXOpen.Point3d(78.907968561571181, -39.438723195333765, 0.0)
    direction155 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork8.DragByRay(point159, direction155)
    
    point160 = NXOpen.Point3d(79.12109417972205, -39.438723195333765, 0.0)
    direction156 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork8.DragByRay(point160, direction156)
    
    point161 = NXOpen.Point3d(79.12109417972205, -39.438723195333765, 0.0)
    direction157 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork8.DragByRay(point161, direction157)
    
    point162 = NXOpen.Point3d(79.334219797872905, -39.438723195333765, 0.0)
    direction158 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork8.DragByRay(point162, direction158)
    
    point163 = NXOpen.Point3d(79.334219797872905, -39.438723195333765, 0.0)
    direction159 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork8.DragByRay(point163, direction159)
    
    point164 = NXOpen.Point3d(79.334219797872905, -39.438723195333765, 0.0)
    direction160 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork8.DragByRay(point164, direction160)
    
    point165 = NXOpen.Point3d(79.334219797872905, -39.438723195333765, 0.0)
    direction161 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork8.DragByRay(point165, direction161)
    
    componentNetwork8.EndDrag()
    
    componentNetwork8.ResetDisplay()
    
    componentNetwork8.ApplyToModel()
    
    markId41 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "Move Component")
    
    componentNetwork8.Solve()
    
    componentPositioner8.ClearNetwork()
    
    nErrs13 = theSession.UpdateManager.AddToDeleteList(componentNetwork8)
    
    componentPositioner8.DeleteNonPersistentConstraints()
    
    nErrs14 = theSession.UpdateManager.DoUpdate(markId39)
    
    theSession.DeleteUndoMark(markId41, None)
    
    theSession.SetUndoMarkName(markId38, "Move Component")
    
    componentPositioner8.EndMoveComponent()
    
    componentPositioner8.PrimaryArrangement = NXOpen.Assemblies.Arrangement.Null
    
    theSession.DeleteUndoMarksUpToMark(markId39, None, False)
    
    markId42 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Visible, "Start")
    
    componentPositioner9 = workPart.ComponentAssembly.Positioner
    
    componentPositioner9.ClearNetwork()
    
    componentPositioner9.PrimaryArrangement = arrangement1
    
    componentPositioner9.BeginMoveComponent()
    
    allowInterpartPositioning8 = theSession.Preferences.Assemblies.InterpartPositioning
    
    expression67 = workPart.Expressions.CreateSystemExpressionWithUnits("1.0", NXOpen.Unit.Null)
    
    expression68 = workPart.Expressions.CreateSystemExpressionWithUnits("1.0", unit1)
    
    expression69 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit1)
    
    expression70 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit2)
    
    expression71 = workPart.Expressions.CreateSystemExpressionWithUnits("1", NXOpen.Unit.Null)
    
    expression72 = workPart.Expressions.CreateSystemExpressionWithUnits("1.0", unit1)
    
    expression73 = workPart.Expressions.CreateSystemExpressionWithUnits("0", unit1)
    
    expression74 = workPart.Expressions.CreateSystemExpressionWithUnits("0", unit2)
    
    network9 = componentPositioner9.EstablishNetwork()
    
    componentNetwork9 = network9
    componentNetwork9.MoveObjectsState = True
    
    componentNetwork9.DisplayComponent = NXOpen.Assemblies.Component.Null
    
    componentNetwork9.NetworkArrangementsMode = NXOpen.Positioning.ComponentNetwork.ArrangementsMode.Existing
    
    expression75 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit1)
    
    expression76 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit1)
    
    expression77 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit1)
    
    expression78 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit1)
    
    expression79 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit2)
    
    componentNetwork9.RemoveAllConstraints()
    
    movableObjects8 = []
    componentNetwork9.SetMovingGroup(movableObjects8)
    
    componentNetwork9.Solve()
    
    theSession.SetUndoMarkName(markId42, "Move Component Dialog")
    
    componentNetwork9.MoveObjectsState = True
    
    componentNetwork9.NetworkArrangementsMode = NXOpen.Positioning.ComponentNetwork.ArrangementsMode.Existing
    
    markId43 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "Move Component Update")
    
    # ----------------------------------------------
    #   Dialog Begin Move Component
    # ----------------------------------------------
    # ----------------------------------------------
    #   Menu: Orient View->Right
    # ----------------------------------------------
    workPart.ModelingViews.WorkView.Orient(NXOpen.View.Canned.Right, NXOpen.View.ScaleAdjustment.Fit)
    
    # ----------------------------------------------
    #   Menu: Rendering Style->Partially Shaded
    # ----------------------------------------------
    workPart.ModelingViews.WorkView.RenderingStyle = NXOpen.View.RenderingStyleType.PartiallyShaded
    
    componentNetwork9.RemoveAllConstraints()
    
    movableObjects9 = [NXOpen.NXObject.Null] * 1 
    movableObjects9[0] = component7
    componentNetwork9.SetMovingGroup(movableObjects9)
    
    componentNetwork9.Solve()
    
    scaleAboutPoint16 = NXOpen.Point3d(29.297918950279257, 42.366669968916916, 0.0)
    viewCenter16 = NXOpen.Point3d(-29.297918950279257, -42.366669968916916, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(0.80000000000000004, scaleAboutPoint16, viewCenter16)
    
    scaleAboutPoint17 = NXOpen.Point3d(-35.554690271293715, -64.489588359944122, 0.0)
    viewCenter17 = NXOpen.Point3d(35.554690271293644, 64.489588359944094, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(1.25, scaleAboutPoint17, viewCenter17)
    
    scaleAboutPoint18 = NXOpen.Point3d(-28.443752217034977, -51.591670687955308, 0.0)
    viewCenter18 = NXOpen.Point3d(28.443752217034909, 51.591670687955293, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(1.25, scaleAboutPoint18, viewCenter18)
    
    scaleAboutPoint19 = NXOpen.Point3d(-22.755001773627981, -41.273336550364228, 0.0)
    viewCenter19 = NXOpen.Point3d(22.755001773627924, 41.273336550364228, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(1.25, scaleAboutPoint19, viewCenter19)
    
    markId44 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Visible, "Transform Origin")
    
    loaded12 = componentNetwork9.IsReferencedGeometryLoaded()
    
    componentNetwork9.BeginDrag()
    
    point166 = NXOpen.Point3d(79.33421979787289, -39.438723195333765, 0.0)
    direction162 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork9.DragByRay(point166, direction162)
    
    point167 = NXOpen.Point3d(79.33421979787289, -38.858583673338615, -6.7052528609736859)
    direction163 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork9.DragByRay(point167, direction163)
    
    point168 = NXOpen.Point3d(79.33421979787289, -38.858583673338615, -8.1265863050921858)
    direction164 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork9.DragByRay(point168, direction164)
    
    point169 = NXOpen.Point3d(79.33421979787289, -38.858583673338615, -10.313253142197579)
    direction165 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork9.DragByRay(point169, direction165)
    
    point170 = NXOpen.Point3d(79.33421979787289, -38.639916989628077, -12.499919979302959)
    direction166 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork9.DragByRay(point170, direction166)
    
    point171 = NXOpen.Point3d(79.33421979787289, -38.202583622207001, -14.467920132697811)
    direction167 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork9.DragByRay(point171, direction167)
    
    point172 = NXOpen.Point3d(79.33421979787289, -38.093250280351732, -16.217253602382126)
    direction168 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork9.DragByRay(point172, direction168)
    
    point173 = NXOpen.Point3d(79.33421979787289, -37.874583596641202, -17.310587020934822)
    direction169 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork9.DragByRay(point173, direction169)
    
    point174 = NXOpen.Point3d(79.33421979787289, -37.65591691293065, -18.950587148763862)
    direction170 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork9.DragByRay(point174, direction170)
    
    point175 = NXOpen.Point3d(79.33421979787289, -37.32791688736485, -20.809253960303444)
    direction171 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork9.DragByRay(point175, direction171)
    
    point176 = NXOpen.Point3d(79.33421979787289, -37.32791688736485, -21.683920695145599)
    direction172 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork9.DragByRay(point176, direction172)
    
    point177 = NXOpen.Point3d(79.33421979787289, -37.32791688736485, -22.449254088132484)
    direction173 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork9.DragByRay(point177, direction173)
    
    point178 = NXOpen.Point3d(79.33421979787289, -37.32791688736485, -23.214587481119366)
    direction174 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork9.DragByRay(point178, direction174)
    
    point179 = NXOpen.Point3d(79.33421979787289, -37.437250229220112, -23.433254164829904)
    direction175 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork9.DragByRay(point179, direction175)
    
    point180 = NXOpen.Point3d(79.33421979787289, -37.437250229220112, -23.54258750668518)
    direction176 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork9.DragByRay(point180, direction176)
    
    point181 = NXOpen.Point3d(79.33421979787289, -37.765250254785926, -23.54258750668518)
    direction177 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork9.DragByRay(point181, direction177)
    
    point182 = NXOpen.Point3d(79.33421979787289, -38.202583622207001, -23.761254190395714)
    direction178 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork9.DragByRay(point182, direction178)
    
    point183 = NXOpen.Point3d(79.33421979787289, -38.530583647772808, -23.870587532250987)
    direction179 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork9.DragByRay(point183, direction179)
    
    point184 = NXOpen.Point3d(79.33421979787289, -38.639916989628077, -23.979920874106252)
    direction180 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork9.DragByRay(point184, direction180)
    
    point185 = NXOpen.Point3d(79.33421979787289, -38.858583673338615, -24.198587557816786)
    direction181 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork9.DragByRay(point185, direction181)
    
    point186 = NXOpen.Point3d(79.33421979787289, -38.967917015193891, -24.307920899672062)
    direction182 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork9.DragByRay(point186, direction182)
    
    point187 = NXOpen.Point3d(79.33421979787289, -39.077250357049152, -24.417254241527335)
    direction183 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork9.DragByRay(point187, direction183)
    
    point188 = NXOpen.Point3d(79.33421979787289, -39.077250357049152, -24.417254241527335)
    direction184 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork9.DragByRay(point188, direction184)
    
    point189 = NXOpen.Point3d(79.33421979787289, -39.077250357049152, -24.5265875833826)
    direction185 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork9.DragByRay(point189, direction185)
    
    point190 = NXOpen.Point3d(79.33421979787289, -39.077250357049152, -24.5265875833826)
    direction186 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork9.DragByRay(point190, direction186)
    
    point191 = NXOpen.Point3d(79.33421979787289, -39.077250357049152, -24.635920925237873)
    direction187 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork9.DragByRay(point191, direction187)
    
    point192 = NXOpen.Point3d(79.33421979787289, -38.967917015193891, -24.745254267093138)
    direction188 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork9.DragByRay(point192, direction188)
    
    point193 = NXOpen.Point3d(79.33421979787289, -38.967917015193891, -24.745254267093138)
    direction189 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork9.DragByRay(point193, direction189)
    
    point194 = NXOpen.Point3d(79.33421979787289, -38.967917015193891, -24.854587608948407)
    direction190 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork9.DragByRay(point194, direction190)
    
    point195 = NXOpen.Point3d(79.33421979787289, -38.967917015193891, -24.854587608948407)
    direction191 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork9.DragByRay(point195, direction191)
    
    point196 = NXOpen.Point3d(79.33421979787289, -38.967917015193891, -24.854587608948407)
    direction192 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork9.DragByRay(point196, direction192)
    
    point197 = NXOpen.Point3d(79.33421979787289, -38.967917015193891, -24.854587608948407)
    direction193 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork9.DragByRay(point197, direction193)
    
    componentNetwork9.EndDrag()
    
    componentNetwork9.ResetDisplay()
    
    componentNetwork9.ApplyToModel()
    
    markId45 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "Move Component")
    
    componentNetwork9.Solve()
    
    componentPositioner9.ClearNetwork()
    
    nErrs15 = theSession.UpdateManager.AddToDeleteList(componentNetwork9)
    
    componentPositioner9.DeleteNonPersistentConstraints()
    
    nErrs16 = theSession.UpdateManager.DoUpdate(markId43)
    
    theSession.DeleteUndoMark(markId45, None)
    
    theSession.SetUndoMarkName(markId42, "Move Component")
    
    componentPositioner9.EndMoveComponent()
    
    componentPositioner9.PrimaryArrangement = NXOpen.Assemblies.Arrangement.Null
    
    theSession.DeleteUndoMarksUpToMark(markId43, None, False)
    
    markId46 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Visible, "Start")
    
    componentPositioner10 = workPart.ComponentAssembly.Positioner
    
    componentPositioner10.ClearNetwork()
    
    componentPositioner10.PrimaryArrangement = arrangement1
    
    componentPositioner10.BeginMoveComponent()
    
    allowInterpartPositioning9 = theSession.Preferences.Assemblies.InterpartPositioning
    
    expression80 = workPart.Expressions.CreateSystemExpressionWithUnits("1.0", NXOpen.Unit.Null)
    
    expression81 = workPart.Expressions.CreateSystemExpressionWithUnits("1.0", unit1)
    
    expression82 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit1)
    
    expression83 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit2)
    
    expression84 = workPart.Expressions.CreateSystemExpressionWithUnits("1", NXOpen.Unit.Null)
    
    expression85 = workPart.Expressions.CreateSystemExpressionWithUnits("1.0", unit1)
    
    expression86 = workPart.Expressions.CreateSystemExpressionWithUnits("0", unit1)
    
    expression87 = workPart.Expressions.CreateSystemExpressionWithUnits("0", unit2)
    
    network10 = componentPositioner10.EstablishNetwork()
    
    componentNetwork10 = network10
    componentNetwork10.MoveObjectsState = True
    
    componentNetwork10.DisplayComponent = NXOpen.Assemblies.Component.Null
    
    componentNetwork10.NetworkArrangementsMode = NXOpen.Positioning.ComponentNetwork.ArrangementsMode.Existing
    
    expression88 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit1)
    
    expression89 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit1)
    
    expression90 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit1)
    
    expression91 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit1)
    
    expression92 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit2)
    
    componentNetwork10.RemoveAllConstraints()
    
    movableObjects10 = []
    componentNetwork10.SetMovingGroup(movableObjects10)
    
    componentNetwork10.Solve()
    
    theSession.SetUndoMarkName(markId46, "Move Component Dialog")
    
    componentNetwork10.MoveObjectsState = True
    
    componentNetwork10.NetworkArrangementsMode = NXOpen.Positioning.ComponentNetwork.ArrangementsMode.Existing
    
    markId47 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "Move Component Update")
    
    scaleAboutPoint20 = NXOpen.Point3d(-68.278671988615812, -5.6853337764740202, 0.0)
    viewCenter20 = NXOpen.Point3d(68.278671988615741, 5.6853337764740113, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(0.80000000000000004, scaleAboutPoint20, viewCenter20)
    
    scaleAboutPoint21 = NXOpen.Point3d(-79.198339506410846, -9.9766674442933514, 0.0)
    viewCenter21 = NXOpen.Point3d(79.198339506410747, 9.9766674442933283, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(0.80000000000000004, scaleAboutPoint21, viewCenter21)
    
    scaleAboutPoint22 = NXOpen.Point3d(-98.997924383013554, -12.470834305366685, 0.0)
    viewCenter22 = NXOpen.Point3d(98.997924383013441, 12.470834305366672, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(0.80000000000000004, scaleAboutPoint22, viewCenter22)
    
    scaleAboutPoint23 = NXOpen.Point3d(94.70573654846082, -16.22916793164158, 0.0)
    viewCenter23 = NXOpen.Point3d(-94.705736548460962, 16.229167931641545, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(1.25, scaleAboutPoint23, viewCenter23)
    
    scaleAboutPoint24 = NXOpen.Point3d(75.764589238768636, -12.983334345313262, 0.0)
    viewCenter24 = NXOpen.Point3d(-75.76458923876875, 12.983334345313233, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(1.25, scaleAboutPoint24, viewCenter24)
    
    componentNetwork10.RemoveAllConstraints()
    
    movableObjects11 = [NXOpen.NXObject.Null] * 1 
    movableObjects11[0] = component6
    componentNetwork10.SetMovingGroup(movableObjects11)
    
    componentNetwork10.Solve()
    
    markId48 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Visible, "Transform Origin")
    
    loaded13 = componentNetwork10.IsReferencedGeometryLoaded()
    
    componentNetwork10.BeginDrag()
    
    point198 = NXOpen.Point3d(79.760471034174572, 74.157231279069393, 0.0)
    direction194 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork10.DragByRay(point198, direction194)
    
    point199 = NXOpen.Point3d(79.760471034174572, 77.805217086633306, -13.195211700163824)
    direction195 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork10.DragByRay(point199, direction195)
    
    point200 = NXOpen.Point3d(79.760471034174572, 78.078550441271474, -15.381878537269216)
    direction196 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork10.DragByRay(point200, direction196)
    
    point201 = NXOpen.Point3d(79.760471034174572, 78.488550473228742, -17.295212019736425)
    direction197 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork10.DragByRay(point201, direction197)
    
    point202 = NXOpen.Point3d(79.760471034174572, 78.76188382786691, -18.798545470246385)
    direction198 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork10.DragByRay(point202, direction198)
    
    point203 = NXOpen.Point3d(79.760471034174572, 79.308550537143262, -20.575212275394513)
    direction199 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork10.DragByRay(point203, direction199)
    
    point204 = NXOpen.Point3d(79.760471034174572, 79.718550569100515, -21.941879048585371)
    direction200 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork10.DragByRay(point204, direction200)
    
    point205 = NXOpen.Point3d(79.760471034174572, 80.265217278376866, -22.898545789818989)
    direction201 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork10.DragByRay(point205, direction201)
    
    point206 = NXOpen.Point3d(79.760471034174572, 80.538550633015035, -23.44521249909533)
    direction202 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork10.DragByRay(point206, direction202)
    
    point207 = NXOpen.Point3d(79.760471034174572, 80.675217310334133, -23.855212531052594)
    direction203 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork10.DragByRay(point207, direction203)
    
    point208 = NXOpen.Point3d(79.760471034174572, 80.811883987653218, -24.128545885690762)
    direction204 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork10.DragByRay(point208, direction204)
    
    point209 = NXOpen.Point3d(79.760471034174572, 80.811883987653218, -24.401879240328938)
    direction205 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork10.DragByRay(point209, direction205)
    
    point210 = NXOpen.Point3d(79.760471034174572, 80.811883987653218, -24.401879240328938)
    direction206 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork10.DragByRay(point210, direction206)
    
    point211 = NXOpen.Point3d(79.760471034174572, 80.811883987653218, -24.53854591764803)
    direction207 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork10.DragByRay(point211, direction207)
    
    point212 = NXOpen.Point3d(79.760471034174572, 80.811883987653218, -24.675212594967107)
    direction208 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork10.DragByRay(point212, direction208)
    
    point213 = NXOpen.Point3d(79.760471034174572, 80.948550664972302, -24.811879272286198)
    direction209 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork10.DragByRay(point213, direction209)
    
    point214 = NXOpen.Point3d(79.760471034174572, 80.948550664972302, -24.94854594960529)
    direction210 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork10.DragByRay(point214, direction210)
    
    point215 = NXOpen.Point3d(79.760471034174572, 80.948550664972302, -24.94854594960529)
    direction211 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork10.DragByRay(point215, direction211)
    
    point216 = NXOpen.Point3d(79.760471034174572, 80.948550664972302, -24.94854594960529)
    direction212 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork10.DragByRay(point216, direction212)
    
    point217 = NXOpen.Point3d(79.760471034174572, 80.948550664972302, -24.94854594960529)
    direction213 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork10.DragByRay(point217, direction213)
    
    componentNetwork10.EndDrag()
    
    componentNetwork10.ResetDisplay()
    
    componentNetwork10.ApplyToModel()
    
    markId49 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "Move Component")
    
    theSession.DeleteUndoMark(markId49, None)
    
    markId50 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "Move Component")
    
    componentNetwork10.Solve()
    
    componentPositioner10.ClearNetwork()
    
    nErrs17 = theSession.UpdateManager.AddToDeleteList(componentNetwork10)
    
    componentPositioner10.DeleteNonPersistentConstraints()
    
    nErrs18 = theSession.UpdateManager.DoUpdate(markId47)
    
    theSession.DeleteUndoMark(markId50, None)
    
    theSession.SetUndoMarkName(markId46, "Move Component")
    
    componentPositioner10.EndMoveComponent()
    
    componentPositioner10.PrimaryArrangement = NXOpen.Assemblies.Arrangement.Null
    
    theSession.DeleteUndoMarksUpToMark(markId47, None, False)
    
    # ----------------------------------------------
    #   Menu: Orient View->Isometric
    # ----------------------------------------------
    workPart.ModelingViews.WorkView.Orient(NXOpen.View.Canned.Isometric, NXOpen.View.ScaleAdjustment.Fit)
    
    # ----------------------------------------------
    #   Menu: Rendering Style->Shaded with Edges
    # ----------------------------------------------
    workPart.ModelingViews.WorkView.RenderingStyle = NXOpen.View.RenderingStyleType.ShadedWithEdges
    
    # ----------------------------------------------
    #   Menu: Assemblies->Components->Add Component...
    # ----------------------------------------------
    markId51 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Visible, "Start")
    
    addComponentBuilder6 = workPart.AssemblyManager.CreateAddComponentBuilder()
    
    componentPositioner11 = workPart.ComponentAssembly.Positioner
    
    componentPositioner11.ClearNetwork()
    
    componentPositioner11.PrimaryArrangement = arrangement1
    
    componentPositioner11.BeginAssemblyConstraints()
    
    allowInterpartPositioning10 = theSession.Preferences.Assemblies.InterpartPositioning
    
    expression93 = workPart.Expressions.CreateSystemExpressionWithUnits("1.0", NXOpen.Unit.Null)
    
    expression94 = workPart.Expressions.CreateSystemExpressionWithUnits("1.0", unit1)
    
    expression95 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit1)
    
    expression96 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit2)
    
    expression97 = workPart.Expressions.CreateSystemExpressionWithUnits("1", NXOpen.Unit.Null)
    
    expression98 = workPart.Expressions.CreateSystemExpressionWithUnits("1.0", unit1)
    
    expression99 = workPart.Expressions.CreateSystemExpressionWithUnits("0", unit1)
    
    expression100 = workPart.Expressions.CreateSystemExpressionWithUnits("0", unit2)
    
    network11 = componentPositioner11.EstablishNetwork()
    
    componentNetwork11 = network11
    componentNetwork11.MoveObjectsState = True
    
    componentNetwork11.DisplayComponent = NXOpen.Assemblies.Component.Null
    
    theSession.SetUndoMarkName(markId51, "Add Component Dialog")
    
    componentNetwork11.MoveObjectsState = True
    
    markId52 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "Assembly Constraints Update")
    
    addComponentBuilder6.SetComponentAnchor(NXOpen.Assemblies.ProductInterface.InterfaceObject.Null)
    
    addComponentBuilder6.SetInitialLocationType(NXOpen.Assemblies.AddComponentBuilder.LocationType.Snap)
    
    addComponentBuilder6.SetCount(1)
    
    addComponentBuilder6.SetScatterOption(True)
    
    addComponentBuilder6.ReferenceSet = "Unknown"
    
    addComponentBuilder6.Layer = -1
    
    addComponentBuilder6.ReferenceSet = "Use Model"
    
    addComponentBuilder6.Layer = -1
    
    partstouse6 = [NXOpen.BasePart.Null] * 1 
    partstouse6[0] = part3
    addComponentBuilder6.SetPartsToAdd(partstouse6)
    
    productinterfaceobjects6 = addComponentBuilder6.GetAllProductInterfaceObjects()
    
    coordinates7 = NXOpen.Point3d(-72.170151742984672, -88.703717354323203, 0.0)
    point218 = workPart.Points.CreatePoint(coordinates7)
    
    coordinates8 = NXOpen.Point3d(-72.170151742984672, -88.703717354323203, 0.0)
    point219 = workPart.Points.CreatePoint(coordinates8)
    
    origin7 = NXOpen.Point3d(-72.170151742984672, -88.703717354323203, 0.0)
    vector7 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    direction214 = workPart.Directions.CreateDirection(origin7, vector7, NXOpen.SmartObject.UpdateOption.WithinModeling)
    
    origin8 = NXOpen.Point3d(-72.170151742984672, -88.703717354323203, 0.0)
    vector8 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    direction215 = workPart.Directions.CreateDirection(origin8, vector8, NXOpen.SmartObject.UpdateOption.WithinModeling)
    
    xform5 = workPart.Xforms.CreateXformByPointXDirZDir(point219, direction215, direction214, NXOpen.SmartObject.UpdateOption.WithinModeling, 0.625)
    
    cartesianCoordinateSystem5 = workPart.CoordinateSystems.CreateCoordinateSystem(xform5, NXOpen.SmartObject.UpdateOption.WithinModeling)
    
    point220 = NXOpen.Point3d(-72.170151742984672, -88.703717354323203, 0.0)
    orientation5 = NXOpen.Matrix3x3()
    
    orientation5.Xx = 1.0
    orientation5.Xy = 0.0
    orientation5.Xz = 0.0
    orientation5.Yx = 0.0
    orientation5.Yy = 1.0
    orientation5.Yz = 0.0
    orientation5.Zx = 0.0
    orientation5.Zy = 0.0
    orientation5.Zz = 1.0
    addComponentBuilder6.SetInitialLocationAndOrientation(point220, orientation5)
    
    movableObjects12 = [NXOpen.NXObject.Null] * 1 
    component8 = workPart.ComponentAssembly.RootComponent.FindObject("COMPONENT wheel 1")
    movableObjects12[0] = component8
    componentNetwork11.SetMovingGroup(movableObjects12)
    
    markId53 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Visible, "Translate Along Y-axis")
    
    loaded14 = componentNetwork11.IsReferencedGeometryLoaded()
    
    componentNetwork11.BeginDrag()
    
    translation66 = NXOpen.Vector3d(0.0, 21.0, 0.0)
    componentNetwork11.DragByTranslation(translation66)
    
    translation67 = NXOpen.Vector3d(0.0, 23.0, 0.0)
    componentNetwork11.DragByTranslation(translation67)
    
    translation68 = NXOpen.Vector3d(0.0, 24.0, 0.0)
    componentNetwork11.DragByTranslation(translation68)
    
    translation69 = NXOpen.Vector3d(0.0, 25.0, 0.0)
    componentNetwork11.DragByTranslation(translation69)
    
    translation70 = NXOpen.Vector3d(0.0, 26.0, 0.0)
    componentNetwork11.DragByTranslation(translation70)
    
    translation71 = NXOpen.Vector3d(0.0, 27.0, 0.0)
    componentNetwork11.DragByTranslation(translation71)
    
    componentNetwork11.EndDrag()
    
    componentNetwork11.ResetDisplay()
    
    componentNetwork11.ApplyToModel()
    
    markId54 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Visible, "Translate Along Z-axis")
    
    loaded15 = componentNetwork11.IsReferencedGeometryLoaded()
    
    componentNetwork11.BeginDrag()
    
    translation72 = NXOpen.Vector3d(0.0, 0.0, -9.0)
    componentNetwork11.DragByTranslation(translation72)
    
    translation73 = NXOpen.Vector3d(0.0, 0.0, -10.0)
    componentNetwork11.DragByTranslation(translation73)
    
    translation74 = NXOpen.Vector3d(0.0, 0.0, -11.0)
    componentNetwork11.DragByTranslation(translation74)
    
    translation75 = NXOpen.Vector3d(0.0, 0.0, -13.0)
    componentNetwork11.DragByTranslation(translation75)
    
    translation76 = NXOpen.Vector3d(0.0, 0.0, -14.0)
    componentNetwork11.DragByTranslation(translation76)
    
    translation77 = NXOpen.Vector3d(0.0, 0.0, -15.0)
    componentNetwork11.DragByTranslation(translation77)
    
    translation78 = NXOpen.Vector3d(0.0, 0.0, -17.0)
    componentNetwork11.DragByTranslation(translation78)
    
    translation79 = NXOpen.Vector3d(0.0, 0.0, -18.0)
    componentNetwork11.DragByTranslation(translation79)
    
    translation80 = NXOpen.Vector3d(0.0, 0.0, -19.0)
    componentNetwork11.DragByTranslation(translation80)
    
    translation81 = NXOpen.Vector3d(0.0, 0.0, -24.0)
    componentNetwork11.DragByTranslation(translation81)
    
    translation82 = NXOpen.Vector3d(0.0, 0.0, -26.0)
    componentNetwork11.DragByTranslation(translation82)
    
    componentNetwork11.EndDrag()
    
    componentNetwork11.ResetDisplay()
    
    componentNetwork11.ApplyToModel()
    
    markId55 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Visible, "Translate Along X-axis")
    
    loaded16 = componentNetwork11.IsReferencedGeometryLoaded()
    
    componentNetwork11.BeginDrag()
    
    translation83 = NXOpen.Vector3d(-11.0, 0.0, 0.0)
    componentNetwork11.DragByTranslation(translation83)
    
    translation84 = NXOpen.Vector3d(-13.0, 0.0, 0.0)
    componentNetwork11.DragByTranslation(translation84)
    
    translation85 = NXOpen.Vector3d(-15.0, 0.0, 0.0)
    componentNetwork11.DragByTranslation(translation85)
    
    translation86 = NXOpen.Vector3d(-16.0, 0.0, 0.0)
    componentNetwork11.DragByTranslation(translation86)
    
    translation87 = NXOpen.Vector3d(-17.0, 0.0, 0.0)
    componentNetwork11.DragByTranslation(translation87)
    
    componentNetwork11.EndDrag()
    
    componentNetwork11.ResetDisplay()
    
    componentNetwork11.ApplyToModel()
    
    markId56 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "Add Component")
    
    markId57 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "AddComponent on_apply")
    
    componentNetwork11.Solve()
    
    componentPositioner11.ClearNetwork()
    
    nErrs19 = theSession.UpdateManager.AddToDeleteList(componentNetwork11)
    
    nErrs20 = theSession.UpdateManager.DoUpdate(markId52)
    
    componentPositioner11.EndAssemblyConstraints()
    
    logicalobjects5 = addComponentBuilder6.GetLogicalObjectsHavingUnassignedRequiredAttributes()
    
    addComponentBuilder6.ComponentName = "WHEEL"
    
    nXObject6 = addComponentBuilder6.Commit()
    
    errorList5 = addComponentBuilder6.GetOperationFailures()
    
    errorList5.Dispose()
    theSession.DeleteUndoMark(markId56, None)
    
    theSession.SetUndoMarkName(markId51, "Add Component")
    
    addComponentBuilder6.Destroy()
    
    workPart.Points.DeletePoint(point218)
    
    componentPositioner11.PrimaryArrangement = NXOpen.Assemblies.Arrangement.Null
    
    theSession.DeleteUndoMark(markId52, None)
    
    theSession.DeleteUndoMark(markId55, None)
    
    theSession.DeleteUndoMark(markId54, None)
    
    theSession.DeleteUndoMark(markId53, None)
    
    markId58 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Visible, "Start")
    
    addComponentBuilder7 = workPart.AssemblyManager.CreateAddComponentBuilder()
    
    componentPositioner12 = workPart.ComponentAssembly.Positioner
    
    componentPositioner12.ClearNetwork()
    
    componentPositioner12.PrimaryArrangement = arrangement1
    
    componentPositioner12.BeginAssemblyConstraints()
    
    allowInterpartPositioning11 = theSession.Preferences.Assemblies.InterpartPositioning
    
    expression101 = workPart.Expressions.CreateSystemExpressionWithUnits("1.0", NXOpen.Unit.Null)
    
    expression102 = workPart.Expressions.CreateSystemExpressionWithUnits("1.0", unit1)
    
    expression103 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit1)
    
    expression104 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit2)
    
    expression105 = workPart.Expressions.CreateSystemExpressionWithUnits("1", NXOpen.Unit.Null)
    
    expression106 = workPart.Expressions.CreateSystemExpressionWithUnits("1.0", unit1)
    
    expression107 = workPart.Expressions.CreateSystemExpressionWithUnits("0", unit1)
    
    expression108 = workPart.Expressions.CreateSystemExpressionWithUnits("0", unit2)
    
    network12 = componentPositioner12.EstablishNetwork()
    
    componentNetwork12 = network12
    componentNetwork12.MoveObjectsState = True
    
    componentNetwork12.DisplayComponent = NXOpen.Assemblies.Component.Null
    
    theSession.SetUndoMarkName(markId58, "Add Component Dialog")
    
    componentNetwork12.MoveObjectsState = True
    
    markId59 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "Assembly Constraints Update")
    
    addComponentBuilder7.SetComponentAnchor(NXOpen.Assemblies.ProductInterface.InterfaceObject.Null)
    
    addComponentBuilder7.SetInitialLocationType(NXOpen.Assemblies.AddComponentBuilder.LocationType.Snap)
    
    addComponentBuilder7.SetCount(1)
    
    addComponentBuilder7.SetScatterOption(True)
    
    addComponentBuilder7.ReferenceSet = "Unknown"
    
    addComponentBuilder7.Layer = -1
    
    # ----------------------------------------------
    #   Dialog Begin Add Component
    # ----------------------------------------------
    addComponentBuilder7.ReferenceSet = "Use Model"
    
    addComponentBuilder7.Layer = -1
    
    partstouse7 = [NXOpen.BasePart.Null] * 1 
    partstouse7[0] = part3
    addComponentBuilder7.SetPartsToAdd(partstouse7)
    
    productinterfaceobjects7 = addComponentBuilder7.GetAllProductInterfaceObjects()
    
    coordinates9 = NXOpen.Point3d(-121.86511284033051, -23.168748914891722, 0.0)
    point221 = workPart.Points.CreatePoint(coordinates9)
    
    coordinates10 = NXOpen.Point3d(-121.86511284033051, -23.168748914891722, 0.0)
    point222 = workPart.Points.CreatePoint(coordinates10)
    
    origin9 = NXOpen.Point3d(-121.86511284033051, -23.168748914891722, 0.0)
    vector9 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    direction216 = workPart.Directions.CreateDirection(origin9, vector9, NXOpen.SmartObject.UpdateOption.WithinModeling)
    
    origin10 = NXOpen.Point3d(-121.86511284033051, -23.168748914891722, 0.0)
    vector10 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    direction217 = workPart.Directions.CreateDirection(origin10, vector10, NXOpen.SmartObject.UpdateOption.WithinModeling)
    
    xform6 = workPart.Xforms.CreateXformByPointXDirZDir(point222, direction217, direction216, NXOpen.SmartObject.UpdateOption.WithinModeling, 0.625)
    
    cartesianCoordinateSystem6 = workPart.CoordinateSystems.CreateCoordinateSystem(xform6, NXOpen.SmartObject.UpdateOption.WithinModeling)
    
    point223 = NXOpen.Point3d(-121.86511284033051, -23.168748914891722, 0.0)
    orientation6 = NXOpen.Matrix3x3()
    
    orientation6.Xx = 1.0
    orientation6.Xy = 0.0
    orientation6.Xz = 0.0
    orientation6.Yx = 0.0
    orientation6.Yy = 1.0
    orientation6.Yz = 0.0
    orientation6.Zx = 0.0
    orientation6.Zy = 0.0
    orientation6.Zz = 1.0
    addComponentBuilder7.SetInitialLocationAndOrientation(point223, orientation6)
    
    movableObjects13 = [NXOpen.NXObject.Null] * 1 
    component9 = workPart.ComponentAssembly.RootComponent.FindObject("COMPONENT wheel 1")
    movableObjects13[0] = component9
    componentNetwork12.SetMovingGroup(movableObjects13)
    
    markId60 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Visible, "Translate Along Y-axis")
    
    loaded17 = componentNetwork12.IsReferencedGeometryLoaded()
    
    componentNetwork12.BeginDrag()
    
    translation88 = NXOpen.Vector3d(0.0, 30.0, 0.0)
    componentNetwork12.DragByTranslation(translation88)
    
    translation89 = NXOpen.Vector3d(0.0, 34.0, 0.0)
    componentNetwork12.DragByTranslation(translation89)
    
    translation90 = NXOpen.Vector3d(0.0, 39.0, 0.0)
    componentNetwork12.DragByTranslation(translation90)
    
    translation91 = NXOpen.Vector3d(0.0, 44.0, 0.0)
    componentNetwork12.DragByTranslation(translation91)
    
    translation92 = NXOpen.Vector3d(0.0, 50.0, 0.0)
    componentNetwork12.DragByTranslation(translation92)
    
    translation93 = NXOpen.Vector3d(0.0, 57.0, 0.0)
    componentNetwork12.DragByTranslation(translation93)
    
    translation94 = NXOpen.Vector3d(0.0, 64.0, 0.0)
    componentNetwork12.DragByTranslation(translation94)
    
    translation95 = NXOpen.Vector3d(0.0, 68.0, 0.0)
    componentNetwork12.DragByTranslation(translation95)
    
    translation96 = NXOpen.Vector3d(0.0, 74.0, 0.0)
    componentNetwork12.DragByTranslation(translation96)
    
    translation97 = NXOpen.Vector3d(0.0, 79.0, 0.0)
    componentNetwork12.DragByTranslation(translation97)
    
    translation98 = NXOpen.Vector3d(0.0, 83.0, 0.0)
    componentNetwork12.DragByTranslation(translation98)
    
    translation99 = NXOpen.Vector3d(0.0, 86.0, 0.0)
    componentNetwork12.DragByTranslation(translation99)
    
    translation100 = NXOpen.Vector3d(0.0, 89.0, 0.0)
    componentNetwork12.DragByTranslation(translation100)
    
    translation101 = NXOpen.Vector3d(0.0, 95.0, 0.0)
    componentNetwork12.DragByTranslation(translation101)
    
    translation102 = NXOpen.Vector3d(0.0, 98.0, 0.0)
    componentNetwork12.DragByTranslation(translation102)
    
    translation103 = NXOpen.Vector3d(0.0, 99.0, 0.0)
    componentNetwork12.DragByTranslation(translation103)
    
    translation104 = NXOpen.Vector3d(0.0, 102.0, 0.0)
    componentNetwork12.DragByTranslation(translation104)
    
    translation105 = NXOpen.Vector3d(0.0, 105.0, 0.0)
    componentNetwork12.DragByTranslation(translation105)
    
    translation106 = NXOpen.Vector3d(0.0, 107.0, 0.0)
    componentNetwork12.DragByTranslation(translation106)
    
    translation107 = NXOpen.Vector3d(0.0, 108.0, 0.0)
    componentNetwork12.DragByTranslation(translation107)
    
    translation108 = NXOpen.Vector3d(0.0, 110.0, 0.0)
    componentNetwork12.DragByTranslation(translation108)
    
    translation109 = NXOpen.Vector3d(0.0, 111.0, 0.0)
    componentNetwork12.DragByTranslation(translation109)
    
    translation110 = NXOpen.Vector3d(0.0, 112.0, 0.0)
    componentNetwork12.DragByTranslation(translation110)
    
    translation111 = NXOpen.Vector3d(0.0, 113.0, 0.0)
    componentNetwork12.DragByTranslation(translation111)
    
    translation112 = NXOpen.Vector3d(0.0, 114.0, 0.0)
    componentNetwork12.DragByTranslation(translation112)
    
    componentNetwork12.EndDrag()
    
    componentNetwork12.ResetDisplay()
    
    componentNetwork12.ApplyToModel()
    
    markId61 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Visible, "Translate Along Z-axis")
    
    loaded18 = componentNetwork12.IsReferencedGeometryLoaded()
    
    componentNetwork12.BeginDrag()
    
    translation113 = NXOpen.Vector3d(0.0, 0.0, -7.0)
    componentNetwork12.DragByTranslation(translation113)
    
    translation114 = NXOpen.Vector3d(0.0, 0.0, -8.0)
    componentNetwork12.DragByTranslation(translation114)
    
    translation115 = NXOpen.Vector3d(0.0, 0.0, -9.0)
    componentNetwork12.DragByTranslation(translation115)
    
    translation116 = NXOpen.Vector3d(0.0, 0.0, -10.0)
    componentNetwork12.DragByTranslation(translation116)
    
    translation117 = NXOpen.Vector3d(0.0, 0.0, -12.0)
    componentNetwork12.DragByTranslation(translation117)
    
    componentNetwork12.EndDrag()
    
    componentNetwork12.ResetDisplay()
    
    componentNetwork12.ApplyToModel()
    
    # ----------------------------------------------
    #   Menu: Orient View->Top
    # ----------------------------------------------
    workPart.ModelingViews.WorkView.Orient(NXOpen.View.Canned.Top, NXOpen.View.ScaleAdjustment.Fit)
    
    markId62 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Visible, "Transform Origin")
    
    loaded19 = componentNetwork12.IsReferencedGeometryLoaded()
    
    componentNetwork12.BeginDrag()
    
    point224 = NXOpen.Point3d(-106.86511284033051, 90.831251085108278, -12.0)
    direction218 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork12.DragByRay(point224, direction218)
    
    point225 = NXOpen.Point3d(-95.911344430937277, 81.467073329958623, -12.0)
    direction219 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork12.DragByRay(point225, direction219)
    
    point226 = NXOpen.Point3d(-90.448059288127368, 79.828087787115649, -12.0)
    direction220 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork12.DragByRay(point226, direction220)
    
    point227 = NXOpen.Point3d(-89.082238002424887, 79.828087787115649, -12.0)
    direction221 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork12.DragByRay(point227, direction221)
    
    point228 = NXOpen.Point3d(-88.262745231003393, 79.554923529975156, -12.0)
    direction222 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork12.DragByRay(point228, direction222)
    
    point229 = NXOpen.Point3d(-87.17008820244142, 79.008595015694169, -12.0)
    direction223 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork12.DragByRay(point229, direction223)
    
    point230 = NXOpen.Point3d(-86.35059543101994, 79.008595015694169, -12.0)
    direction224 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork12.DragByRay(point230, direction224)
    
    point231 = NXOpen.Point3d(-86.35059543101994, 79.008595015694169, -12.0)
    direction225 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork12.DragByRay(point231, direction225)
    
    point232 = NXOpen.Point3d(-86.077431173879432, 79.008595015694169, -12.0)
    direction226 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork12.DragByRay(point232, direction226)
    
    point233 = NXOpen.Point3d(-85.531102659598446, 79.008595015694169, -12.0)
    direction227 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork12.DragByRay(point233, direction227)
    
    point234 = NXOpen.Point3d(-85.257938402457967, 79.008595015694169, -12.0)
    direction228 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork12.DragByRay(point234, direction228)
    
    point235 = NXOpen.Point3d(-84.165281373895965, 79.281759272834648, -12.0)
    direction229 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork12.DragByRay(point235, direction229)
    
    point236 = NXOpen.Point3d(-83.345788602474471, 79.828087787115649, -12.0)
    direction230 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork12.DragByRay(point236, direction230)
    
    point237 = NXOpen.Point3d(-82.799460088193484, 80.374416301396636, -12.0)
    direction231 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork12.DragByRay(point237, direction231)
    
    point238 = NXOpen.Point3d(-82.526295831053005, 80.647580558537129, -12.0)
    direction232 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork12.DragByRay(point238, direction232)
    
    point239 = NXOpen.Point3d(-82.253131573912512, 81.193909072818116, -12.0)
    direction233 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork12.DragByRay(point239, direction233)
    
    point240 = NXOpen.Point3d(-81.979967316772004, 81.193909072818116, -12.0)
    direction234 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork12.DragByRay(point240, direction234)
    
    point241 = NXOpen.Point3d(-81.979967316772004, 81.193909072818116, -12.0)
    direction235 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork12.DragByRay(point241, direction235)
    
    point242 = NXOpen.Point3d(-81.979967316772004, 81.740237587099102, -12.0)
    direction236 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork12.DragByRay(point242, direction236)
    
    point243 = NXOpen.Point3d(-81.979967316772004, 82.01340184423961, -12.0)
    direction237 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork12.DragByRay(point243, direction237)
    
    point244 = NXOpen.Point3d(-81.979967316772004, 82.01340184423961, -12.0)
    direction238 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork12.DragByRay(point244, direction238)
    
    point245 = NXOpen.Point3d(-81.706803059631525, 82.286566101380117, -12.0)
    direction239 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork12.DragByRay(point245, direction239)
    
    point246 = NXOpen.Point3d(-81.706803059631525, 82.286566101380117, -12.0)
    direction240 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork12.DragByRay(point246, direction240)
    
    point247 = NXOpen.Point3d(-81.706803059631525, 82.559730358520596, -12.0)
    direction241 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork12.DragByRay(point247, direction241)
    
    point248 = NXOpen.Point3d(-81.433638802491018, 82.832894615661104, -12.0)
    direction242 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork12.DragByRay(point248, direction242)
    
    point249 = NXOpen.Point3d(-81.160474545350539, 82.832894615661104, -12.0)
    direction243 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork12.DragByRay(point249, direction243)
    
    point250 = NXOpen.Point3d(-80.887310288210031, 83.106058872801583, -12.0)
    direction244 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork12.DragByRay(point250, direction244)
    
    point251 = NXOpen.Point3d(-80.887310288210031, 83.106058872801583, -12.0)
    direction245 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork12.DragByRay(point251, direction245)
    
    point252 = NXOpen.Point3d(-80.340981773929045, 83.652387387082584, -12.0)
    direction246 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork12.DragByRay(point252, direction246)
    
    point253 = NXOpen.Point3d(-80.340981773929045, 83.652387387082584, -12.0)
    direction247 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork12.DragByRay(point253, direction247)
    
    point254 = NXOpen.Point3d(-80.067817516788537, 83.652387387082584, -12.0)
    direction248 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork12.DragByRay(point254, direction248)
    
    point255 = NXOpen.Point3d(-80.067817516788537, 83.652387387082584, -12.0)
    direction249 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork12.DragByRay(point255, direction249)
    
    point256 = NXOpen.Point3d(-80.067817516788537, 83.652387387082584, -12.0)
    direction250 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork12.DragByRay(point256, direction250)
    
    point257 = NXOpen.Point3d(-80.067817516788537, 83.652387387082584, -12.0)
    direction251 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork12.DragByRay(point257, direction251)
    
    componentNetwork12.EndDrag()
    
    componentNetwork12.ResetDisplay()
    
    componentNetwork12.ApplyToModel()
    
    markId63 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "Add Component")
    
    markId64 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "AddComponent on_apply")
    
    componentNetwork12.Solve()
    
    componentPositioner12.ClearNetwork()
    
    nErrs21 = theSession.UpdateManager.AddToDeleteList(componentNetwork12)
    
    nErrs22 = theSession.UpdateManager.DoUpdate(markId59)
    
    componentPositioner12.EndAssemblyConstraints()
    
    logicalobjects6 = addComponentBuilder7.GetLogicalObjectsHavingUnassignedRequiredAttributes()
    
    addComponentBuilder7.ComponentName = "WHEEL"
    
    nXObject7 = addComponentBuilder7.Commit()
    
    errorList6 = addComponentBuilder7.GetOperationFailures()
    
    errorList6.Dispose()
    theSession.DeleteUndoMark(markId63, None)
    
    theSession.SetUndoMarkName(markId58, "Add Component")
    
    addComponentBuilder7.Destroy()
    
    workPart.Points.DeletePoint(point221)
    
    componentPositioner12.PrimaryArrangement = NXOpen.Assemblies.Arrangement.Null
    
    theSession.DeleteUndoMark(markId59, None)
    
    theSession.DeleteUndoMark(markId62, None)
    
    theSession.DeleteUndoMark(markId61, None)
    
    theSession.DeleteUndoMark(markId60, None)
    
    markId65 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Visible, "Start")
    
    addComponentBuilder8 = workPart.AssemblyManager.CreateAddComponentBuilder()
    
    componentPositioner13 = workPart.ComponentAssembly.Positioner
    
    componentPositioner13.ClearNetwork()
    
    componentPositioner13.PrimaryArrangement = arrangement1
    
    componentPositioner13.BeginAssemblyConstraints()
    
    allowInterpartPositioning12 = theSession.Preferences.Assemblies.InterpartPositioning
    
    expression109 = workPart.Expressions.CreateSystemExpressionWithUnits("1.0", NXOpen.Unit.Null)
    
    expression110 = workPart.Expressions.CreateSystemExpressionWithUnits("1.0", unit1)
    
    expression111 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit1)
    
    expression112 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit2)
    
    expression113 = workPart.Expressions.CreateSystemExpressionWithUnits("1", NXOpen.Unit.Null)
    
    expression114 = workPart.Expressions.CreateSystemExpressionWithUnits("1.0", unit1)
    
    expression115 = workPart.Expressions.CreateSystemExpressionWithUnits("0", unit1)
    
    expression116 = workPart.Expressions.CreateSystemExpressionWithUnits("0", unit2)
    
    network13 = componentPositioner13.EstablishNetwork()
    
    componentNetwork13 = network13
    componentNetwork13.MoveObjectsState = True
    
    componentNetwork13.DisplayComponent = NXOpen.Assemblies.Component.Null
    
    theSession.SetUndoMarkName(markId65, "Add Component Dialog")
    
    componentNetwork13.MoveObjectsState = True
    
    markId66 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "Assembly Constraints Update")
    
    addComponentBuilder8.SetComponentAnchor(NXOpen.Assemblies.ProductInterface.InterfaceObject.Null)
    
    addComponentBuilder8.SetInitialLocationType(NXOpen.Assemblies.AddComponentBuilder.LocationType.Snap)
    
    addComponentBuilder8.SetCount(1)
    
    addComponentBuilder8.SetScatterOption(True)
    
    addComponentBuilder8.ReferenceSet = "Unknown"
    
    addComponentBuilder8.Layer = -1
    
    addComponentBuilder8.ReferenceSet = "Use Model"
    
    addComponentBuilder8.Layer = -1
    
    partstouse8 = [NXOpen.BasePart.Null] * 1 
    partstouse8[0] = part3
    addComponentBuilder8.SetPartsToAdd(partstouse8)
    
    productinterfaceobjects8 = addComponentBuilder8.GetAllProductInterfaceObjects()
    
    componentPositioner13.ClearNetwork()
    
    addComponentBuilder8.RemoveAddedComponents()
    
    addComponentBuilder8.Destroy()
    
    componentPositioner13.PrimaryArrangement = NXOpen.Assemblies.Arrangement.Null
    
    componentPositioner13.EndAssemblyConstraints()
    
    theSession.DeleteUndoMark(markId66, None)
    
    theSession.UndoToMark(markId65, None)
    
    theSession.DeleteUndoMark(markId65, None)
    
    # ----------------------------------------------
    #   Menu: Assemblies->Component Position->Move Component...
    # ----------------------------------------------
    markId67 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Visible, "Start")
    
    componentPositioner14 = workPart.ComponentAssembly.Positioner
    
    componentPositioner14.ClearNetwork()
    
    componentPositioner14.PrimaryArrangement = arrangement1
    
    componentPositioner14.BeginMoveComponent()
    
    allowInterpartPositioning13 = theSession.Preferences.Assemblies.InterpartPositioning
    
    expression117 = workPart.Expressions.CreateSystemExpressionWithUnits("1.0", NXOpen.Unit.Null)
    
    expression118 = workPart.Expressions.CreateSystemExpressionWithUnits("1.0", unit1)
    
    expression119 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit1)
    
    expression120 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit2)
    
    expression121 = workPart.Expressions.CreateSystemExpressionWithUnits("1", NXOpen.Unit.Null)
    
    expression122 = workPart.Expressions.CreateSystemExpressionWithUnits("1.0", unit1)
    
    expression123 = workPart.Expressions.CreateSystemExpressionWithUnits("0", unit1)
    
    expression124 = workPart.Expressions.CreateSystemExpressionWithUnits("0", unit2)
    
    network14 = componentPositioner14.EstablishNetwork()
    
    componentNetwork14 = network14
    componentNetwork14.MoveObjectsState = True
    
    componentNetwork14.DisplayComponent = NXOpen.Assemblies.Component.Null
    
    componentNetwork14.NetworkArrangementsMode = NXOpen.Positioning.ComponentNetwork.ArrangementsMode.Existing
    
    expression125 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit1)
    
    expression126 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit1)
    
    expression127 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit1)
    
    expression128 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit1)
    
    expression129 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit2)
    
    componentNetwork14.RemoveAllConstraints()
    
    movableObjects14 = []
    componentNetwork14.SetMovingGroup(movableObjects14)
    
    componentNetwork14.Solve()
    
    theSession.SetUndoMarkName(markId67, "Move Component Dialog")
    
    componentNetwork14.MoveObjectsState = True
    
    componentNetwork14.NetworkArrangementsMode = NXOpen.Positioning.ComponentNetwork.ArrangementsMode.Existing
    
    markId68 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "Move Component Update")
    
    componentNetwork14.RemoveAllConstraints()
    
    movableObjects15 = [NXOpen.NXObject.Null] * 1 
    component10 = nXObject6
    movableObjects15[0] = component10
    componentNetwork14.SetMovingGroup(movableObjects15)
    
    componentNetwork14.Solve()
    
    markId69 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Visible, "Transform Origin")
    
    loaded20 = componentNetwork14.IsReferencedGeometryLoaded()
    
    componentNetwork14.BeginDrag()
    
    point258 = NXOpen.Point3d(-74.170151742984672, -61.703717354323196, -26.000000000000004)
    direction252 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork14.DragByRay(point258, direction252)
    
    point259 = NXOpen.Point3d(-76.516682173962096, -57.300369297412971, -26.0)
    direction253 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork14.DragByRay(point259, direction253)
    
    point260 = NXOpen.Point3d(-77.609339202524083, -55.661383754569997, -26.0)
    direction254 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork14.DragByRay(point260, direction254)
    
    point261 = NXOpen.Point3d(-78.975160488226564, -52.383412668884048, -26.0)
    direction255 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork14.DragByRay(point261, direction255)
    
    point262 = NXOpen.Point3d(-80.887310288210031, -48.832277326057607, -26.0)
    direction256 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork14.DragByRay(point262, direction256)
    
    point263 = NXOpen.Point3d(-81.979967316772004, -46.10063475465266, -26.0)
    direction257 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork14.DragByRay(point263, direction257)
    
    point264 = NXOpen.Point3d(-82.253131573912512, -44.734813468950179, -26.0)
    direction258 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork14.DragByRay(point264, direction258)
    
    point265 = NXOpen.Point3d(-83.072624345333992, -43.095827926107219, -26.0)
    direction259 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork14.DragByRay(point265, direction259)
    
    point266 = NXOpen.Point3d(-83.345788602474471, -42.549499411826211, -26.0)
    direction260 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork14.DragByRay(point266, direction260)
    
    point267 = NXOpen.Point3d(-83.345788602474471, -42.003170897545225, -26.0)
    direction261 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork14.DragByRay(point267, direction261)
    
    point268 = NXOpen.Point3d(-83.345788602474471, -41.730006640404746, -26.0)
    direction262 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork14.DragByRay(point268, direction262)
    
    point269 = NXOpen.Point3d(-81.433638802491018, -41.730006640404746, -26.0)
    direction263 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork14.DragByRay(point269, direction263)
    
    point270 = NXOpen.Point3d(-80.614146031069524, -41.730006640404746, -26.0)
    direction264 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork14.DragByRay(point270, direction264)
    
    point271 = NXOpen.Point3d(-80.614146031069524, -41.730006640404746, -26.0)
    direction265 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork14.DragByRay(point271, direction265)
    
    point272 = NXOpen.Point3d(-80.340981773929045, -41.730006640404746, -26.0)
    direction266 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork14.DragByRay(point272, direction266)
    
    point273 = NXOpen.Point3d(-80.067817516788537, -42.003170897545225, -26.0)
    direction267 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork14.DragByRay(point273, direction267)
    
    point274 = NXOpen.Point3d(-79.794653259648058, -42.822663668966719, -26.0)
    direction268 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork14.DragByRay(point274, direction268)
    
    point275 = NXOpen.Point3d(-79.52148900250755, -43.095827926107219, -26.0)
    direction269 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork14.DragByRay(point275, direction269)
    
    point276 = NXOpen.Point3d(-79.52148900250755, -43.095827926107219, -26.0)
    direction270 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork14.DragByRay(point276, direction270)
    
    point277 = NXOpen.Point3d(-79.52148900250755, -43.368992183247705, -26.0)
    direction271 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork14.DragByRay(point277, direction271)
    
    point278 = NXOpen.Point3d(-79.52148900250755, -43.368992183247705, -26.0)
    direction272 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork14.DragByRay(point278, direction272)
    
    point279 = NXOpen.Point3d(-79.52148900250755, -43.642156440388206, -26.0)
    direction273 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork14.DragByRay(point279, direction273)
    
    point280 = NXOpen.Point3d(-79.794653259648058, -43.642156440388206, -26.0)
    direction274 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork14.DragByRay(point280, direction274)
    
    point281 = NXOpen.Point3d(-79.794653259648058, -43.915320697528692, -26.0)
    direction275 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork14.DragByRay(point281, direction275)
    
    point282 = NXOpen.Point3d(-80.340981773929045, -43.915320697528692, -26.0)
    direction276 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork14.DragByRay(point282, direction276)
    
    point283 = NXOpen.Point3d(-80.340981773929045, -43.915320697528692, -26.0)
    direction277 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork14.DragByRay(point283, direction277)
    
    point284 = NXOpen.Point3d(-80.340981773929045, -44.188484954669192, -26.0)
    direction278 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork14.DragByRay(point284, direction278)
    
    point285 = NXOpen.Point3d(-80.340981773929045, -44.188484954669192, -26.0)
    direction279 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork14.DragByRay(point285, direction279)
    
    point286 = NXOpen.Point3d(-80.340981773929045, -44.188484954669192, -26.0)
    direction280 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork14.DragByRay(point286, direction280)
    
    point287 = NXOpen.Point3d(-80.340981773929045, -44.188484954669192, -26.0)
    direction281 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork14.DragByRay(point287, direction281)
    
    componentNetwork14.EndDrag()
    
    componentNetwork14.ResetDisplay()
    
    componentNetwork14.ApplyToModel()
    
    # ----------------------------------------------
    #   Menu: Orient View->Left
    # ----------------------------------------------
    workPart.ModelingViews.WorkView.Orient(NXOpen.View.Canned.Left, NXOpen.View.ScaleAdjustment.Fit)
    
    # ----------------------------------------------
    #   Menu: Rendering Style->Partially Shaded
    # ----------------------------------------------
    workPart.ModelingViews.WorkView.RenderingStyle = NXOpen.View.RenderingStyleType.PartiallyShaded
    
    markId70 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Visible, "Transform Origin")
    
    loaded21 = componentNetwork14.IsReferencedGeometryLoaded()
    
    componentNetwork14.BeginDrag()
    
    point288 = NXOpen.Point3d(-80.340981773929045, -44.188484954669192, -26.0)
    direction282 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork14.DragByRay(point288, direction282)
    
    point289 = NXOpen.Point3d(-80.340981773929045, -40.894501244776848, -25.779165864487446)
    direction283 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork14.DragByRay(point289, direction283)
    
    point290 = NXOpen.Point3d(-80.340981773929045, -40.705927520170356, -25.779165864487446)
    direction284 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork14.DragByRay(point290, direction284)
    
    point291 = NXOpen.Point3d(-80.340981773929045, -40.517353795563871, -25.779165864487446)
    direction285 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork14.DragByRay(point291, direction285)
    
    point292 = NXOpen.Point3d(-80.340981773929045, -40.328780070957386, -25.590592139880975)
    direction286 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork14.DragByRay(point292, direction286)
    
    point293 = NXOpen.Point3d(-80.340981773929045, -40.328780070957386, -25.590592139880975)
    direction287 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork14.DragByRay(point293, direction287)
    
    point294 = NXOpen.Point3d(-80.340981773929045, -40.140206346350929, -25.40201841527449)
    direction288 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork14.DragByRay(point294, direction288)
    
    point295 = NXOpen.Point3d(-80.340981773929045, -40.140206346350929, -25.40201841527449)
    direction289 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork14.DragByRay(point295, direction289)
    
    point296 = NXOpen.Point3d(-80.340981773929045, -39.951632621744444, -25.40201841527449)
    direction290 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork14.DragByRay(point296, direction290)
    
    point297 = NXOpen.Point3d(-80.340981773929045, -39.763058897137952, -25.21344469066802)
    direction291 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork14.DragByRay(point297, direction291)
    
    point298 = NXOpen.Point3d(-80.340981773929045, -39.763058897137952, -25.21344469066802)
    direction292 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork14.DragByRay(point298, direction292)
    
    point299 = NXOpen.Point3d(-80.340981773929045, -39.574485172531467, -25.024870966061528)
    direction293 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork14.DragByRay(point299, direction293)
    
    point300 = NXOpen.Point3d(-80.340981773929045, -39.574485172531467, -25.024870966061528)
    direction294 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork14.DragByRay(point300, direction294)
    
    point301 = NXOpen.Point3d(-80.340981773929045, -39.385911447924983, -25.024870966061528)
    direction295 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork14.DragByRay(point301, direction295)
    
    point302 = NXOpen.Point3d(-80.340981773929045, -39.385911447924983, -25.024870966061528)
    direction296 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork14.DragByRay(point302, direction296)
    
    point303 = NXOpen.Point3d(-80.340981773929045, -39.197337723318526, -25.024870966061528)
    direction297 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork14.DragByRay(point303, direction297)
    
    point304 = NXOpen.Point3d(-80.340981773929045, -39.197337723318526, -25.024870966061528)
    direction298 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork14.DragByRay(point304, direction298)
    
    point305 = NXOpen.Point3d(-80.340981773929045, -39.197337723318526, -25.024870966061528)
    direction299 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork14.DragByRay(point305, direction299)
    
    point306 = NXOpen.Point3d(-80.340981773929045, -39.197337723318526, -25.024870966061528)
    direction300 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork14.DragByRay(point306, direction300)
    
    componentNetwork14.EndDrag()
    
    componentNetwork14.ResetDisplay()
    
    componentNetwork14.ApplyToModel()
    
    markId71 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "Move Component")
    
    componentNetwork14.Solve()
    
    componentPositioner14.ClearNetwork()
    
    nErrs23 = theSession.UpdateManager.AddToDeleteList(componentNetwork14)
    
    componentPositioner14.DeleteNonPersistentConstraints()
    
    nErrs24 = theSession.UpdateManager.DoUpdate(markId68)
    
    theSession.DeleteUndoMark(markId71, None)
    
    theSession.SetUndoMarkName(markId67, "Move Component")
    
    componentPositioner14.EndMoveComponent()
    
    componentPositioner14.PrimaryArrangement = NXOpen.Assemblies.Arrangement.Null
    
    theSession.DeleteUndoMarksUpToMark(markId68, None, False)
    
    markId72 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Visible, "Start")
    
    componentPositioner15 = workPart.ComponentAssembly.Positioner
    
    componentPositioner15.ClearNetwork()
    
    componentPositioner15.PrimaryArrangement = arrangement1
    
    componentPositioner15.BeginMoveComponent()
    
    allowInterpartPositioning14 = theSession.Preferences.Assemblies.InterpartPositioning
    
    expression130 = workPart.Expressions.CreateSystemExpressionWithUnits("1.0", NXOpen.Unit.Null)
    
    expression131 = workPart.Expressions.CreateSystemExpressionWithUnits("1.0", unit1)
    
    expression132 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit1)
    
    expression133 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit2)
    
    expression134 = workPart.Expressions.CreateSystemExpressionWithUnits("1", NXOpen.Unit.Null)
    
    expression135 = workPart.Expressions.CreateSystemExpressionWithUnits("1.0", unit1)
    
    expression136 = workPart.Expressions.CreateSystemExpressionWithUnits("0", unit1)
    
    expression137 = workPart.Expressions.CreateSystemExpressionWithUnits("0", unit2)
    
    network15 = componentPositioner15.EstablishNetwork()
    
    componentNetwork15 = network15
    componentNetwork15.MoveObjectsState = True
    
    componentNetwork15.DisplayComponent = NXOpen.Assemblies.Component.Null
    
    componentNetwork15.NetworkArrangementsMode = NXOpen.Positioning.ComponentNetwork.ArrangementsMode.Existing
    
    expression138 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit1)
    
    expression139 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit1)
    
    expression140 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit1)
    
    expression141 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit1)
    
    expression142 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit2)
    
    componentNetwork15.RemoveAllConstraints()
    
    movableObjects16 = []
    componentNetwork15.SetMovingGroup(movableObjects16)
    
    componentNetwork15.Solve()
    
    theSession.SetUndoMarkName(markId72, "Move Component Dialog")
    
    componentNetwork15.MoveObjectsState = True
    
    componentNetwork15.NetworkArrangementsMode = NXOpen.Positioning.ComponentNetwork.ArrangementsMode.Existing
    
    markId73 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "Move Component Update")
    
    componentNetwork15.RemoveAllConstraints()
    
    movableObjects17 = [NXOpen.NXObject.Null] * 1 
    component11 = nXObject7
    movableObjects17[0] = component11
    componentNetwork15.SetMovingGroup(movableObjects17)
    
    componentNetwork15.Solve()
    
    markId74 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Visible, "Transform Origin")
    
    loaded22 = componentNetwork15.IsReferencedGeometryLoaded()
    
    componentNetwork15.BeginDrag()
    
    point307 = NXOpen.Point3d(-80.067817516788537, 83.65238738708257, -12.0)
    direction301 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork15.DragByRay(point307, direction301)
    
    point308 = NXOpen.Point3d(-80.067817516788537, 81.489846024829092, -19.744806677080064)
    direction302 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork15.DragByRay(point308, direction302)
    
    point309 = NXOpen.Point3d(-80.067817516788537, 81.489846024829092, -20.121954126293041)
    direction303 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork15.DragByRay(point309, direction303)
    
    point310 = NXOpen.Point3d(-80.067817516788537, 81.489846024829092, -20.499101575505996)
    direction304 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork15.DragByRay(point310, direction304)
    
    point311 = NXOpen.Point3d(-80.067817516788537, 81.301272300222621, -22.007691372357847)
    direction305 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork15.DragByRay(point311, direction305)
    
    point312 = NXOpen.Point3d(-80.067817516788537, 80.924124851009651, -22.95055999539025)
    direction306 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork15.DragByRay(point312, direction306)
    
    point313 = NXOpen.Point3d(-80.067817516788537, 80.735551126403166, -23.516281169209684)
    direction307 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork15.DragByRay(point313, direction307)
    
    point314 = NXOpen.Point3d(-80.067817516788537, 80.358403677190211, -23.893428618422639)
    direction308 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork15.DragByRay(point314, direction308)
    
    point315 = NXOpen.Point3d(-80.067817516788537, 80.358403677190211, -24.082002343029124)
    direction309 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork15.DragByRay(point315, direction309)
    
    point316 = NXOpen.Point3d(-80.067817516788537, 80.358403677190211, -24.270576067635609)
    direction310 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork15.DragByRay(point316, direction310)
    
    point317 = NXOpen.Point3d(-80.067817516788537, 80.358403677190211, -24.459149792242087)
    direction311 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork15.DragByRay(point317, direction311)
    
    point318 = NXOpen.Point3d(-80.067817516788537, 80.358403677190211, -24.459149792242087)
    direction312 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork15.DragByRay(point318, direction312)
    
    point319 = NXOpen.Point3d(-80.067817516788537, 80.358403677190211, -24.647723516848572)
    direction313 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork15.DragByRay(point319, direction313)
    
    point320 = NXOpen.Point3d(-80.067817516788537, 80.358403677190211, -24.647723516848572)
    direction314 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork15.DragByRay(point320, direction314)
    
    point321 = NXOpen.Point3d(-80.067817516788537, 80.358403677190211, -24.836297241455043)
    direction315 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork15.DragByRay(point321, direction315)
    
    point322 = NXOpen.Point3d(-80.067817516788537, 80.358403677190211, -24.836297241455043)
    direction316 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork15.DragByRay(point322, direction316)
    
    point323 = NXOpen.Point3d(-80.067817516788537, 80.546977401796681, -24.836297241455043)
    direction317 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork15.DragByRay(point323, direction317)
    
    point324 = NXOpen.Point3d(-80.067817516788537, 80.735551126403166, -24.836297241455043)
    direction318 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork15.DragByRay(point324, direction318)
    
    point325 = NXOpen.Point3d(-80.067817516788537, 80.735551126403166, -24.836297241455043)
    direction319 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork15.DragByRay(point325, direction319)
    
    point326 = NXOpen.Point3d(-80.067817516788537, 81.112698575616122, -24.836297241455043)
    direction320 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork15.DragByRay(point326, direction320)
    
    point327 = NXOpen.Point3d(-80.067817516788537, 81.112698575616122, -24.836297241455043)
    direction321 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork15.DragByRay(point327, direction321)
    
    point328 = NXOpen.Point3d(-80.067817516788537, 81.112698575616122, -24.836297241455043)
    direction322 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork15.DragByRay(point328, direction322)
    
    point329 = NXOpen.Point3d(-80.067817516788537, 81.112698575616122, -24.836297241455043)
    direction323 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork15.DragByRay(point329, direction323)
    
    componentNetwork15.EndDrag()
    
    componentNetwork15.ResetDisplay()
    
    componentNetwork15.ApplyToModel()
    
    markId75 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "Move Component")
    
    theSession.DeleteUndoMark(markId75, None)
    
    markId76 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "Move Component")
    
    componentNetwork15.Solve()
    
    componentPositioner15.ClearNetwork()
    
    nErrs25 = theSession.UpdateManager.AddToDeleteList(componentNetwork15)
    
    componentPositioner15.DeleteNonPersistentConstraints()
    
    nErrs26 = theSession.UpdateManager.DoUpdate(markId73)
    
    theSession.DeleteUndoMark(markId76, None)
    
    theSession.SetUndoMarkName(markId72, "Move Component")
    
    componentPositioner15.EndMoveComponent()
    
    componentPositioner15.PrimaryArrangement = NXOpen.Assemblies.Arrangement.Null
    
    theSession.DeleteUndoMarksUpToMark(markId73, None, False)
    
    # ----------------------------------------------
    #   Menu: Rendering Style->Shaded with Edges
    # ----------------------------------------------
    workPart.ModelingViews.WorkView.RenderingStyle = NXOpen.View.RenderingStyleType.ShadedWithEdges
    
    # ----------------------------------------------
    #   Menu: Orient View->Left
    # ----------------------------------------------
    workPart.ModelingViews.WorkView.Orient(NXOpen.View.Canned.Left, NXOpen.View.ScaleAdjustment.Fit)
    
    # ----------------------------------------------
    #   Menu: Orient View->Isometric
    # ----------------------------------------------
    workPart.ModelingViews.WorkView.Orient(NXOpen.View.Canned.Isometric, NXOpen.View.ScaleAdjustment.Fit)
    
    # ----------------------------------------------
    #   Menu: Assemblies->Components->Add Component...
    # ----------------------------------------------
    markId77 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Visible, "Start")
    
    addComponentBuilder9 = workPart.AssemblyManager.CreateAddComponentBuilder()
    
    componentPositioner16 = workPart.ComponentAssembly.Positioner
    
    componentPositioner16.ClearNetwork()
    
    componentPositioner16.PrimaryArrangement = arrangement1
    
    componentPositioner16.BeginAssemblyConstraints()
    
    allowInterpartPositioning15 = theSession.Preferences.Assemblies.InterpartPositioning
    
    expression143 = workPart.Expressions.CreateSystemExpressionWithUnits("1.0", NXOpen.Unit.Null)
    
    expression144 = workPart.Expressions.CreateSystemExpressionWithUnits("1.0", unit1)
    
    expression145 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit1)
    
    expression146 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit2)
    
    expression147 = workPart.Expressions.CreateSystemExpressionWithUnits("1", NXOpen.Unit.Null)
    
    expression148 = workPart.Expressions.CreateSystemExpressionWithUnits("1.0", unit1)
    
    expression149 = workPart.Expressions.CreateSystemExpressionWithUnits("0", unit1)
    
    expression150 = workPart.Expressions.CreateSystemExpressionWithUnits("0", unit2)
    
    network16 = componentPositioner16.EstablishNetwork()
    
    componentNetwork16 = network16
    componentNetwork16.MoveObjectsState = True
    
    componentNetwork16.DisplayComponent = NXOpen.Assemblies.Component.Null
    
    theSession.SetUndoMarkName(markId77, "Add Component Dialog")
    
    componentNetwork16.MoveObjectsState = True
    
    markId78 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "Assembly Constraints Update")
    
    addComponentBuilder9.SetComponentAnchor(NXOpen.Assemblies.ProductInterface.InterfaceObject.Null)
    
    addComponentBuilder9.SetInitialLocationType(NXOpen.Assemblies.AddComponentBuilder.LocationType.Snap)
    
    addComponentBuilder9.SetCount(1)
    
    addComponentBuilder9.SetScatterOption(True)
    
    addComponentBuilder9.ReferenceSet = "Unknown"
    
    addComponentBuilder9.Layer = -1
    
    basePart4, partLoadStatus4 = theSession.Parts.OpenBase(pin_path)
    
    partLoadStatus4.Dispose()
    addComponentBuilder9.ReferenceSet = "Use Model"
    
    addComponentBuilder9.Layer = -1
    
    partstouse9 = [NXOpen.BasePart.Null] * 1 
    part4 = basePart4
    partstouse9[0] = part4
    addComponentBuilder9.SetPartsToAdd(partstouse9)
    
    productinterfaceobjects9 = addComponentBuilder9.GetAllProductInterfaceObjects()
    
    coordinates11 = NXOpen.Point3d(173.74104085691764, 81.955276364418452, 0.0)
    point330 = workPart.Points.CreatePoint(coordinates11)
    
    coordinates12 = NXOpen.Point3d(173.74104085691764, 81.955276364418452, 0.0)
    point331 = workPart.Points.CreatePoint(coordinates12)
    
    origin11 = NXOpen.Point3d(173.74104085691764, 81.955276364418452, 0.0)
    vector11 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    direction324 = workPart.Directions.CreateDirection(origin11, vector11, NXOpen.SmartObject.UpdateOption.WithinModeling)
    
    origin12 = NXOpen.Point3d(173.74104085691764, 81.955276364418452, 0.0)
    vector12 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    direction325 = workPart.Directions.CreateDirection(origin12, vector12, NXOpen.SmartObject.UpdateOption.WithinModeling)
    
    xform7 = workPart.Xforms.CreateXformByPointXDirZDir(point331, direction325, direction324, NXOpen.SmartObject.UpdateOption.WithinModeling, 0.625)
    
    cartesianCoordinateSystem7 = workPart.CoordinateSystems.CreateCoordinateSystem(xform7, NXOpen.SmartObject.UpdateOption.WithinModeling)
    
    point332 = NXOpen.Point3d(173.74104085691764, 81.955276364418452, 0.0)
    orientation7 = NXOpen.Matrix3x3()
    
    orientation7.Xx = 1.0
    orientation7.Xy = 0.0
    orientation7.Xz = 0.0
    orientation7.Yx = 0.0
    orientation7.Yy = 1.0
    orientation7.Yz = 0.0
    orientation7.Zx = 0.0
    orientation7.Zy = 0.0
    orientation7.Zz = 1.0
    addComponentBuilder9.SetInitialLocationAndOrientation(point332, orientation7)
    
    movableObjects18 = [NXOpen.NXObject.Null] * 1 
    component12 = workPart.ComponentAssembly.RootComponent.FindObject("COMPONENT pin 1")
    movableObjects18[0] = component12
    componentNetwork16.SetMovingGroup(movableObjects18)
    
    markId79 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Visible, "Transform Origin")
    
    loaded23 = componentNetwork16.IsReferencedGeometryLoaded()
    
    componentNetwork16.BeginDrag()
    
    point333 = NXOpen.Point3d(113.74104033537699, 91.955276606562322, 60.006091371178627)
    direction326 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork16.DragByRay(point333, direction326)
    
    point334 = NXOpen.Point3d(138.65749450035693, 37.386214372205245, 60.006091371178627)
    direction327 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork16.DragByRay(point334, direction327)
    
    point335 = NXOpen.Point3d(148.10405261125862, 13.909935472599145, 60.00609137117862)
    direction328 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork16.DragByRay(point335, direction328)
    
    point336 = NXOpen.Point3d(150.27378451877712, 9.0247737350087931, 60.006091371178627)
    direction329 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork16.DragByRay(point336, direction329)
    
    point337 = NXOpen.Point3d(150.60508995211057, 7.7883250249847009, 60.006091371178634)
    direction330 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork16.DragByRay(point337, direction330)
    
    point338 = NXOpen.Point3d(151.10204810211076, 5.9336519599486337, 60.006091371178627)
    direction331 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork16.DragByRay(point338, direction331)
    
    point339 = NXOpen.Point3d(151.59900625211088, 4.0789788949125381, 60.00609137117862)
    direction332 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork16.DragByRay(point339, direction332)
    
    point340 = NXOpen.Point3d(150.40694405374171, 2.1030396248645928, 60.006091371178627)
    direction333 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork16.DragByRay(point340, direction333)
    
    point341 = NXOpen.Point3d(149.72808659622376, 1.4241821673466148, 60.006091371178627)
    direction334 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork16.DragByRay(point341, direction334)
    
    point342 = NXOpen.Point3d(148.88357642203906, 1.3635490648407256, 60.00609137117862)
    direction335 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork16.DragByRay(point342, direction335)
    
    point343 = NXOpen.Point3d(146.80261753783034, 1.6342213956682485, 60.006091371178613)
    direction336 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork16.DragByRay(point343, direction336)
    
    point344 = NXOpen.Point3d(146.01874046615157, 2.4180984673470221, 60.006091371178613)
    direction337 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork16.DragByRay(point344, direction337)
    
    point345 = NXOpen.Point3d(145.40051611113952, 2.5837511840137211, 60.006091371178606)
    direction338 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork16.DragByRay(point345, direction338)
    
    point346 = NXOpen.Point3d(144.39035322028812, 3.1413424365198352, 60.006091371178599)
    direction339 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork16.DragByRay(point346, direction339)
    
    point347 = NXOpen.Point3d(143.77212886527604, 3.3069951531865627, 60.006091371178591)
    direction340 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork16.DragByRay(point347, direction340)
    
    point348 = NXOpen.Point3d(142.59631325775791, 4.4828107607046945, 60.006091371178599)
    direction341 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork16.DragByRay(point348, direction341)
    
    point349 = NXOpen.Point3d(141.97808890274592, 4.6484634773714077, 60.006091371178599)
    direction342 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork16.DragByRay(point349, direction342)
    
    point350 = NXOpen.Point3d(140.80227329522776, 5.8242790848895538, 60.006091371178599)
    direction343 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork16.DragByRay(point350, direction343)
    
    point351 = NXOpen.Point3d(140.80227329522776, 5.8242790848895538, 60.006091371178599)
    direction344 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork16.DragByRay(point351, direction344)
    
    point352 = NXOpen.Point3d(140.80227329522776, 5.8242790848895538, 60.006091371178599)
    direction345 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork16.DragByRay(point352, direction345)
    
    point353 = NXOpen.Point3d(140.80227329522776, 5.8242790848895538, 60.006091371178599)
    direction346 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork16.DragByRay(point353, direction346)
    
    componentNetwork16.EndDrag()
    
    componentNetwork16.ResetDisplay()
    
    componentNetwork16.ApplyToModel()
    
    markId80 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "Add Component")
    
    markId81 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "AddComponent on_apply")
    
    componentNetwork16.Solve()
    
    componentPositioner16.ClearNetwork()
    
    nErrs27 = theSession.UpdateManager.AddToDeleteList(componentNetwork16)
    
    nErrs28 = theSession.UpdateManager.DoUpdate(markId78)
    
    componentPositioner16.EndAssemblyConstraints()
    
    logicalobjects7 = addComponentBuilder9.GetLogicalObjectsHavingUnassignedRequiredAttributes()
    
    addComponentBuilder9.ComponentName = "PIN"
    
    nXObject8 = addComponentBuilder9.Commit()
    
    errorList7 = addComponentBuilder9.GetOperationFailures()
    
    errorList7.Dispose()
    theSession.DeleteUndoMark(markId80, None)
    
    theSession.SetUndoMarkName(markId77, "Add Component")
    
    addComponentBuilder9.Destroy()
    
    workPart.Points.DeletePoint(point330)
    
    componentPositioner16.PrimaryArrangement = NXOpen.Assemblies.Arrangement.Null
    
    theSession.DeleteUndoMark(markId78, None)
    
    theSession.DeleteUndoMark(markId79, None)
    
    markId82 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Visible, "Start")
    
    addComponentBuilder10 = workPart.AssemblyManager.CreateAddComponentBuilder()
    
    componentPositioner17 = workPart.ComponentAssembly.Positioner
    
    componentPositioner17.ClearNetwork()
    
    componentPositioner17.PrimaryArrangement = arrangement1
    
    componentPositioner17.BeginAssemblyConstraints()
    
    allowInterpartPositioning16 = theSession.Preferences.Assemblies.InterpartPositioning
    
    expression151 = workPart.Expressions.CreateSystemExpressionWithUnits("1.0", NXOpen.Unit.Null)
    
    expression152 = workPart.Expressions.CreateSystemExpressionWithUnits("1.0", unit1)
    
    expression153 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit1)
    
    expression154 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit2)
    
    expression155 = workPart.Expressions.CreateSystemExpressionWithUnits("1", NXOpen.Unit.Null)
    
    expression156 = workPart.Expressions.CreateSystemExpressionWithUnits("1.0", unit1)
    
    expression157 = workPart.Expressions.CreateSystemExpressionWithUnits("0", unit1)
    
    expression158 = workPart.Expressions.CreateSystemExpressionWithUnits("0", unit2)
    
    network17 = componentPositioner17.EstablishNetwork()
    
    componentNetwork17 = network17
    componentNetwork17.MoveObjectsState = True
    
    componentNetwork17.DisplayComponent = NXOpen.Assemblies.Component.Null
    
    theSession.SetUndoMarkName(markId82, "Add Component Dialog")
    
    componentNetwork17.MoveObjectsState = True
    
    markId83 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "Assembly Constraints Update")
    
    addComponentBuilder10.SetComponentAnchor(NXOpen.Assemblies.ProductInterface.InterfaceObject.Null)
    
    addComponentBuilder10.SetInitialLocationType(NXOpen.Assemblies.AddComponentBuilder.LocationType.Snap)
    
    addComponentBuilder10.SetCount(1)
    
    addComponentBuilder10.SetScatterOption(True)
    
    addComponentBuilder10.ReferenceSet = "Unknown"
    
    addComponentBuilder10.Layer = -1
    
    # ----------------------------------------------
    #   Dialog Begin Add Component
    # ----------------------------------------------
    addComponentBuilder10.ReferenceSet = "Use Model"
    
    addComponentBuilder10.Layer = -1
    
    partstouse10 = [NXOpen.BasePart.Null] * 1 
    partstouse10[0] = part4
    addComponentBuilder10.SetPartsToAdd(partstouse10)
    
    productinterfaceobjects10 = addComponentBuilder10.GetAllProductInterfaceObjects()
    
    coordinates13 = NXOpen.Point3d(167.79029028954017, -24.331739377839973, 0.0)
    point354 = workPart.Points.CreatePoint(coordinates13)
    
    coordinates14 = NXOpen.Point3d(167.79029028954017, -24.331739377839973, 0.0)
    point355 = workPart.Points.CreatePoint(coordinates14)
    
    origin13 = NXOpen.Point3d(167.79029028954017, -24.331739377839973, 0.0)
    vector13 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    direction347 = workPart.Directions.CreateDirection(origin13, vector13, NXOpen.SmartObject.UpdateOption.WithinModeling)
    
    origin14 = NXOpen.Point3d(167.79029028954017, -24.331739377839973, 0.0)
    vector14 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    direction348 = workPart.Directions.CreateDirection(origin14, vector14, NXOpen.SmartObject.UpdateOption.WithinModeling)
    
    xform8 = workPart.Xforms.CreateXformByPointXDirZDir(point355, direction348, direction347, NXOpen.SmartObject.UpdateOption.WithinModeling, 0.625)
    
    cartesianCoordinateSystem8 = workPart.CoordinateSystems.CreateCoordinateSystem(xform8, NXOpen.SmartObject.UpdateOption.WithinModeling)
    
    point356 = NXOpen.Point3d(167.79029028954017, -24.331739377839973, 0.0)
    orientation8 = NXOpen.Matrix3x3()
    
    orientation8.Xx = 1.0
    orientation8.Xy = 0.0
    orientation8.Xz = 0.0
    orientation8.Yx = 0.0
    orientation8.Yy = 1.0
    orientation8.Yz = 0.0
    orientation8.Zx = 0.0
    orientation8.Zy = 0.0
    orientation8.Zz = 1.0
    addComponentBuilder10.SetInitialLocationAndOrientation(point356, orientation8)
    
    movableObjects19 = [NXOpen.NXObject.Null] * 1 
    component13 = workPart.ComponentAssembly.RootComponent.FindObject("COMPONENT pin 1")
    movableObjects19[0] = component13
    componentNetwork17.SetMovingGroup(movableObjects19)
    
    markId84 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Visible, "Transform Origin")
    
    loaded24 = componentNetwork17.IsReferencedGeometryLoaded()
    
    componentNetwork17.BeginDrag()
    
    point357 = NXOpen.Point3d(107.79028976799954, -14.331739135696104, 60.006091371178627)
    direction349 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork17.DragByRay(point357, direction349)
    
    point358 = NXOpen.Point3d(129.92314093134729, -52.087477579716449, 60.006091371178634)
    direction350 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork17.DragByRay(point358, direction350)
    
    point359 = NXOpen.Point3d(134.74331630553337, -66.864228997499296, 60.006091371178641)
    direction351 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork17.DragByRay(point359, direction351)
    
    point360 = NXOpen.Point3d(137.62004559137361, -76.529532858519133, 60.006091371178634)
    direction352 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork17.DragByRay(point360, direction352)
    
    point361 = NXOpen.Point3d(138.43206258385624, -82.772409511145383, 60.006091371178641)
    direction353 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork17.DragByRay(point361, direction353)
    
    point362 = NXOpen.Point3d(138.91277414300532, -87.778837453747542, 60.006091371178641)
    direction354 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork17.DragByRay(point362, direction354)
    
    point363 = NXOpen.Point3d(137.76509845629099, -92.062021427176887, 60.006091371178641)
    direction355 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork17.DragByRay(point363, direction355)
    
    point364 = NXOpen.Point3d(136.55678966707075, -97.189715574790924, 60.006091371178641)
    direction356 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork17.DragByRay(point364, direction356)
    
    point365 = NXOpen.Point3d(136.20923764288625, -99.105021742332951, 60.006091371178641)
    direction357 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork17.DragByRay(point365, direction357)
    
    point366 = NXOpen.Point3d(135.75666600454093, -99.55759338067827, 60.006091371178641)
    direction358 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork17.DragByRay(point366, direction358)
    
    point367 = NXOpen.Point3d(136.08797143787444, -100.79404209070235, 60.006091371178648)
    direction359 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork17.DragByRay(point367, direction359)
    
    point368 = NXOpen.Point3d(136.19299105203521, -102.25677661989907, 60.006091371178648)
    direction360 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork17.DragByRay(point368, direction360)
    
    point369 = NXOpen.Point3d(136.19299105203521, -102.25677661989907, 60.006091371178648)
    direction361 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork17.DragByRay(point369, direction361)
    
    point370 = NXOpen.Point3d(136.19299105203521, -102.25677661989907, 60.006091371178648)
    direction362 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork17.DragByRay(point370, direction362)
    
    point371 = NXOpen.Point3d(136.19299105203521, -102.25677661989907, 60.006091371178648)
    direction363 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork17.DragByRay(point371, direction363)
    
    componentNetwork17.EndDrag()
    
    componentNetwork17.ResetDisplay()
    
    componentNetwork17.ApplyToModel()
    
    markId85 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "Add Component")
    
    theSession.DeleteUndoMark(markId85, None)
    
    markId86 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "Add Component")
    
    markId87 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "AddComponent on_apply")
    
    componentNetwork17.Solve()
    
    componentPositioner17.ClearNetwork()
    
    nErrs29 = theSession.UpdateManager.AddToDeleteList(componentNetwork17)
    
    nErrs30 = theSession.UpdateManager.DoUpdate(markId83)
    
    componentPositioner17.EndAssemblyConstraints()
    
    logicalobjects8 = addComponentBuilder10.GetLogicalObjectsHavingUnassignedRequiredAttributes()
    
    addComponentBuilder10.ComponentName = "PIN"
    
    nXObject9 = addComponentBuilder10.Commit()
    
    errorList8 = addComponentBuilder10.GetOperationFailures()
    
    errorList8.Dispose()
    theSession.DeleteUndoMark(markId86, None)
    
    theSession.SetUndoMarkName(markId82, "Add Component")
    
    addComponentBuilder10.Destroy()
    
    workPart.Points.DeletePoint(point354)
    
    componentPositioner17.PrimaryArrangement = NXOpen.Assemblies.Arrangement.Null
    
    theSession.DeleteUndoMark(markId83, None)
    
    theSession.DeleteUndoMark(markId84, None)
    
    # ----------------------------------------------
    #   Menu: Assemblies->Component Position->Move Component...
    # ----------------------------------------------
    markId88 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Visible, "Start")
    
    componentPositioner18 = workPart.ComponentAssembly.Positioner
    
    componentPositioner18.ClearNetwork()
    
    componentPositioner18.PrimaryArrangement = arrangement1
    
    componentPositioner18.BeginMoveComponent()
    
    allowInterpartPositioning17 = theSession.Preferences.Assemblies.InterpartPositioning
    
    expression159 = workPart.Expressions.CreateSystemExpressionWithUnits("1.0", NXOpen.Unit.Null)
    
    expression160 = workPart.Expressions.CreateSystemExpressionWithUnits("1.0", unit1)
    
    expression161 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit1)
    
    expression162 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit2)
    
    expression163 = workPart.Expressions.CreateSystemExpressionWithUnits("1", NXOpen.Unit.Null)
    
    expression164 = workPart.Expressions.CreateSystemExpressionWithUnits("1.0", unit1)
    
    expression165 = workPart.Expressions.CreateSystemExpressionWithUnits("0", unit1)
    
    expression166 = workPart.Expressions.CreateSystemExpressionWithUnits("0", unit2)
    
    network18 = componentPositioner18.EstablishNetwork()
    
    componentNetwork18 = network18
    componentNetwork18.MoveObjectsState = True
    
    componentNetwork18.DisplayComponent = NXOpen.Assemblies.Component.Null
    
    componentNetwork18.NetworkArrangementsMode = NXOpen.Positioning.ComponentNetwork.ArrangementsMode.Existing
    
    expression167 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit1)
    
    expression168 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit1)
    
    expression169 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit1)
    
    expression170 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit1)
    
    expression171 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit2)
    
    componentNetwork18.RemoveAllConstraints()
    
    movableObjects20 = [NXOpen.NXObject.Null] * 1 
    component14 = nXObject8
    movableObjects20[0] = component14
    componentNetwork18.SetMovingGroup(movableObjects20)
    
    componentNetwork18.Solve()
    
    theSession.SetUndoMarkName(markId88, "Move Component Dialog")
    
    componentNetwork18.MoveObjectsState = True
    
    componentNetwork18.NetworkArrangementsMode = NXOpen.Positioning.ComponentNetwork.ArrangementsMode.Existing
    
    markId89 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "Move Component Update")
    
    # ----------------------------------------------
    #   Menu: Orient View->Top
    # ----------------------------------------------
    workPart.ModelingViews.WorkView.Orient(NXOpen.View.Canned.Top, NXOpen.View.ScaleAdjustment.Fit)
    
    markId90 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Visible, "Transform Origin")
    
    loaded25 = componentNetwork18.IsReferencedGeometryLoaded()
    
    componentNetwork18.BeginDrag()
    
    point372 = NXOpen.Point3d(140.80227329522776, 5.8242790848895538, 60.006091371178627)
    direction364 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork18.DragByRay(point372, direction364)
    
    point373 = NXOpen.Point3d(130.13567753063791, 24.503994931151439, 60.006091371178627)
    direction365 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork18.DragByRay(point373, direction365)
    
    point374 = NXOpen.Point3d(120.43717349562667, 40.021601387169454, 60.006091371178627)
    direction366 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork18.DragByRay(point374, direction366)
    
    point375 = NXOpen.Point3d(114.0638708440478, 49.720105422180715, 60.006091371178627)
    direction367 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork18.DragByRay(point375, direction367)
    
    point376 = NXOpen.Point3d(111.84706992175954, 54.153707266757294, 60.006091371178627)
    direction368 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork18.DragByRay(point376, direction368)
    
    point377 = NXOpen.Point3d(109.90736911475726, 57.201808534903684, 60.006091371178627)
    direction369 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork18.DragByRay(point377, direction369)
    
    point378 = NXOpen.Point3d(108.24476842304104, 59.141509341905945, 60.006091371178627)
    direction370 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork18.DragByRay(point378, direction370)
    
    point379 = NXOpen.Point3d(105.75086738546672, 61.081210148908191, 60.006091371178627)
    direction371 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork18.DragByRay(point379, direction371)
    
    point380 = NXOpen.Point3d(100.208865079746, 64.406411532340627, 60.006091371178627)
    direction372 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork18.DragByRay(point380, direction372)
    
    point381 = NXOpen.Point3d(93.558462312881147, 68.840013376917199, 60.006091371178627)
    direction373 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork18.DragByRay(point381, direction373)
    
    point382 = NXOpen.Point3d(89.401960583590608, 71.611014529777549, 60.006091371178627)
    direction374 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork18.DragByRay(point382, direction374)
    
    point383 = NXOpen.Point3d(87.739359891874386, 74.104915567351895, 60.006091371178627)
    direction375 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork18.DragByRay(point383, direction375)
    
    point384 = NXOpen.Point3d(86.353859315444197, 76.321716489640181, 60.006091371178627)
    direction376 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork18.DragByRay(point384, direction376)
    
    point385 = NXOpen.Point3d(85.799659084872161, 77.984317181356388, 60.006091371178627)
    direction377 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork18.DragByRay(point385, direction377)
    
    point386 = NXOpen.Point3d(84.137058393155939, 79.369817757786564, 60.006091371178627)
    direction378 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork18.DragByRay(point386, direction378)
    
    point387 = NXOpen.Point3d(82.75155781672575, 80.201118103644689, 60.006091371178627)
    direction379 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork18.DragByRay(point387, direction379)
    
    point388 = NXOpen.Point3d(81.366057240295561, 80.478218218930721, 60.006091371178627)
    direction380 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork18.DragByRay(point388, direction380)
    
    point389 = NXOpen.Point3d(80.534756894437479, 80.755318334216753, 60.006091371178627)
    direction381 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork18.DragByRay(point389, direction381)
    
    point390 = NXOpen.Point3d(79.703456548579339, 80.755318334216753, 60.006091371178627)
    direction382 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork18.DragByRay(point390, direction382)
    
    point391 = NXOpen.Point3d(79.149256318007303, 80.755318334216753, 60.006091371178627)
    direction383 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork18.DragByRay(point391, direction383)
    
    point392 = NXOpen.Point3d(77.763755741577114, 80.755318334216753, 60.006091371178627)
    direction384 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork18.DragByRay(point392, direction384)
    
    point393 = NXOpen.Point3d(76.378255165146939, 81.309518564788817, 60.006091371178627)
    direction385 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork18.DragByRay(point393, direction385)
    
    point394 = NXOpen.Point3d(74.715654473430703, 81.863718795360896, 60.006091371178627)
    direction386 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork18.DragByRay(point394, direction386)
    
    point395 = NXOpen.Point3d(74.161454242858625, 82.41791902593296, 60.006091371178627)
    direction387 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork18.DragByRay(point395, direction387)
    
    point396 = NXOpen.Point3d(73.607254012286575, 82.972119256505039, 60.006091371178627)
    direction388 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork18.DragByRay(point396, direction388)
    
    point397 = NXOpen.Point3d(73.330153897000542, 83.249219371791071, 60.006091371178627)
    direction389 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork18.DragByRay(point397, direction389)
    
    point398 = NXOpen.Point3d(73.053053781714482, 83.803419602363149, 60.006091371178627)
    direction390 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork18.DragByRay(point398, direction390)
    
    point399 = NXOpen.Point3d(72.77595366642845, 84.357619832935228, 60.006091371178627)
    direction391 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork18.DragByRay(point399, direction391)
    
    point400 = NXOpen.Point3d(72.77595366642845, 84.357619832935228, 60.006091371178627)
    direction392 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork18.DragByRay(point400, direction392)
    
    point401 = NXOpen.Point3d(72.498853551142389, 84.357619832935228, 60.006091371178627)
    direction393 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork18.DragByRay(point401, direction393)
    
    point402 = NXOpen.Point3d(72.498853551142389, 84.357619832935228, 60.006091371178627)
    direction394 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork18.DragByRay(point402, direction394)
    
    point403 = NXOpen.Point3d(72.2217534358564, 84.080519717649182, 60.006091371178627)
    direction395 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork18.DragByRay(point403, direction395)
    
    point404 = NXOpen.Point3d(72.2217534358564, 84.080519717649182, 60.006091371178627)
    direction396 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork18.DragByRay(point404, direction396)
    
    point405 = NXOpen.Point3d(71.944653320570353, 84.080519717649182, 60.006091371178627)
    direction397 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork18.DragByRay(point405, direction397)
    
    point406 = NXOpen.Point3d(71.667553205284307, 84.080519717649182, 60.006091371178627)
    direction398 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork18.DragByRay(point406, direction398)
    
    point407 = NXOpen.Point3d(71.667553205284307, 84.080519717649182, 60.006091371178627)
    direction399 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork18.DragByRay(point407, direction399)
    
    point408 = NXOpen.Point3d(71.667553205284307, 84.080519717649182, 60.006091371178627)
    direction400 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork18.DragByRay(point408, direction400)
    
    point409 = NXOpen.Point3d(71.667553205284307, 84.080519717649182, 60.006091371178627)
    direction401 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork18.DragByRay(point409, direction401)
    
    componentNetwork18.EndDrag()
    
    componentNetwork18.ResetDisplay()
    
    componentNetwork18.ApplyToModel()
    
    markId91 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "Move Component")
    
    componentNetwork18.Solve()
    
    componentPositioner18.ClearNetwork()
    
    nErrs31 = theSession.UpdateManager.AddToDeleteList(componentNetwork18)
    
    componentPositioner18.DeleteNonPersistentConstraints()
    
    nErrs32 = theSession.UpdateManager.DoUpdate(markId89)
    
    theSession.DeleteUndoMark(markId91, None)
    
    theSession.SetUndoMarkName(markId88, "Move Component")
    
    componentPositioner18.EndMoveComponent()
    
    componentPositioner18.PrimaryArrangement = NXOpen.Assemblies.Arrangement.Null
    
    theSession.DeleteUndoMarksUpToMark(markId89, None, False)
    
    markId92 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Visible, "Start")
    
    componentPositioner19 = workPart.ComponentAssembly.Positioner
    
    componentPositioner19.ClearNetwork()
    
    componentPositioner19.PrimaryArrangement = arrangement1
    
    componentPositioner19.BeginMoveComponent()
    
    allowInterpartPositioning18 = theSession.Preferences.Assemblies.InterpartPositioning
    
    expression172 = workPart.Expressions.CreateSystemExpressionWithUnits("1.0", NXOpen.Unit.Null)
    
    expression173 = workPart.Expressions.CreateSystemExpressionWithUnits("1.0", unit1)
    
    expression174 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit1)
    
    expression175 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit2)
    
    expression176 = workPart.Expressions.CreateSystemExpressionWithUnits("1", NXOpen.Unit.Null)
    
    expression177 = workPart.Expressions.CreateSystemExpressionWithUnits("1.0", unit1)
    
    expression178 = workPart.Expressions.CreateSystemExpressionWithUnits("0", unit1)
    
    expression179 = workPart.Expressions.CreateSystemExpressionWithUnits("0", unit2)
    
    network19 = componentPositioner19.EstablishNetwork()
    
    componentNetwork19 = network19
    componentNetwork19.MoveObjectsState = True
    
    componentNetwork19.DisplayComponent = NXOpen.Assemblies.Component.Null
    
    componentNetwork19.NetworkArrangementsMode = NXOpen.Positioning.ComponentNetwork.ArrangementsMode.Existing
    
    expression180 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit1)
    
    expression181 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit1)
    
    expression182 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit1)
    
    expression183 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit1)
    
    expression184 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit2)
    
    componentNetwork19.RemoveAllConstraints()
    
    movableObjects21 = []
    componentNetwork19.SetMovingGroup(movableObjects21)
    
    componentNetwork19.Solve()
    
    theSession.SetUndoMarkName(markId92, "Move Component Dialog")
    
    componentNetwork19.MoveObjectsState = True
    
    componentNetwork19.NetworkArrangementsMode = NXOpen.Positioning.ComponentNetwork.ArrangementsMode.Existing
    
    markId93 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "Move Component Update")
    
    componentNetwork19.RemoveAllConstraints()
    
    movableObjects22 = [NXOpen.NXObject.Null] * 1 
    component15 = nXObject9
    movableObjects22[0] = component15
    componentNetwork19.SetMovingGroup(movableObjects22)
    
    componentNetwork19.Solve()
    
    markId94 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Visible, "Transform Origin")
    
    loaded26 = componentNetwork19.IsReferencedGeometryLoaded()
    
    componentNetwork19.BeginDrag()
    
    point410 = NXOpen.Point3d(136.19299105203521, -102.25677661989906, 60.006091371178627)
    direction402 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork19.DragByRay(point410, direction402)
    
    point411 = NXOpen.Point3d(112.40127015233158, -63.890941845094041, 60.006091371178627)
    direction403 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork19.DragByRay(point411, direction403)
    
    point412 = NXOpen.Point3d(106.58216773132486, -59.734440115803494, 60.006091371178627)
    direction404 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork19.DragByRay(point412, direction404)
    
    point413 = NXOpen.Point3d(97.43786392688564, -54.192437810082779, 60.006091371178627)
    direction405 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork19.DragByRay(point413, direction405)
    
    point414 = NXOpen.Point3d(91.618761505878922, -50.867236426650351, 60.006091371178627)
    direction406 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork19.DragByRay(point414, direction406)
    
    point415 = NXOpen.Point3d(87.739359891874386, -47.542035043217922, 60.006091371178627)
    direction407 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork19.DragByRay(point415, direction407)
    
    point416 = NXOpen.Point3d(85.245458854300068, -46.15653446678774, 60.006091371178627)
    direction408 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork19.DragByRay(point416, direction408)
    
    point417 = NXOpen.Point3d(82.75155781672575, -43.939733544499447, 60.006091371178627)
    direction409 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork19.DragByRay(point417, direction409)
    
    point418 = NXOpen.Point3d(81.088957125009529, -42.277132852783225, 60.006091371178627)
    direction410 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork19.DragByRay(point418, direction410)
    
    point419 = NXOpen.Point3d(80.534756894437479, -42.0000327374972, 60.006091371178627)
    direction411 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork19.DragByRay(point419, direction411)
    
    point420 = NXOpen.Point3d(79.980556663865386, -41.722932622211154, 60.006091371178627)
    direction412 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork19.DragByRay(point420, direction412)
    
    point421 = NXOpen.Point3d(79.426356433293307, -41.445832506925129, 60.006091371178627)
    direction413 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork19.DragByRay(point421, direction413)
    
    point422 = NXOpen.Point3d(78.040855856863118, -40.891632276353043, 60.006091371178627)
    direction414 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork19.DragByRay(point422, direction414)
    
    point423 = NXOpen.Point3d(77.763755741577114, -40.614532161067018, 60.006091371178627)
    direction415 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork19.DragByRay(point423, direction415)
    
    point424 = NXOpen.Point3d(76.378255165146939, -39.783231815208907, 60.006091371178627)
    direction416 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork19.DragByRay(point424, direction416)
    
    point425 = NXOpen.Point3d(75.824054934574846, -39.506131699922861, 60.006091371178627)
    direction417 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork19.DragByRay(point425, direction417)
    
    point426 = NXOpen.Point3d(75.5469548192888, -39.506131699922861, 60.006091371178627)
    direction418 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork19.DragByRay(point426, direction418)
    
    point427 = NXOpen.Point3d(74.992754588716764, -38.951931469350797, 60.006091371178627)
    direction419 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork19.DragByRay(point427, direction419)
    
    point428 = NXOpen.Point3d(74.438554358144671, -38.674831354064771, 60.006091371178627)
    direction420 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork19.DragByRay(point428, direction420)
    
    point429 = NXOpen.Point3d(74.161454242858625, -38.120631123492679, 60.006091371178627)
    direction421 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork19.DragByRay(point429, direction421)
    
    point430 = NXOpen.Point3d(73.884354127572578, -38.120631123492679, 60.006091371178627)
    direction422 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork19.DragByRay(point430, direction422)
    
    point431 = NXOpen.Point3d(73.607254012286575, -37.843531008206661, 60.006091371178627)
    direction423 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork19.DragByRay(point431, direction423)
    
    point432 = NXOpen.Point3d(72.77595366642845, -37.289330777634589, 60.006091371178627)
    direction424 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork19.DragByRay(point432, direction424)
    
    point433 = NXOpen.Point3d(72.498853551142389, -37.289330777634589, 60.006091371178627)
    direction425 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork19.DragByRay(point433, direction425)
    
    point434 = NXOpen.Point3d(72.498853551142389, -37.289330777634589, 60.006091371178627)
    direction426 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork19.DragByRay(point434, direction426)
    
    point435 = NXOpen.Point3d(72.2217534358564, -37.012230662348543, 60.006091371178627)
    direction427 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork19.DragByRay(point435, direction427)
    
    point436 = NXOpen.Point3d(71.944653320570353, -36.735130547062504, 60.006091371178627)
    direction428 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork19.DragByRay(point436, direction428)
    
    point437 = NXOpen.Point3d(71.944653320570353, -36.735130547062504, 60.006091371178627)
    direction429 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork19.DragByRay(point437, direction429)
    
    point438 = NXOpen.Point3d(71.944653320570353, -36.458030431776479, 60.006091371178627)
    direction430 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork19.DragByRay(point438, direction430)
    
    point439 = NXOpen.Point3d(71.944653320570353, -36.458030431776479, 60.006091371178627)
    direction431 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork19.DragByRay(point439, direction431)
    
    point440 = NXOpen.Point3d(71.944653320570353, -36.180930316490432, 60.006091371178627)
    direction432 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork19.DragByRay(point440, direction432)
    
    point441 = NXOpen.Point3d(71.667553205284307, -35.903830201204414, 60.006091371178627)
    direction433 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork19.DragByRay(point441, direction433)
    
    point442 = NXOpen.Point3d(71.39045308999826, -35.903830201204414, 60.006091371178627)
    direction434 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork19.DragByRay(point442, direction434)
    
    point443 = NXOpen.Point3d(71.39045308999826, -35.903830201204414, 60.006091371178627)
    direction435 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork19.DragByRay(point443, direction435)
    
    point444 = NXOpen.Point3d(71.113352974712214, -35.626730085918368, 60.006091371178627)
    direction436 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork19.DragByRay(point444, direction436)
    
    point445 = NXOpen.Point3d(71.113352974712214, -35.626730085918368, 60.006091371178627)
    direction437 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork19.DragByRay(point445, direction437)
    
    point446 = NXOpen.Point3d(71.39045308999826, -35.626730085918368, 60.006091371178627)
    direction438 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork19.DragByRay(point446, direction438)
    
    point447 = NXOpen.Point3d(71.39045308999826, -35.626730085918368, 60.006091371178627)
    direction439 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork19.DragByRay(point447, direction439)
    
    point448 = NXOpen.Point3d(71.39045308999826, -35.626730085918368, 60.006091371178627)
    direction440 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork19.DragByRay(point448, direction440)
    
    point449 = NXOpen.Point3d(71.39045308999826, -35.626730085918368, 60.006091371178627)
    direction441 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork19.DragByRay(point449, direction441)
    
    componentNetwork19.EndDrag()
    
    componentNetwork19.ResetDisplay()
    
    componentNetwork19.ApplyToModel()
    
    # ----------------------------------------------
    #   Menu: Rendering Style->Partially Shaded
    # ----------------------------------------------
    workPart.ModelingViews.WorkView.RenderingStyle = NXOpen.View.RenderingStyleType.PartiallyShaded
    
    # ----------------------------------------------
    #   Menu: Orient View->Right
    # ----------------------------------------------
    workPart.ModelingViews.WorkView.Orient(NXOpen.View.Canned.Right, NXOpen.View.ScaleAdjustment.Fit)
    
    markId95 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Visible, "Transform Origin")
    
    loaded27 = componentNetwork19.IsReferencedGeometryLoaded()
    
    componentNetwork19.BeginDrag()
    
    point450 = NXOpen.Point3d(71.39045308999826, -35.626730085918368, 60.006091371178627)
    direction442 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork19.DragByRay(point450, direction442)
    
    point451 = NXOpen.Point3d(71.39045308999826, -35.510949544210561, 53.329751246905651)
    direction443 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork19.DragByRay(point451, direction443)
    
    point452 = NXOpen.Point3d(71.39045308999826, -35.510949544210561, 47.523689790583461)
    direction444 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork19.DragByRay(point452, direction444)
    
    point453 = NXOpen.Point3d(71.39045308999826, -36.072826459338522, 42.279505249389217)
    direction445 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork19.DragByRay(point453, direction445)
    
    point454 = NXOpen.Point3d(71.39045308999826, -36.821995679509115, 34.787813047683173)
    direction446 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork19.DragByRay(point454, direction446)
    
    point455 = NXOpen.Point3d(71.39045308999826, -37.009287984551776, 27.857997761105075)
    direction447 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork19.DragByRay(point455, direction447)
    
    point456 = NXOpen.Point3d(71.39045308999826, -37.758457204722376, 21.677351694697577)
    direction448 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork19.DragByRay(point456, direction448)
    
    point457 = NXOpen.Point3d(71.39045308999826, -38.69491872993563, 15.122121018204783)
    direction449 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork19.DragByRay(point457, direction449)
    
    point458 = NXOpen.Point3d(71.39045308999826, -38.69491872993563, 10.814398002223816)
    direction450 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork19.DragByRay(point458, direction450)
    
    point459 = NXOpen.Point3d(71.39045308999826, -38.69491872993563, 7.6304288164987462)
    direction451 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork19.DragByRay(point459, direction451)
    
    point460 = NXOpen.Point3d(71.39045308999826, -39.06950334002093, 4.0718750206883634)
    direction452 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork19.DragByRay(point460, direction452)
    
    point461 = NXOpen.Point3d(71.39045308999826, -39.44408795010623, -3.2325248759750309)
    direction453 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork19.DragByRay(point461, direction453)
    
    point462 = NXOpen.Point3d(71.39045308999826, -39.818672560191544, -9.9750478575104857)
    direction454 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork19.DragByRay(point462, direction454)
    
    point463 = NXOpen.Point3d(71.39045308999826, -40.005964865234191, -12.784432433150254)
    direction455 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork19.DragByRay(point463, direction455)
    
    point464 = NXOpen.Point3d(71.39045308999826, -40.005964865234191, -14.095478568448808)
    direction456 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork19.DragByRay(point464, direction456)
    
    point465 = NXOpen.Point3d(71.39045308999826, -40.005964865234191, -15.031940093662069)
    direction457 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork19.DragByRay(point465, direction457)
    
    point466 = NXOpen.Point3d(71.39045308999826, -40.005964865234191, -15.968401618875323)
    direction458 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork19.DragByRay(point466, direction458)
    
    point467 = NXOpen.Point3d(71.39045308999826, -40.005964865234191, -17.466740059216537)
    direction459 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork19.DragByRay(point467, direction459)
    
    point468 = NXOpen.Point3d(71.39045308999826, -40.005964865234191, -19.152370804600391)
    direction460 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork19.DragByRay(point468, direction460)
    
    point469 = NXOpen.Point3d(71.39045308999826, -40.005964865234191, -20.276124634856306)
    direction461 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork19.DragByRay(point469, direction461)
    
    point470 = NXOpen.Point3d(71.39045308999826, -40.005964865234191, -20.838001549984245)
    direction462 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork19.DragByRay(point470, direction462)
    
    point471 = NXOpen.Point3d(71.39045308999826, -39.631380255148891, -21.961755380240159)
    direction463 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork19.DragByRay(point471, direction463)
    
    point472 = NXOpen.Point3d(71.39045308999826, -39.44408795010623, -22.14904768528282)
    direction464 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork19.DragByRay(point472, direction464)
    
    point473 = NXOpen.Point3d(71.39045308999826, -39.44408795010623, -22.33633999032546)
    direction465 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork19.DragByRay(point473, direction465)
    
    point474 = NXOpen.Point3d(71.39045308999826, -39.44408795010623, -22.33633999032546)
    direction466 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork19.DragByRay(point474, direction466)
    
    point475 = NXOpen.Point3d(71.39045308999826, -39.25679564506359, -22.33633999032546)
    direction467 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork19.DragByRay(point475, direction467)
    
    point476 = NXOpen.Point3d(71.39045308999826, -39.25679564506359, -22.33633999032546)
    direction468 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork19.DragByRay(point476, direction468)
    
    point477 = NXOpen.Point3d(71.39045308999826, -39.25679564506359, -22.33633999032546)
    direction469 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork19.DragByRay(point477, direction469)
    
    point478 = NXOpen.Point3d(71.39045308999826, -39.25679564506359, -22.33633999032546)
    direction470 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork19.DragByRay(point478, direction470)
    
    componentNetwork19.EndDrag()
    
    componentNetwork19.ResetDisplay()
    
    componentNetwork19.ApplyToModel()
    
    markId96 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Visible, "Transform Origin")
    
    loaded28 = componentNetwork19.IsReferencedGeometryLoaded()
    
    componentNetwork19.BeginDrag()
    
    point479 = NXOpen.Point3d(71.39045308999826, -39.25679564506359, -22.33633999032546)
    direction471 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork19.DragByRay(point479, direction471)
    
    point480 = NXOpen.Point3d(71.39045308999826, -37.758457204722376, -25.145724565965228)
    direction472 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork19.DragByRay(point480, direction472)
    
    point481 = NXOpen.Point3d(71.39045308999826, -37.758457204722376, -25.333016871007889)
    direction473 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork19.DragByRay(point481, direction473)
    
    point482 = NXOpen.Point3d(71.39045308999826, -37.758457204722376, -25.333016871007889)
    direction474 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork19.DragByRay(point482, direction474)
    
    point483 = NXOpen.Point3d(71.39045308999826, -37.758457204722376, -25.520309176050528)
    direction475 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork19.DragByRay(point483, direction475)
    
    point484 = NXOpen.Point3d(71.39045308999826, -37.758457204722376, -25.520309176050528)
    direction476 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork19.DragByRay(point484, direction476)
    
    point485 = NXOpen.Point3d(71.39045308999826, -37.945749509765029, -25.707601481093189)
    direction477 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork19.DragByRay(point485, direction477)
    
    point486 = NXOpen.Point3d(71.39045308999826, -38.32033411985033, -25.894893786135828)
    direction478 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork19.DragByRay(point486, direction478)
    
    point487 = NXOpen.Point3d(71.39045308999826, -38.507626424892976, -25.894893786135828)
    direction479 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork19.DragByRay(point487, direction479)
    
    point488 = NXOpen.Point3d(71.39045308999826, -38.88221103497829, -25.894893786135828)
    direction480 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork19.DragByRay(point488, direction480)
    
    point489 = NXOpen.Point3d(71.39045308999826, -39.06950334002093, -25.707601481093189)
    direction481 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork19.DragByRay(point489, direction481)
    
    point490 = NXOpen.Point3d(71.39045308999826, -39.06950334002093, -25.520309176050528)
    direction482 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork19.DragByRay(point490, direction482)
    
    point491 = NXOpen.Point3d(71.39045308999826, -39.06950334002093, -25.520309176050528)
    direction483 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork19.DragByRay(point491, direction483)
    
    point492 = NXOpen.Point3d(71.39045308999826, -39.06950334002093, -25.333016871007889)
    direction484 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork19.DragByRay(point492, direction484)
    
    point493 = NXOpen.Point3d(71.39045308999826, -38.88221103497829, -25.333016871007889)
    direction485 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork19.DragByRay(point493, direction485)
    
    point494 = NXOpen.Point3d(71.39045308999826, -38.88221103497829, -25.333016871007889)
    direction486 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork19.DragByRay(point494, direction486)
    
    point495 = NXOpen.Point3d(71.39045308999826, -38.88221103497829, -25.145724565965228)
    direction487 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork19.DragByRay(point495, direction487)
    
    point496 = NXOpen.Point3d(71.39045308999826, -38.88221103497829, -25.145724565965228)
    direction488 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork19.DragByRay(point496, direction488)
    
    point497 = NXOpen.Point3d(71.39045308999826, -38.88221103497829, -24.958432260922574)
    direction489 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork19.DragByRay(point497, direction489)
    
    point498 = NXOpen.Point3d(71.39045308999826, -38.88221103497829, -24.958432260922574)
    direction490 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork19.DragByRay(point498, direction490)
    
    point499 = NXOpen.Point3d(71.39045308999826, -38.88221103497829, -24.771139955879928)
    direction491 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork19.DragByRay(point499, direction491)
    
    point500 = NXOpen.Point3d(71.39045308999826, -38.88221103497829, -24.771139955879928)
    direction492 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork19.DragByRay(point500, direction492)
    
    point501 = NXOpen.Point3d(71.39045308999826, -38.88221103497829, -24.771139955879928)
    direction493 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork19.DragByRay(point501, direction493)
    
    componentNetwork19.EndDrag()
    
    componentNetwork19.ResetDisplay()
    
    componentNetwork19.ApplyToModel()
    
    scaleAboutPoint25 = NXOpen.Point3d(-56.655922275401998, -48.695999311089324, 0.0)
    viewCenter25 = NXOpen.Point3d(56.655922275401998, 48.695999311089324, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(1.25, scaleAboutPoint25, viewCenter25)
    
    scaleAboutPoint26 = NXOpen.Point3d(-45.324737820321594, -38.956799448871458, 0.0)
    viewCenter26 = NXOpen.Point3d(45.324737820321594, 38.95679944887145, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(1.25, scaleAboutPoint26, viewCenter26)
    
    scaleAboutPoint27 = NXOpen.Point3d(-36.259790256257276, -31.16543955909717, 0.0)
    viewCenter27 = NXOpen.Point3d(36.259790256257276, 31.165439559097141, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(1.25, scaleAboutPoint27, viewCenter27)
    
    scaleAboutPoint28 = NXOpen.Point3d(-29.007832205005819, -24.932351647277752, 0.0)
    viewCenter28 = NXOpen.Point3d(29.007832205005819, 24.932351647277713, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(1.25, scaleAboutPoint28, viewCenter28)
    
    scaleAboutPoint29 = NXOpen.Point3d(-23.206265764004655, -19.945881317822199, 0.0)
    viewCenter29 = NXOpen.Point3d(23.206265764004655, 19.94588131782217, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(1.25, scaleAboutPoint29, viewCenter29)
    
    scaleAboutPoint30 = NXOpen.Point3d(-18.565012611203727, -15.833961169225013, 0.0)
    viewCenter30 = NXOpen.Point3d(18.565012611203727, 15.833961169224978, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(1.25, scaleAboutPoint30, viewCenter30)
    
    scaleAboutPoint31 = NXOpen.Point3d(-14.852010088962979, -12.667168935380015, 0.0)
    viewCenter31 = NXOpen.Point3d(14.852010088962979, 12.66716893537998, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(1.25, scaleAboutPoint31, viewCenter31)
    
    scaleAboutPoint32 = NXOpen.Point3d(-11.881608071170383, -10.133735148304016, 0.0)
    viewCenter32 = NXOpen.Point3d(11.881608071170383, 10.133735148303982, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(1.25, scaleAboutPoint32, viewCenter32)
    
    markId97 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Visible, "Translate Along Y-axis")
    
    loaded29 = componentNetwork19.IsReferencedGeometryLoaded()
    
    componentNetwork19.BeginDrag()
    
    translation118 = NXOpen.Vector3d(0.0, -0.20000000000000284, 0.0)
    componentNetwork19.DragByTranslation(translation118)
    
    translation119 = NXOpen.Vector3d(0.0, -0.29999999999999716, 0.0)
    componentNetwork19.DragByTranslation(translation119)
    
    translation120 = NXOpen.Vector3d(0.0, -0.39999999999999858, 0.0)
    componentNetwork19.DragByTranslation(translation120)
    
    translation121 = NXOpen.Vector3d(0.0, -0.29999999999999716, 0.0)
    componentNetwork19.DragByTranslation(translation121)
    
    componentNetwork19.EndDrag()
    
    componentNetwork19.ResetDisplay()
    
    componentNetwork19.ApplyToModel()
    
    markId98 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Visible, "Translate Along Z-axis")
    
    loaded30 = componentNetwork19.IsReferencedGeometryLoaded()
    
    componentNetwork19.BeginDrag()
    
    translation122 = NXOpen.Vector3d(0.0, 0.0, -0.0017035508731346738)
    componentNetwork19.DragByTranslation(translation122)
    
    translation123 = NXOpen.Vector3d(0.0, 0.0, -0.033125985441518679)
    componentNetwork19.DragByTranslation(translation123)
    
    translation124 = NXOpen.Vector3d(0.0, 0.0, -0.10000000000000142)
    componentNetwork19.DragByTranslation(translation124)
    
    translation125 = NXOpen.Vector3d(0.0, 0.0, -0.19999999999999929)
    componentNetwork19.DragByTranslation(translation125)
    
    componentNetwork19.EndDrag()
    
    componentNetwork19.ResetDisplay()
    
    componentNetwork19.ApplyToModel()
    
    scaleAboutPoint33 = NXOpen.Point3d(-4.0377828420374113, 3.5507351062274322, 0.0)
    viewCenter33 = NXOpen.Point3d(4.0377828420373989, -3.5507351062274632, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(0.80000000000000004, scaleAboutPoint33, viewCenter33)
    
    scaleAboutPoint34 = NXOpen.Point3d(-5.0472285525467653, 4.4384188827842932, 0.0)
    viewCenter34 = NXOpen.Point3d(5.0472285525467457, -4.4384188827843225, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(0.80000000000000004, scaleAboutPoint34, viewCenter34)
    
    scaleAboutPoint35 = NXOpen.Point3d(-6.309035690683455, 5.5480236034803694, 0.0)
    viewCenter35 = NXOpen.Point3d(6.3090356906834382, -5.5480236034804022, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(0.80000000000000004, scaleAboutPoint35, viewCenter35)
    
    scaleAboutPoint36 = NXOpen.Point3d(-7.8862946133543197, 6.9350295043504682, 0.0)
    viewCenter36 = NXOpen.Point3d(7.8862946133542939, -6.9350295043505037, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(0.80000000000000004, scaleAboutPoint36, viewCenter36)
    
    scaleAboutPoint37 = NXOpen.Point3d(-10.548302620002131, 7.4413480301105652, 0.0)
    viewCenter37 = NXOpen.Point3d(10.548302620002106, -7.4413480301106034, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(0.80000000000000004, scaleAboutPoint37, viewCenter37)
    
    markId99 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "Move Component")
    
    componentNetwork19.Solve()
    
    componentPositioner19.ClearNetwork()
    
    nErrs33 = theSession.UpdateManager.AddToDeleteList(componentNetwork19)
    
    componentPositioner19.DeleteNonPersistentConstraints()
    
    nErrs34 = theSession.UpdateManager.DoUpdate(markId93)
    
    theSession.DeleteUndoMark(markId99, None)
    
    theSession.SetUndoMarkName(markId92, "Move Component")
    
    componentPositioner19.EndMoveComponent()
    
    componentPositioner19.PrimaryArrangement = NXOpen.Assemblies.Arrangement.Null
    
    theSession.DeleteUndoMarksUpToMark(markId93, None, False)
    
    markId100 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Visible, "Start")
    
    componentPositioner20 = workPart.ComponentAssembly.Positioner
    
    componentPositioner20.ClearNetwork()
    
    componentPositioner20.PrimaryArrangement = arrangement1
    
    componentPositioner20.BeginMoveComponent()
    
    allowInterpartPositioning19 = theSession.Preferences.Assemblies.InterpartPositioning
    
    expression185 = workPart.Expressions.CreateSystemExpressionWithUnits("1.0", NXOpen.Unit.Null)
    
    expression186 = workPart.Expressions.CreateSystemExpressionWithUnits("1.0", unit1)
    
    expression187 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit1)
    
    expression188 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit2)
    
    expression189 = workPart.Expressions.CreateSystemExpressionWithUnits("1", NXOpen.Unit.Null)
    
    expression190 = workPart.Expressions.CreateSystemExpressionWithUnits("1.0", unit1)
    
    expression191 = workPart.Expressions.CreateSystemExpressionWithUnits("0", unit1)
    
    expression192 = workPart.Expressions.CreateSystemExpressionWithUnits("0", unit2)
    
    network20 = componentPositioner20.EstablishNetwork()
    
    componentNetwork20 = network20
    componentNetwork20.MoveObjectsState = True
    
    componentNetwork20.DisplayComponent = NXOpen.Assemblies.Component.Null
    
    componentNetwork20.NetworkArrangementsMode = NXOpen.Positioning.ComponentNetwork.ArrangementsMode.Existing
    
    expression193 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit1)
    
    expression194 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit1)
    
    expression195 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit1)
    
    expression196 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit1)
    
    expression197 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit2)
    
    componentNetwork20.RemoveAllConstraints()
    
    movableObjects23 = []
    componentNetwork20.SetMovingGroup(movableObjects23)
    
    componentNetwork20.Solve()
    
    theSession.SetUndoMarkName(markId100, "Move Component Dialog")
    
    componentNetwork20.MoveObjectsState = True
    
    componentNetwork20.NetworkArrangementsMode = NXOpen.Positioning.ComponentNetwork.ArrangementsMode.Existing
    
    markId101 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "Move Component Update")
    
    scaleAboutPoint38 = NXOpen.Point3d(-59.310228822466463, -10.35651529963847, 0.0)
    viewCenter38 = NXOpen.Point3d(59.310228822466435, 10.356515299638422, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(0.80000000000000004, scaleAboutPoint38, viewCenter38)
    
    scaleAboutPoint39 = NXOpen.Point3d(-75.096722629901478, -15.342985629094018, 0.0)
    viewCenter39 = NXOpen.Point3d(75.096722629901436, 15.342985629093977, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(0.80000000000000004, scaleAboutPoint39, viewCenter39)
    
    scaleAboutPoint40 = NXOpen.Point3d(-89.37588796635319, -17.230892063923932, 0.0)
    viewCenter40 = NXOpen.Point3d(89.375887966353162, 17.230892063923896, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(0.80000000000000004, scaleAboutPoint40, viewCenter40)
    
    scaleAboutPoint41 = NXOpen.Point3d(-111.71985995794145, -21.725907384947551, 0.0)
    viewCenter41 = NXOpen.Point3d(111.71985995794145, 21.725907384947522, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(0.80000000000000004, scaleAboutPoint41, viewCenter41)
    
    scaleAboutPoint42 = NXOpen.Point3d(-140.11805571003342, -27.157384231184437, 0.0)
    viewCenter42 = NXOpen.Point3d(140.11805571003342, 27.15738423118442, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(0.80000000000000004, scaleAboutPoint42, viewCenter42)
    
    scaleAboutPoint43 = NXOpen.Point3d(-175.73285809080014, -34.532018742238847, 0.0)
    viewCenter43 = NXOpen.Point3d(175.73285809080002, 34.532018742238826, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(0.80000000000000004, scaleAboutPoint43, viewCenter43)
    
    scaleAboutPoint44 = NXOpen.Point3d(-66.393658916486714, 12.803184915024959, 0.0)
    viewCenter44 = NXOpen.Point3d(66.393658916486658, -12.803184915025019, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(1.25, scaleAboutPoint44, viewCenter44)
    
    scaleAboutPoint45 = NXOpen.Point3d(-53.114927133189369, 10.24254793201999, 0.0)
    viewCenter45 = NXOpen.Point3d(53.114927133189298, -10.242547932020015, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(1.25, scaleAboutPoint45, viewCenter45)
    
    scaleAboutPoint46 = NXOpen.Point3d(-42.491941706551501, 8.194038345615974, 0.0)
    viewCenter46 = NXOpen.Point3d(42.491941706551458, -8.1940383456160131, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(1.25, scaleAboutPoint46, viewCenter46)
    
    componentNetwork20.RemoveAllConstraints()
    
    movableObjects24 = [NXOpen.NXObject.Null] * 1 
    component16 = nXObject3
    movableObjects24[0] = component16
    componentNetwork20.SetMovingGroup(movableObjects24)
    
    componentNetwork20.Solve()
    
    componentPositioner20.EndMoveComponent()
    
    componentPositioner20.PrimaryArrangement = NXOpen.Assemblies.Arrangement.Null
    
    theSession.DeleteUndoMarksUpToMark(markId101, None, False)
    
    theSession.UndoToMark(markId100, None)
    
    theSession.DeleteUndoMark(markId100, None)
    
    # ----------------------------------------------
    #   Menu: Assemblies->Component Position->Move Component...
    # ----------------------------------------------
    markId102 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Visible, "Start")
    
    componentPositioner21 = workPart.ComponentAssembly.Positioner
    
    componentPositioner21.ClearNetwork()
    
    componentPositioner21.PrimaryArrangement = arrangement1
    
    componentPositioner21.BeginMoveComponent()
    
    allowInterpartPositioning20 = theSession.Preferences.Assemblies.InterpartPositioning
    
    expression198 = workPart.Expressions.CreateSystemExpressionWithUnits("1.0", NXOpen.Unit.Null)
    
    expression199 = workPart.Expressions.CreateSystemExpressionWithUnits("1.0", unit1)
    
    expression200 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit1)
    
    expression201 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit2)
    
    expression202 = workPart.Expressions.CreateSystemExpressionWithUnits("1", NXOpen.Unit.Null)
    
    expression203 = workPart.Expressions.CreateSystemExpressionWithUnits("1.0", unit1)
    
    expression204 = workPart.Expressions.CreateSystemExpressionWithUnits("0", unit1)
    
    expression205 = workPart.Expressions.CreateSystemExpressionWithUnits("0", unit2)
    
    network21 = componentPositioner21.EstablishNetwork()
    
    componentNetwork21 = network21
    componentNetwork21.MoveObjectsState = True
    
    componentNetwork21.DisplayComponent = NXOpen.Assemblies.Component.Null
    
    componentNetwork21.NetworkArrangementsMode = NXOpen.Positioning.ComponentNetwork.ArrangementsMode.Existing
    
    expression206 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit1)
    
    expression207 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit1)
    
    expression208 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit1)
    
    expression209 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit1)
    
    expression210 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit2)
    
    componentNetwork21.RemoveAllConstraints()
    
    movableObjects25 = [NXOpen.NXObject.Null] * 1 
    movableObjects25[0] = component14
    componentNetwork21.SetMovingGroup(movableObjects25)
    
    componentNetwork21.Solve()
    
    theSession.SetUndoMarkName(markId102, "Move Component Dialog")
    
    componentNetwork21.MoveObjectsState = True
    
    componentNetwork21.NetworkArrangementsMode = NXOpen.Positioning.ComponentNetwork.ArrangementsMode.Existing
    
    markId103 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "Move Component Update")
    
    markId104 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Visible, "Transform Origin")
    
    loaded31 = componentNetwork21.IsReferencedGeometryLoaded()
    
    componentNetwork21.BeginDrag()
    
    point502 = NXOpen.Point3d(71.667553205284307, 84.080519717649182, 60.006091371178627)
    direction494 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork21.DragByRay(point502, direction494)
    
    point503 = NXOpen.Point3d(71.667553205284307, 84.515011521548601, 17.498552528071787)
    direction495 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork21.DragByRay(point503, direction495)
    
    point504 = NXOpen.Point3d(71.667553205284307, 84.515011521548601, 9.4449834112377857)
    direction496 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork21.DragByRay(point504, direction496)
    
    point505 = NXOpen.Point3d(71.667553205284307, 84.702303826591262, 4.3880911750862097)
    direction497 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork21.DragByRay(point505, direction497)
    
    point506 = NXOpen.Point3d(71.667553205284307, 84.702303826591262, 2.1405835145743985)
    direction498 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork21.DragByRay(point506, direction498)
    
    point507 = NXOpen.Point3d(71.667553205284307, 85.451473046761862, -3.2908933316624918)
    direction499 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork21.DragByRay(point507, direction499)
    
    point508 = NXOpen.Point3d(71.667553205284307, 85.451473046761862, -6.2875702123449031)
    direction500 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork21.DragByRay(point508, direction500)
    
    point509 = NXOpen.Point3d(71.667553205284307, 85.451473046761862, -10.408000923283222)
    direction501 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork21.DragByRay(point509, direction501)
    
    point510 = NXOpen.Point3d(71.667553205284307, 84.889596131633922, -13.404677803965647)
    direction502 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork21.DragByRay(point510, direction502)
    
    point511 = NXOpen.Point3d(71.667553205284307, 83.953134606420662, -17.52510851490397)
    direction503 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork21.DragByRay(point511, direction503)
    
    point512 = NXOpen.Point3d(71.667553205284307, 82.454796166079461, -20.896370005671695)
    direction504 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork21.DragByRay(point512, direction504)
    
    point513 = NXOpen.Point3d(71.667553205284307, 81.5183346408662, -22.769293056098203)
    direction505 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork21.DragByRay(point513, direction505)
    
    point514 = NXOpen.Point3d(71.667553205284307, 81.5183346408662, -23.331169971226156)
    direction506 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork21.DragByRay(point514, direction506)
    
    point515 = NXOpen.Point3d(71.667553205284307, 81.33104233582354, -23.331169971226156)
    direction507 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork21.DragByRay(point515, direction507)
    
    point516 = NXOpen.Point3d(71.667553205284307, 81.33104233582354, -23.705754581311457)
    direction508 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork21.DragByRay(point516, direction508)
    
    point517 = NXOpen.Point3d(71.667553205284307, 81.33104233582354, -24.080339191396757)
    direction509 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork21.DragByRay(point517, direction509)
    
    point518 = NXOpen.Point3d(71.667553205284307, 80.956457725738233, -24.267631496439417)
    direction510 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork21.DragByRay(point518, direction510)
    
    point519 = NXOpen.Point3d(71.667553205284307, 80.956457725738233, -24.267631496439417)
    direction511 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork21.DragByRay(point519, direction511)
    
    point520 = NXOpen.Point3d(71.667553205284307, 80.956457725738233, -24.454923801482057)
    direction512 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork21.DragByRay(point520, direction512)
    
    point521 = NXOpen.Point3d(71.667553205284307, 80.956457725738233, -24.642216106524717)
    direction513 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork21.DragByRay(point521, direction513)
    
    point522 = NXOpen.Point3d(71.667553205284307, 80.956457725738233, -24.642216106524717)
    direction514 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork21.DragByRay(point522, direction514)
    
    point523 = NXOpen.Point3d(71.667553205284307, 81.143750030780893, -24.642216106524717)
    direction515 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork21.DragByRay(point523, direction515)
    
    point524 = NXOpen.Point3d(71.667553205284307, 81.143750030780893, -24.642216106524717)
    direction516 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork21.DragByRay(point524, direction516)
    
    point525 = NXOpen.Point3d(71.667553205284307, 81.33104233582354, -24.829508411567357)
    direction517 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork21.DragByRay(point525, direction517)
    
    point526 = NXOpen.Point3d(71.667553205284307, 81.33104233582354, -25.01680071661001)
    direction518 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork21.DragByRay(point526, direction518)
    
    point527 = NXOpen.Point3d(71.667553205284307, 81.33104233582354, -25.01680071661001)
    direction519 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork21.DragByRay(point527, direction519)
    
    point528 = NXOpen.Point3d(71.667553205284307, 81.33104233582354, -25.01680071661001)
    direction520 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork21.DragByRay(point528, direction520)
    
    point529 = NXOpen.Point3d(71.667553205284307, 81.33104233582354, -25.01680071661001)
    direction521 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork21.DragByRay(point529, direction521)
    
    componentNetwork21.EndDrag()
    
    componentNetwork21.ResetDisplay()
    
    componentNetwork21.ApplyToModel()
    
    scaleAboutPoint47 = NXOpen.Point3d(45.9802608879708, -17.418184368966571, 0.0)
    viewCenter47 = NXOpen.Point3d(-45.980260887970864, 17.418184368966539, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(0.80000000000000004, scaleAboutPoint47, viewCenter47)
    
    scaleAboutPoint48 = NXOpen.Point3d(57.47532610996349, -21.772730461208209, 0.0)
    viewCenter48 = NXOpen.Point3d(-57.475326109963582, 21.77273046120817, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(0.80000000000000004, scaleAboutPoint48, viewCenter48)
    
    scaleAboutPoint49 = NXOpen.Point3d(30.581321682745234, -57.650912645941034, 0.0)
    viewCenter49 = NXOpen.Point3d(-30.581321682745426, 57.650912645940984, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(1.25, scaleAboutPoint49, viewCenter49)
    
    scaleAboutPoint50 = NXOpen.Point3d(19.548634338826666, -52.441845411942289, 0.0)
    viewCenter50 = NXOpen.Point3d(-19.548634338826762, 52.441845411942253, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(1.25, scaleAboutPoint50, viewCenter50)
    
    scaleAboutPoint51 = NXOpen.Point3d(15.638907471061302, -41.953476329553816, 0.0)
    viewCenter51 = NXOpen.Point3d(-15.638907471061426, 41.953476329553816, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(1.25, scaleAboutPoint51, viewCenter51)
    
    scaleAboutPoint52 = NXOpen.Point3d(-19.253648958384566, -21.126572008811038, 0.0)
    viewCenter52 = NXOpen.Point3d(19.253648958384456, 21.126572008811014, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(1.25, scaleAboutPoint52, viewCenter52)
    
    scaleAboutPoint53 = NXOpen.Point3d(-15.402919166707653, -16.901257607048834, 0.0)
    viewCenter53 = NXOpen.Point3d(15.402919166707555, 16.901257607048802, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(1.25, scaleAboutPoint53, viewCenter53)
    
    scaleAboutPoint54 = NXOpen.Point3d(-12.322335333366153, -13.521006085639064, 0.0)
    viewCenter54 = NXOpen.Point3d(12.322335333366043, 13.521006085639049, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(1.25, scaleAboutPoint54, viewCenter54)
    
    scaleAboutPoint55 = NXOpen.Point3d(-9.8578682666929254, -10.816804868511253, 0.0)
    viewCenter55 = NXOpen.Point3d(9.857868266692817, 10.816804868511234, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(1.25, scaleAboutPoint55, viewCenter55)
    
    scaleAboutPoint56 = NXOpen.Point3d(-7.8862946133543401, -8.5920719522926365, 0.0)
    viewCenter56 = NXOpen.Point3d(7.8862946133542593, 8.5920719522926206, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(1.25, scaleAboutPoint56, viewCenter56)
    
    scaleAboutPoint57 = NXOpen.Point3d(-4.5906213002249592, -6.6281697917686087, 0.0)
    viewCenter57 = NXOpen.Point3d(4.5906213002248739, 6.6281697917685882, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(1.25, scaleAboutPoint57, viewCenter57)
    
    scaleAboutPoint58 = NXOpen.Point3d(-3.6724970401799788, -5.3025358334148853, 0.0)
    viewCenter58 = NXOpen.Point3d(3.6724970401798944, 5.3025358334148622, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(1.25, scaleAboutPoint58, viewCenter58)
    
    markId105 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Visible, "Translate Along Y-axis")
    
    loaded32 = componentNetwork21.IsReferencedGeometryLoaded()
    
    componentNetwork21.BeginDrag()
    
    translation126 = NXOpen.Vector3d(0.0, 0.026317265867689343, 0.0)
    componentNetwork21.DragByTranslation(translation126)
    
    translation127 = NXOpen.Vector3d(0.0, -0.0051051687007088731, 0.0)
    componentNetwork21.DragByTranslation(translation127)
    
    translation128 = NXOpen.Vector3d(0.0, -0.036527603269092879, 0.0)
    componentNetwork21.DragByTranslation(translation128)
    
    translation129 = NXOpen.Vector3d(0.0, -0.099999999999994316, 0.0)
    componentNetwork21.DragByTranslation(translation129)
    
    translation130 = NXOpen.Vector3d(0.0, -0.20000000000000284, 0.0)
    componentNetwork21.DragByTranslation(translation130)
    
    translation131 = NXOpen.Vector3d(0.0, -0.29999999999999716, 0.0)
    componentNetwork21.DragByTranslation(translation131)
    
    componentNetwork21.EndDrag()
    
    componentNetwork21.ResetDisplay()
    
    componentNetwork21.ApplyToModel()
    
    markId106 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Visible, "Translate Along Z-axis")
    
    loaded33 = componentNetwork21.IsReferencedGeometryLoaded()
    
    componentNetwork21.BeginDrag()
    
    translation132 = NXOpen.Vector3d(0.0, 0.0, 0.39999999999999858)
    componentNetwork21.DragByTranslation(translation132)
    
    translation133 = NXOpen.Vector3d(0.0, 0.0, 0.5)
    componentNetwork21.DragByTranslation(translation133)
    
    translation134 = NXOpen.Vector3d(0.0, 0.0, 0.39999999999999858)
    componentNetwork21.DragByTranslation(translation134)
    
    translation135 = NXOpen.Vector3d(0.0, 0.0, 0.30000000000000071)
    componentNetwork21.DragByTranslation(translation135)
    
    translation136 = NXOpen.Vector3d(0.0, 0.0, 0.19999999999999929)
    componentNetwork21.DragByTranslation(translation136)
    
    translation137 = NXOpen.Vector3d(0.0, 0.0, 0.10000000000000142)
    componentNetwork21.DragByTranslation(translation137)
    
    componentNetwork21.EndDrag()
    
    componentNetwork21.ResetDisplay()
    
    componentNetwork21.ApplyToModel()
    
    markId107 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "Move Component")
    
    theSession.DeleteUndoMark(markId107, None)
    
    markId108 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "Move Component")
    
    componentNetwork21.Solve()
    
    componentPositioner21.ClearNetwork()
    
    nErrs35 = theSession.UpdateManager.AddToDeleteList(componentNetwork21)
    
    componentPositioner21.DeleteNonPersistentConstraints()
    
    nErrs36 = theSession.UpdateManager.DoUpdate(markId103)
    
    theSession.DeleteUndoMark(markId108, None)
    
    theSession.SetUndoMarkName(markId102, "Move Component")
    
    componentPositioner21.EndMoveComponent()
    
    componentPositioner21.PrimaryArrangement = NXOpen.Assemblies.Arrangement.Null
    
    theSession.DeleteUndoMarksUpToMark(markId103, None, False)
    
    # ----------------------------------------------
    #   Menu: Orient View->Isometric
    # ----------------------------------------------
    workPart.ModelingViews.WorkView.Orient(NXOpen.View.Canned.Isometric, NXOpen.View.ScaleAdjustment.Fit)
    
    # ----------------------------------------------
    #   Menu: Rendering Style->Shaded with Edges
    # ----------------------------------------------
    workPart.ModelingViews.WorkView.RenderingStyle = NXOpen.View.RenderingStyleType.ShadedWithEdges
    
    # ----------------------------------------------
    #   Menu: Assemblies->Components->Add Component...
    # ----------------------------------------------
    markId109 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Visible, "Start")
    
    addComponentBuilder11 = workPart.AssemblyManager.CreateAddComponentBuilder()
    
    componentPositioner22 = workPart.ComponentAssembly.Positioner
    
    componentPositioner22.ClearNetwork()
    
    componentPositioner22.PrimaryArrangement = arrangement1
    
    componentPositioner22.BeginAssemblyConstraints()
    
    allowInterpartPositioning21 = theSession.Preferences.Assemblies.InterpartPositioning
    
    expression211 = workPart.Expressions.CreateSystemExpressionWithUnits("1.0", NXOpen.Unit.Null)
    
    expression212 = workPart.Expressions.CreateSystemExpressionWithUnits("1.0", unit1)
    
    expression213 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit1)
    
    expression214 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit2)
    
    expression215 = workPart.Expressions.CreateSystemExpressionWithUnits("1", NXOpen.Unit.Null)
    
    expression216 = workPart.Expressions.CreateSystemExpressionWithUnits("1.0", unit1)
    
    expression217 = workPart.Expressions.CreateSystemExpressionWithUnits("0", unit1)
    
    expression218 = workPart.Expressions.CreateSystemExpressionWithUnits("0", unit2)
    
    network22 = componentPositioner22.EstablishNetwork()
    
    componentNetwork22 = network22
    componentNetwork22.MoveObjectsState = True
    
    componentNetwork22.DisplayComponent = NXOpen.Assemblies.Component.Null
    
    theSession.SetUndoMarkName(markId109, "Add Component Dialog")
    
    componentNetwork22.MoveObjectsState = True
    
    markId110 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "Assembly Constraints Update")
    
    addComponentBuilder11.SetComponentAnchor(NXOpen.Assemblies.ProductInterface.InterfaceObject.Null)
    
    addComponentBuilder11.SetInitialLocationType(NXOpen.Assemblies.AddComponentBuilder.LocationType.Snap)
    
    addComponentBuilder11.SetCount(1)
    
    addComponentBuilder11.SetScatterOption(True)
    
    addComponentBuilder11.ReferenceSet = "Unknown"
    
    addComponentBuilder11.Layer = -1
    
    addComponentBuilder11.ReferenceSet = "Use Model"
    
    addComponentBuilder11.Layer = -1
    
    partstouse11 = [NXOpen.BasePart.Null] * 1 
    partstouse11[0] = part4
    addComponentBuilder11.SetPartsToAdd(partstouse11)
    
    productinterfaceobjects11 = addComponentBuilder11.GetAllProductInterfaceObjects()
    
    coordinates15 = NXOpen.Point3d(2.1189103789403703, -108.47990383384902, 0.0)
    point530 = workPart.Points.CreatePoint(coordinates15)
    
    coordinates16 = NXOpen.Point3d(2.1189103789403703, -108.47990383384902, 0.0)
    point531 = workPart.Points.CreatePoint(coordinates16)
    
    origin15 = NXOpen.Point3d(2.1189103789403703, -108.47990383384902, 0.0)
    vector15 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    direction522 = workPart.Directions.CreateDirection(origin15, vector15, NXOpen.SmartObject.UpdateOption.WithinModeling)
    
    origin16 = NXOpen.Point3d(2.1189103789403703, -108.47990383384902, 0.0)
    vector16 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    direction523 = workPart.Directions.CreateDirection(origin16, vector16, NXOpen.SmartObject.UpdateOption.WithinModeling)
    
    xform9 = workPart.Xforms.CreateXformByPointXDirZDir(point531, direction523, direction522, NXOpen.SmartObject.UpdateOption.WithinModeling, 0.625)
    
    cartesianCoordinateSystem9 = workPart.CoordinateSystems.CreateCoordinateSystem(xform9, NXOpen.SmartObject.UpdateOption.WithinModeling)
    
    point532 = NXOpen.Point3d(2.1189103789403703, -108.47990383384902, 0.0)
    orientation9 = NXOpen.Matrix3x3()
    
    orientation9.Xx = 1.0
    orientation9.Xy = 0.0
    orientation9.Xz = 0.0
    orientation9.Yx = 0.0
    orientation9.Yy = 1.0
    orientation9.Yz = 0.0
    orientation9.Zx = 0.0
    orientation9.Zy = 0.0
    orientation9.Zz = 1.0
    addComponentBuilder11.SetInitialLocationAndOrientation(point532, orientation9)
    
    movableObjects26 = [NXOpen.NXObject.Null] * 1 
    component17 = workPart.ComponentAssembly.RootComponent.FindObject("COMPONENT pin 1")
    movableObjects26[0] = component17
    componentNetwork22.SetMovingGroup(movableObjects26)
    
    markId111 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "Add Component")
    
    markId112 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "AddComponent on_apply")
    
    componentNetwork22.Solve()
    
    componentPositioner22.ClearNetwork()
    
    nErrs37 = theSession.UpdateManager.AddToDeleteList(componentNetwork22)
    
    nErrs38 = theSession.UpdateManager.DoUpdate(markId110)
    
    componentPositioner22.EndAssemblyConstraints()
    
    logicalobjects9 = addComponentBuilder11.GetLogicalObjectsHavingUnassignedRequiredAttributes()
    
    addComponentBuilder11.ComponentName = "PIN"
    
    nXObject10 = addComponentBuilder11.Commit()
    
    errorList9 = addComponentBuilder11.GetOperationFailures()
    
    errorList9.Dispose()
    theSession.DeleteUndoMark(markId111, None)
    
    theSession.SetUndoMarkName(markId109, "Add Component")
    
    addComponentBuilder11.Destroy()
    
    workPart.Points.DeletePoint(point530)
    
    componentPositioner22.PrimaryArrangement = NXOpen.Assemblies.Arrangement.Null
    
    theSession.DeleteUndoMark(markId110, None)
    
    markId113 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Visible, "Start")
    
    addComponentBuilder12 = workPart.AssemblyManager.CreateAddComponentBuilder()
    
    componentPositioner23 = workPart.ComponentAssembly.Positioner
    
    componentPositioner23.ClearNetwork()
    
    componentPositioner23.PrimaryArrangement = arrangement1
    
    componentPositioner23.BeginAssemblyConstraints()
    
    allowInterpartPositioning22 = theSession.Preferences.Assemblies.InterpartPositioning
    
    expression219 = workPart.Expressions.CreateSystemExpressionWithUnits("1.0", NXOpen.Unit.Null)
    
    expression220 = workPart.Expressions.CreateSystemExpressionWithUnits("1.0", unit1)
    
    expression221 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit1)
    
    expression222 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit2)
    
    expression223 = workPart.Expressions.CreateSystemExpressionWithUnits("1", NXOpen.Unit.Null)
    
    expression224 = workPart.Expressions.CreateSystemExpressionWithUnits("1.0", unit1)
    
    expression225 = workPart.Expressions.CreateSystemExpressionWithUnits("0", unit1)
    
    expression226 = workPart.Expressions.CreateSystemExpressionWithUnits("0", unit2)
    
    network23 = componentPositioner23.EstablishNetwork()
    
    componentNetwork23 = network23
    componentNetwork23.MoveObjectsState = True
    
    componentNetwork23.DisplayComponent = NXOpen.Assemblies.Component.Null
    
    theSession.SetUndoMarkName(markId113, "Add Component Dialog")
    
    componentNetwork23.MoveObjectsState = True
    
    markId114 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "Assembly Constraints Update")
    
    addComponentBuilder12.SetComponentAnchor(NXOpen.Assemblies.ProductInterface.InterfaceObject.Null)
    
    addComponentBuilder12.SetInitialLocationType(NXOpen.Assemblies.AddComponentBuilder.LocationType.Snap)
    
    addComponentBuilder12.SetCount(1)
    
    addComponentBuilder12.SetScatterOption(True)
    
    addComponentBuilder12.ReferenceSet = "Unknown"
    
    addComponentBuilder12.Layer = -1
    
    # ----------------------------------------------
    #   Dialog Begin Add Component
    # ----------------------------------------------
    addComponentBuilder12.ReferenceSet = "Use Model"
    
    addComponentBuilder12.Layer = -1
    
    partstouse12 = [NXOpen.BasePart.Null] * 1 
    partstouse12[0] = part4
    addComponentBuilder12.SetPartsToAdd(partstouse12)
    
    productinterfaceobjects12 = addComponentBuilder12.GetAllProductInterfaceObjects()
    
    coordinates17 = NXOpen.Point3d(-120.18215939379681, 10.653164470471033, -7.1054273576010019e-15)
    point533 = workPart.Points.CreatePoint(coordinates17)
    
    coordinates18 = NXOpen.Point3d(-120.18215939379681, 10.653164470471033, -7.1054273576010019e-15)
    point534 = workPart.Points.CreatePoint(coordinates18)
    
    origin17 = NXOpen.Point3d(-120.18215939379681, 10.653164470471033, -7.1054273576010019e-15)
    vector17 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    direction524 = workPart.Directions.CreateDirection(origin17, vector17, NXOpen.SmartObject.UpdateOption.WithinModeling)
    
    origin18 = NXOpen.Point3d(-120.18215939379681, 10.653164470471033, -7.1054273576010019e-15)
    vector18 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    direction525 = workPart.Directions.CreateDirection(origin18, vector18, NXOpen.SmartObject.UpdateOption.WithinModeling)
    
    xform10 = workPart.Xforms.CreateXformByPointXDirZDir(point534, direction525, direction524, NXOpen.SmartObject.UpdateOption.WithinModeling, 0.625)
    
    cartesianCoordinateSystem10 = workPart.CoordinateSystems.CreateCoordinateSystem(xform10, NXOpen.SmartObject.UpdateOption.WithinModeling)
    
    point535 = NXOpen.Point3d(-120.18215939379681, 10.653164470471033, -7.1054273576010019e-15)
    orientation10 = NXOpen.Matrix3x3()
    
    orientation10.Xx = 1.0
    orientation10.Xy = 0.0
    orientation10.Xz = 0.0
    orientation10.Yx = 0.0
    orientation10.Yy = 1.0
    orientation10.Yz = 0.0
    orientation10.Zx = 0.0
    orientation10.Zy = 0.0
    orientation10.Zz = 1.0
    addComponentBuilder12.SetInitialLocationAndOrientation(point535, orientation10)
    
    movableObjects27 = [NXOpen.NXObject.Null] * 1 
    component18 = workPart.ComponentAssembly.RootComponent.FindObject("COMPONENT pin 1")
    movableObjects27[0] = component18
    componentNetwork23.SetMovingGroup(movableObjects27)
    
    # ----------------------------------------------
    #   Menu: Orient View->Top
    # ----------------------------------------------
    workPart.ModelingViews.WorkView.Orient(NXOpen.View.Canned.Top, NXOpen.View.ScaleAdjustment.Fit)
    
    markId115 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Visible, "Transform Origin")
    
    loaded34 = componentNetwork23.IsReferencedGeometryLoaded()
    
    componentNetwork23.BeginDrag()
    
    point536 = NXOpen.Point3d(-180.18215991533745, 20.653164712614902, 60.006091371178627)
    direction526 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork23.DragByRay(point536, direction526)
    
    point537 = NXOpen.Point3d(-125.67807097924386, 41.704868756650662, 60.006091371178627)
    direction527 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork23.DragByRay(point537, direction527)
    
    point538 = NXOpen.Point3d(-98.736516220459606, 54.767440760909693, 60.006091371178627)
    direction528 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork23.DragByRay(point538, direction528)
    
    point539 = NXOpen.Point3d(-93.021640968596273, 58.305220678729853, 60.006091371178627)
    direction529 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork23.DragByRay(point539, direction529)
    
    point540 = NXOpen.Point3d(-90.5724087177977, 60.754452929528412, 60.006091371178627)
    direction530 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork23.DragByRay(point540, direction530)
    
    point541 = NXOpen.Point3d(-88.123176466999126, 63.203685180326985, 60.006091371178627)
    direction531 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork23.DragByRay(point541, direction531)
    
    point542 = NXOpen.Point3d(-87.03462879997754, 64.564369764103972, 60.006091371178627)
    direction532 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork23.DragByRay(point542, direction532)
    
    point543 = NXOpen.Point3d(-85.673944216200567, 66.197191264636345, 60.006091371178627)
    direction533 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork23.DragByRay(point543, direction533)
    
    point544 = NXOpen.Point3d(-84.857533465934367, 66.741465098147131, 60.006091371178627)
    direction534 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork23.DragByRay(point544, direction534)
    
    point545 = NXOpen.Point3d(-82.952575048646594, 67.830012765168732, 60.006091371178627)
    direction535 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork23.DragByRay(point545, direction535)
    
    point546 = NXOpen.Point3d(-81.319753548114193, 68.918560432190318, 60.006091371178627)
    direction536 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork23.DragByRay(point546, direction536)
    
    point547 = NXOpen.Point3d(-80.23120588109262, 69.734971182456505, 60.006091371178627)
    direction537 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork23.DragByRay(point547, direction537)
    
    point548 = NXOpen.Point3d(-78.870521297315634, 70.823518849478077, 60.006091371178627)
    direction538 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork23.DragByRay(point548, direction538)
    
    point549 = NXOpen.Point3d(-77.237699796783261, 71.912066516499678, 60.006091371178627)
    direction539 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork23.DragByRay(point549, direction539)
    
    point550 = NXOpen.Point3d(-76.421289046517074, 72.728477266765864, 60.006091371178627)
    direction540 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork23.DragByRay(point550, direction540)
    
    point551 = NXOpen.Point3d(-76.421289046517074, 72.728477266765864, 60.006091371178627)
    direction541 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork23.DragByRay(point551, direction541)
    
    point552 = NXOpen.Point3d(-75.604878296250888, 73.000614183521265, 60.006091371178627)
    direction542 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork23.DragByRay(point552, direction542)
    
    point553 = NXOpen.Point3d(-75.060604462740102, 73.544888017032051, 60.006091371178627)
    direction543 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork23.DragByRay(point553, direction543)
    
    point554 = NXOpen.Point3d(-73.699919878963115, 75.177709517564438, 60.006091371178627)
    direction544 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork23.DragByRay(point554, direction544)
    
    point555 = NXOpen.Point3d(-73.155646045452329, 75.994120267830638, 60.006091371178627)
    direction545 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork23.DragByRay(point555, direction545)
    
    point556 = NXOpen.Point3d(-72.883509128696915, 76.538394101341424, 60.006091371178627)
    direction546 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork23.DragByRay(point556, direction546)
    
    point557 = NXOpen.Point3d(-72.611372211941514, 77.082667934852211, 60.006091371178627)
    direction547 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork23.DragByRay(point557, direction547)
    
    point558 = NXOpen.Point3d(-72.611372211941514, 77.626941768362997, 60.006091371178627)
    direction548 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork23.DragByRay(point558, direction548)
    
    point559 = NXOpen.Point3d(-72.611372211941514, 77.899078685118411, 60.006091371178627)
    direction549 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork23.DragByRay(point559, direction549)
    
    point560 = NXOpen.Point3d(-72.611372211941514, 78.715489435384598, 60.006091371178627)
    direction550 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork23.DragByRay(point560, direction550)
    
    point561 = NXOpen.Point3d(-72.611372211941514, 78.987626352139984, 60.006091371178627)
    direction551 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork23.DragByRay(point561, direction551)
    
    point562 = NXOpen.Point3d(-72.611372211941514, 78.987626352139984, 60.006091371178627)
    direction552 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork23.DragByRay(point562, direction552)
    
    point563 = NXOpen.Point3d(-72.611372211941514, 79.259763268895384, 60.006091371178627)
    direction553 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork23.DragByRay(point563, direction553)
    
    point564 = NXOpen.Point3d(-72.611372211941514, 79.804037102406184, 60.006091371178627)
    direction554 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork23.DragByRay(point564, direction554)
    
    point565 = NXOpen.Point3d(-72.611372211941514, 80.07617401916157, 60.006091371178627)
    direction555 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork23.DragByRay(point565, direction555)
    
    point566 = NXOpen.Point3d(-72.611372211941514, 80.07617401916157, 60.006091371178627)
    direction556 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork23.DragByRay(point566, direction556)
    
    point567 = NXOpen.Point3d(-72.611372211941514, 80.62044785267237, 60.006091371178627)
    direction557 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork23.DragByRay(point567, direction557)
    
    point568 = NXOpen.Point3d(-72.611372211941514, 80.892584769427771, 60.006091371178627)
    direction558 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork23.DragByRay(point568, direction558)
    
    point569 = NXOpen.Point3d(-72.611372211941514, 80.892584769427771, 60.006091371178627)
    direction559 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork23.DragByRay(point569, direction559)
    
    point570 = NXOpen.Point3d(-72.611372211941514, 81.164721686183157, 60.006091371178627)
    direction560 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork23.DragByRay(point570, direction560)
    
    point571 = NXOpen.Point3d(-72.611372211941514, 81.164721686183157, 60.006091371178627)
    direction561 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork23.DragByRay(point571, direction561)
    
    point572 = NXOpen.Point3d(-72.339235295186128, 81.708995519693943, 60.006091371178627)
    direction562 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork23.DragByRay(point572, direction562)
    
    point573 = NXOpen.Point3d(-72.339235295186128, 81.708995519693943, 60.006091371178627)
    direction563 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork23.DragByRay(point573, direction563)
    
    point574 = NXOpen.Point3d(-72.339235295186128, 81.708995519693943, 60.006091371178627)
    direction564 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork23.DragByRay(point574, direction564)
    
    point575 = NXOpen.Point3d(-72.339235295186128, 81.708995519693943, 60.006091371178627)
    direction565 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork23.DragByRay(point575, direction565)
    
    componentNetwork23.EndDrag()
    
    componentNetwork23.ResetDisplay()
    
    componentNetwork23.ApplyToModel()
    
    markId116 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "Add Component")
    
    markId117 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "AddComponent on_apply")
    
    componentNetwork23.Solve()
    
    componentPositioner23.ClearNetwork()
    
    nErrs39 = theSession.UpdateManager.AddToDeleteList(componentNetwork23)
    
    nErrs40 = theSession.UpdateManager.DoUpdate(markId114)
    
    componentPositioner23.EndAssemblyConstraints()
    
    logicalobjects10 = addComponentBuilder12.GetLogicalObjectsHavingUnassignedRequiredAttributes()
    
    addComponentBuilder12.ComponentName = "PIN"
    
    nXObject11 = addComponentBuilder12.Commit()
    
    errorList10 = addComponentBuilder12.GetOperationFailures()
    
    errorList10.Dispose()
    theSession.DeleteUndoMark(markId116, None)
    
    theSession.SetUndoMarkName(markId113, "Add Component")
    
    addComponentBuilder12.Destroy()
    
    workPart.Points.DeletePoint(point533)
    
    componentPositioner23.PrimaryArrangement = NXOpen.Assemblies.Arrangement.Null
    
    theSession.DeleteUndoMark(markId114, None)
    
    theSession.DeleteUndoMark(markId115, None)
    
    markId118 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Visible, "Start")
    
    addComponentBuilder13 = workPart.AssemblyManager.CreateAddComponentBuilder()
    
    componentPositioner24 = workPart.ComponentAssembly.Positioner
    
    componentPositioner24.ClearNetwork()
    
    componentPositioner24.PrimaryArrangement = arrangement1
    
    componentPositioner24.BeginAssemblyConstraints()
    
    allowInterpartPositioning23 = theSession.Preferences.Assemblies.InterpartPositioning
    
    expression227 = workPart.Expressions.CreateSystemExpressionWithUnits("1.0", NXOpen.Unit.Null)
    
    expression228 = workPart.Expressions.CreateSystemExpressionWithUnits("1.0", unit1)
    
    expression229 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit1)
    
    expression230 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit2)
    
    expression231 = workPart.Expressions.CreateSystemExpressionWithUnits("1", NXOpen.Unit.Null)
    
    expression232 = workPart.Expressions.CreateSystemExpressionWithUnits("1.0", unit1)
    
    expression233 = workPart.Expressions.CreateSystemExpressionWithUnits("0", unit1)
    
    expression234 = workPart.Expressions.CreateSystemExpressionWithUnits("0", unit2)
    
    network24 = componentPositioner24.EstablishNetwork()
    
    componentNetwork24 = network24
    componentNetwork24.MoveObjectsState = True
    
    componentNetwork24.DisplayComponent = NXOpen.Assemblies.Component.Null
    
    theSession.SetUndoMarkName(markId118, "Add Component Dialog")
    
    componentNetwork24.MoveObjectsState = True
    
    markId119 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "Assembly Constraints Update")
    
    addComponentBuilder13.SetComponentAnchor(NXOpen.Assemblies.ProductInterface.InterfaceObject.Null)
    
    addComponentBuilder13.SetInitialLocationType(NXOpen.Assemblies.AddComponentBuilder.LocationType.Snap)
    
    addComponentBuilder13.SetCount(1)
    
    addComponentBuilder13.SetScatterOption(True)
    
    addComponentBuilder13.ReferenceSet = "Unknown"
    
    addComponentBuilder13.Layer = -1
    
    addComponentBuilder13.ReferenceSet = "Use Model"
    
    addComponentBuilder13.Layer = -1
    
    partstouse13 = [NXOpen.BasePart.Null] * 1 
    partstouse13[0] = part4
    addComponentBuilder13.SetPartsToAdd(partstouse13)
    
    productinterfaceobjects13 = addComponentBuilder13.GetAllProductInterfaceObjects()
    
    componentPositioner24.ClearNetwork()
    
    addComponentBuilder13.RemoveAddedComponents()
    
    addComponentBuilder13.Destroy()
    
    componentPositioner24.PrimaryArrangement = NXOpen.Assemblies.Arrangement.Null
    
    componentPositioner24.EndAssemblyConstraints()
    
    theSession.DeleteUndoMark(markId119, None)
    
    theSession.UndoToMark(markId118, None)
    
    theSession.DeleteUndoMark(markId118, None)
    
    # ----------------------------------------------
    #   Menu: Assemblies->Component Position->Move Component...
    # ----------------------------------------------
    markId120 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Visible, "Start")
    
    componentPositioner25 = workPart.ComponentAssembly.Positioner
    
    componentPositioner25.ClearNetwork()
    
    componentPositioner25.PrimaryArrangement = arrangement1
    
    componentPositioner25.BeginMoveComponent()
    
    allowInterpartPositioning24 = theSession.Preferences.Assemblies.InterpartPositioning
    
    expression235 = workPart.Expressions.CreateSystemExpressionWithUnits("1.0", NXOpen.Unit.Null)
    
    expression236 = workPart.Expressions.CreateSystemExpressionWithUnits("1.0", unit1)
    
    expression237 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit1)
    
    expression238 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit2)
    
    expression239 = workPart.Expressions.CreateSystemExpressionWithUnits("1", NXOpen.Unit.Null)
    
    expression240 = workPart.Expressions.CreateSystemExpressionWithUnits("1.0", unit1)
    
    expression241 = workPart.Expressions.CreateSystemExpressionWithUnits("0", unit1)
    
    expression242 = workPart.Expressions.CreateSystemExpressionWithUnits("0", unit2)
    
    network25 = componentPositioner25.EstablishNetwork()
    
    componentNetwork25 = network25
    componentNetwork25.MoveObjectsState = True
    
    componentNetwork25.DisplayComponent = NXOpen.Assemblies.Component.Null
    
    componentNetwork25.NetworkArrangementsMode = NXOpen.Positioning.ComponentNetwork.ArrangementsMode.Existing
    
    expression243 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit1)
    
    expression244 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit1)
    
    expression245 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit1)
    
    expression246 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit1)
    
    expression247 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit2)
    
    componentNetwork25.RemoveAllConstraints()
    
    movableObjects28 = []
    componentNetwork25.SetMovingGroup(movableObjects28)
    
    componentNetwork25.Solve()
    
    theSession.SetUndoMarkName(markId120, "Move Component Dialog")
    
    componentNetwork25.MoveObjectsState = True
    
    componentNetwork25.NetworkArrangementsMode = NXOpen.Positioning.ComponentNetwork.ArrangementsMode.Existing
    
    markId121 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "Move Component Update")
    
    componentNetwork25.RemoveAllConstraints()
    
    movableObjects29 = [NXOpen.NXObject.Null] * 1 
    component19 = nXObject10
    movableObjects29[0] = component19
    componentNetwork25.SetMovingGroup(movableObjects29)
    
    componentNetwork25.Solve()
    
    markId122 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Visible, "Transform Origin")
    
    loaded35 = componentNetwork25.IsReferencedGeometryLoaded()
    
    componentNetwork25.BeginDrag()
    
    point576 = NXOpen.Point3d(-57.881090142600272, -98.479903591705153, 60.006091371178627)
    direction566 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork25.DragByRay(point576, direction566)
    
    point577 = NXOpen.Point3d(-69.617866127632169, -64.428528777954014, 60.006091371178627)
    direction567 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork25.DragByRay(point577, direction567)
    
    point578 = NXOpen.Point3d(-73.427782962207715, -55.720147441781336, 60.006091371178627)
    direction568 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork25.DragByRay(point578, direction568)
    
    point579 = NXOpen.Point3d(-75.060604462740102, -50.821682940184189, 60.006091371178627)
    direction569 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork25.DragByRay(point579, direction569)
    
    point580 = NXOpen.Point3d(-75.604878296250888, -48.372450689385609, 60.006091371178627)
    direction570 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork25.DragByRay(point580, direction570)
    
    point581 = NXOpen.Point3d(-75.877015213006288, -46.467492272097836, 60.006091371178627)
    direction571 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork25.DragByRay(point581, direction571)
    
    point582 = NXOpen.Point3d(-75.877015213006288, -45.378944605076256, 60.006091371178627)
    direction572 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork25.DragByRay(point582, direction572)
    
    point583 = NXOpen.Point3d(-75.877015213006288, -43.746123104543869, 60.006091371178627)
    direction573 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork25.DragByRay(point583, direction573)
    
    point584 = NXOpen.Point3d(-75.877015213006288, -42.929712354277697, 60.006091371178627)
    direction574 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork25.DragByRay(point584, direction574)
    
    point585 = NXOpen.Point3d(-75.332741379495474, -42.113301604011504, 60.006091371178627)
    direction575 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork25.DragByRay(point585, direction575)
    
    point586 = NXOpen.Point3d(-75.060604462740102, -41.569027770500711, 60.006091371178627)
    direction576 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork25.DragByRay(point586, direction576)
    
    point587 = NXOpen.Point3d(-74.788467545984687, -41.024753936989903, 60.006091371178627)
    direction577 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork25.DragByRay(point587, direction577)
    
    point588 = NXOpen.Point3d(-74.788467545984687, -40.48048010347911, 60.006091371178627)
    direction578 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork25.DragByRay(point588, direction578)
    
    point589 = NXOpen.Point3d(-74.788467545984687, -39.391932436457537, 60.006091371178627)
    direction579 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork25.DragByRay(point589, direction579)
    
    point590 = NXOpen.Point3d(-74.788467545984687, -38.575521686191337, 60.006091371178627)
    direction580 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork25.DragByRay(point590, direction580)
    
    point591 = NXOpen.Point3d(-74.788467545984687, -37.759110935925143, 60.006091371178627)
    direction581 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork25.DragByRay(point591, direction581)
    
    point592 = NXOpen.Point3d(-74.788467545984687, -37.486974019169764, 60.006091371178627)
    direction582 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork25.DragByRay(point592, direction582)
    
    point593 = NXOpen.Point3d(-74.516330629229316, -37.214837102414357, 60.006091371178627)
    direction583 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork25.DragByRay(point593, direction583)
    
    point594 = NXOpen.Point3d(-73.972056795718501, -36.94270018565895, 60.006091371178627)
    direction584 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork25.DragByRay(point594, direction584)
    
    point595 = NXOpen.Point3d(-73.972056795718501, -36.94270018565895, 60.006091371178627)
    direction585 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork25.DragByRay(point595, direction585)
    
    point596 = NXOpen.Point3d(-73.699919878963115, -36.94270018565895, 60.006091371178627)
    direction586 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork25.DragByRay(point596, direction586)
    
    point597 = NXOpen.Point3d(-73.427782962207715, -36.670563268903571, 60.006091371178627)
    direction587 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork25.DragByRay(point597, direction587)
    
    point598 = NXOpen.Point3d(-73.427782962207715, -36.670563268903571, 60.006091371178627)
    direction588 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork25.DragByRay(point598, direction588)
    
    point599 = NXOpen.Point3d(-73.155646045452329, -36.398426352148164, 60.006091371178627)
    direction589 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork25.DragByRay(point599, direction589)
    
    point600 = NXOpen.Point3d(-72.883509128696915, -36.398426352148164, 60.006091371178627)
    direction590 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork25.DragByRay(point600, direction590)
    
    point601 = NXOpen.Point3d(-72.611372211941514, -36.126289435392778, 60.006091371178627)
    direction591 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork25.DragByRay(point601, direction591)
    
    point602 = NXOpen.Point3d(-72.611372211941514, -36.126289435392778, 60.006091371178627)
    direction592 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork25.DragByRay(point602, direction592)
    
    point603 = NXOpen.Point3d(-72.611372211941514, -36.126289435392778, 60.006091371178627)
    direction593 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork25.DragByRay(point603, direction593)
    
    point604 = NXOpen.Point3d(-72.611372211941514, -36.126289435392778, 60.006091371178627)
    direction594 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    componentNetwork25.DragByRay(point604, direction594)
    
    componentNetwork25.EndDrag()
    
    componentNetwork25.ResetDisplay()
    
    componentNetwork25.ApplyToModel()
    
    # ----------------------------------------------
    #   Menu: Orient View->Left
    # ----------------------------------------------
    workPart.ModelingViews.WorkView.Orient(NXOpen.View.Canned.Left, NXOpen.View.ScaleAdjustment.Fit)
    
    # ----------------------------------------------
    #   Menu: Rendering Style->Partially Shaded
    # ----------------------------------------------
    workPart.ModelingViews.WorkView.RenderingStyle = NXOpen.View.RenderingStyleType.PartiallyShaded
    
    markId123 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Visible, "Transform Origin")
    
    loaded36 = componentNetwork25.IsReferencedGeometryLoaded()
    
    componentNetwork25.BeginDrag()
    
    point605 = NXOpen.Point3d(-72.611372211941514, -36.126289435392778, 60.006091371178627)
    direction595 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork25.DragByRay(point605, direction595)
    
    point606 = NXOpen.Point3d(-72.611372211941514, -36.447411069423822, 20.553597864441681)
    direction596 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork25.DragByRay(point606, direction596)
    
    point607 = NXOpen.Point3d(-72.611372211941514, -36.447411069423822, 6.3193826812001745)
    direction597 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork25.DragByRay(point607, direction597)
    
    point608 = NXOpen.Point3d(-72.611372211941514, -36.447411069423822, -5.1054479264015455)
    direction598 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork25.DragByRay(point608, direction598)
    
    point609 = NXOpen.Point3d(-72.611372211941514, -36.447411069423822, -11.28609399280904)
    direction599 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork25.DragByRay(point609, direction599)
    
    point610 = NXOpen.Point3d(-72.611372211941514, -36.447411069423822, -14.095478568448808)
    direction600 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork25.DragByRay(point610, direction600)
    
    point611 = NXOpen.Point3d(-72.611372211941514, -36.447411069423822, -16.717570839045923)
    direction601 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork25.DragByRay(point611, direction601)
    
    point612 = NXOpen.Point3d(-72.611372211941514, -36.447411069423822, -19.714247719728352)
    direction602 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork25.DragByRay(point612, direction602)
    
    point613 = NXOpen.Point3d(-72.611372211941514, -36.634703374466476, -21.212586160069559)
    direction603 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork25.DragByRay(point613, direction603)
    
    point614 = NXOpen.Point3d(-72.611372211941514, -37.009287984551761, -22.52363229536812)
    direction604 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork25.DragByRay(point614, direction604)
    
    point615 = NXOpen.Point3d(-72.611372211941514, -37.383872594637076, -23.27280151553872)
    direction605 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork25.DragByRay(point615, direction605)
    
    point616 = NXOpen.Point3d(-72.611372211941514, -37.383872594637076, -23.460093820581374)
    direction606 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork25.DragByRay(point616, direction606)
    
    point617 = NXOpen.Point3d(-72.611372211941514, -37.758457204722362, -23.834678430666674)
    direction607 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork25.DragByRay(point617, direction607)
    
    point618 = NXOpen.Point3d(-72.611372211941514, -37.945749509765015, -24.021970735709314)
    direction608 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork25.DragByRay(point618, direction608)
    
    point619 = NXOpen.Point3d(-72.611372211941514, -38.32033411985033, -24.021970735709314)
    direction609 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork25.DragByRay(point619, direction609)
    
    point620 = NXOpen.Point3d(-72.611372211941514, -38.32033411985033, -24.209263040751974)
    direction610 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork25.DragByRay(point620, direction610)
    
    point621 = NXOpen.Point3d(-72.611372211941514, -38.50762642489299, -24.209263040751974)
    direction611 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork25.DragByRay(point621, direction611)
    
    point622 = NXOpen.Point3d(-72.611372211941514, -38.694918729935615, -24.209263040751974)
    direction612 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork25.DragByRay(point622, direction612)
    
    point623 = NXOpen.Point3d(-72.611372211941514, -39.06950334002093, -24.209263040751974)
    direction613 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork25.DragByRay(point623, direction613)
    
    point624 = NXOpen.Point3d(-72.611372211941514, -39.06950334002093, -24.209263040751974)
    direction614 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork25.DragByRay(point624, direction614)
    
    point625 = NXOpen.Point3d(-72.611372211941514, -39.06950334002093, -24.583847650837274)
    direction615 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork25.DragByRay(point625, direction615)
    
    point626 = NXOpen.Point3d(-72.611372211941514, -39.06950334002093, -24.583847650837274)
    direction616 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork25.DragByRay(point626, direction616)
    
    point627 = NXOpen.Point3d(-72.611372211941514, -39.06950334002093, -24.771139955879928)
    direction617 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork25.DragByRay(point627, direction617)
    
    point628 = NXOpen.Point3d(-72.611372211941514, -39.06950334002093, -24.771139955879928)
    direction618 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork25.DragByRay(point628, direction618)
    
    point629 = NXOpen.Point3d(-72.611372211941514, -39.06950334002093, -24.771139955879928)
    direction619 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork25.DragByRay(point629, direction619)
    
    point630 = NXOpen.Point3d(-72.611372211941514, -39.06950334002093, -24.771139955879928)
    direction620 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork25.DragByRay(point630, direction620)
    
    componentNetwork25.EndDrag()
    
    componentNetwork25.ResetDisplay()
    
    componentNetwork25.ApplyToModel()
    
    scaleAboutPoint59 = NXOpen.Point3d(-47.853183938397393, 10.67566138743112, 0.0)
    viewCenter59 = NXOpen.Point3d(47.853183938397393, -10.67566138743112, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(0.80000000000000004, scaleAboutPoint59, viewCenter59)
    
    scaleAboutPoint60 = NXOpen.Point3d(72.926941275982344, -62.040576045378224, 0.0)
    viewCenter60 = NXOpen.Point3d(-72.926941275982344, 62.040576045378224, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(1.25, scaleAboutPoint60, viewCenter60)
    
    scaleAboutPoint61 = NXOpen.Point3d(60.027183766169713, -50.007045446387899, 0.0)
    viewCenter61 = NXOpen.Point3d(-60.027183766169713, 50.007045446387863, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(1.25, scaleAboutPoint61, viewCenter61)
    
    scaleAboutPoint62 = NXOpen.Point3d(48.021747012935812, -40.005636357110326, 0.0)
    viewCenter62 = NXOpen.Point3d(-48.021747012935798, 40.005636357110319, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(1.25, scaleAboutPoint62, viewCenter62)
    
    scaleAboutPoint63 = NXOpen.Point3d(-6.892356825569566, -11.507239221820496, 0.0)
    viewCenter63 = NXOpen.Point3d(6.892356825569566, 11.507239221820477, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(1.25, scaleAboutPoint63, viewCenter63)
    
    scaleAboutPoint64 = NXOpen.Point3d(-3.5001185966370794, -10.260621639456613, 0.0)
    viewCenter64 = NXOpen.Point3d(3.5001185966370478, 10.260621639456598, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(1.25, scaleAboutPoint64, viewCenter64)
    
    scaleAboutPoint65 = NXOpen.Point3d(-1.4192261706912093, -8.8222167367290503, 0.0)
    viewCenter65 = NXOpen.Point3d(1.419226170691184, 8.8222167367290378, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(1.25, scaleAboutPoint65, viewCenter65)
    
    scaleAboutPoint66 = NXOpen.Point3d(-0.58303345390558092, -7.1805172744159931, 0.0)
    viewCenter66 = NXOpen.Point3d(0.5830334539055555, 7.180517274415978, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(1.25, scaleAboutPoint66, viewCenter66)
    
    scaleAboutPoint67 = NXOpen.Point3d(21.922057866849478, -8.9848523843974455, 0.0)
    viewCenter67 = NXOpen.Point3d(-21.92205786684951, 8.9848523843974295, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(0.80000000000000004, scaleAboutPoint67, viewCenter67)
    
    scaleAboutPoint68 = NXOpen.Point3d(29.120986724020383, -11.231065480496804, 0.0)
    viewCenter68 = NXOpen.Point3d(-29.120986724020405, 11.231065480496788, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(1.25, scaleAboutPoint68, viewCenter68)
    
    scaleAboutPoint69 = NXOpen.Point3d(-14.901107642976099, 0.93285352624891105, 0.0)
    viewCenter69 = NXOpen.Point3d(14.901107642976065, -0.93285352624891915, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(0.80000000000000004, scaleAboutPoint69, viewCenter69)
    
    scaleAboutPoint70 = NXOpen.Point3d(-18.687756496236492, 1.1660669078111441, 0.0)
    viewCenter70 = NXOpen.Point3d(18.687756496236467, -1.1660669078111441, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(0.80000000000000004, scaleAboutPoint70, viewCenter70)
    
    scaleAboutPoint71 = NXOpen.Point3d(21.595252272949775, -15.036125916512107, 0.0)
    viewCenter71 = NXOpen.Point3d(-21.595252272949804, 15.036125916512107, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(1.25, scaleAboutPoint71, viewCenter71)
    
    scaleAboutPoint72 = NXOpen.Point3d(12.918793899697128, -10.985577710431297, 0.0)
    viewCenter72 = NXOpen.Point3d(-12.918793899697153, 10.985577710431297, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(1.25, scaleAboutPoint72, viewCenter72)
    
    scaleAboutPoint73 = NXOpen.Point3d(4.1487433141069943, -7.4137306559782177, 0.0)
    viewCenter73 = NXOpen.Point3d(-4.1487433141070262, 7.4137306559782097, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(1.25, scaleAboutPoint73, viewCenter73)
    
    scaleAboutPoint74 = NXOpen.Point3d(-1.9442631389187968, -2.7887410679441258, 0.0)
    viewCenter74 = NXOpen.Point3d(1.9442631389187806, 2.7887410679441289, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(1.25, scaleAboutPoint74, viewCenter74)
    
    scaleAboutPoint75 = NXOpen.Point3d(-1.5554105111350378, -2.2309928543552986, 0.0)
    viewCenter75 = NXOpen.Point3d(1.5554105111350249, 2.2309928543553039, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(1.25, scaleAboutPoint75, viewCenter75)
    
    markId124 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Visible, "Transform Origin")
    
    loaded37 = componentNetwork25.IsReferencedGeometryLoaded()
    
    componentNetwork25.BeginDrag()
    
    point631 = NXOpen.Point3d(-72.611372211941514, -39.06950334002093, -24.771139955879928)
    direction621 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork25.DragByRay(point631, direction621)
    
    point632 = NXOpen.Point3d(-72.611372211941514, -39.125346893160739, -25.111882590509961)
    direction622 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork25.DragByRay(point632, direction622)
    
    point633 = NXOpen.Point3d(-72.611372211941514, -39.125346893160739, -25.212434381128791)
    direction623 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork25.DragByRay(point633, direction623)
    
    point634 = NXOpen.Point3d(-72.611372211941514, -39.125346893160739, -25.312986171747621)
    direction624 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork25.DragByRay(point634, direction624)
    
    point635 = NXOpen.Point3d(-72.611372211941514, -39.150484840815444, -25.388400014711745)
    direction625 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork25.DragByRay(point635, direction625)
    
    point636 = NXOpen.Point3d(-72.611372211941514, -39.150484840815444, -25.388400014711745)
    direction626 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork25.DragByRay(point636, direction626)
    
    point637 = NXOpen.Point3d(-72.611372211941514, -39.17562278847015, -25.388400014711745)
    direction627 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork25.DragByRay(point637, direction627)
    
    point638 = NXOpen.Point3d(-72.611372211941514, -39.200760736124863, -25.338124119402327)
    direction628 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork25.DragByRay(point638, direction628)
    
    point639 = NXOpen.Point3d(-72.611372211941514, -39.200760736124863, -25.212434381128791)
    direction629 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork25.DragByRay(point639, direction629)
    
    point640 = NXOpen.Point3d(-72.611372211941514, -39.200760736124863, -25.13702053816467)
    direction630 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork25.DragByRay(point640, direction630)
    
    point641 = NXOpen.Point3d(-72.611372211941514, -39.17562278847015, -25.086744642855251)
    direction631 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork25.DragByRay(point641, direction631)
    
    point642 = NXOpen.Point3d(-72.611372211941514, -39.17562278847015, -25.061606695200545)
    direction632 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork25.DragByRay(point642, direction632)
    
    point643 = NXOpen.Point3d(-72.611372211941514, -39.150484840815444, -25.01133079989113)
    direction633 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork25.DragByRay(point643, direction633)
    
    point644 = NXOpen.Point3d(-72.611372211941514, -39.150484840815444, -25.01133079989113)
    direction634 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork25.DragByRay(point644, direction634)
    
    point645 = NXOpen.Point3d(-72.611372211941514, -39.125346893160739, -24.986192852236421)
    direction635 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork25.DragByRay(point645, direction635)
    
    point646 = NXOpen.Point3d(-72.611372211941514, -39.125346893160739, -24.986192852236421)
    direction636 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork25.DragByRay(point646, direction636)
    
    point647 = NXOpen.Point3d(-72.611372211941514, -39.100208945506033, -24.986192852236421)
    direction637 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork25.DragByRay(point647, direction637)
    
    point648 = NXOpen.Point3d(-72.611372211941514, -39.049933050196614, -24.961054904581715)
    direction638 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork25.DragByRay(point648, direction638)
    
    point649 = NXOpen.Point3d(-72.611372211941514, -39.049933050196614, -24.961054904581715)
    direction639 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork25.DragByRay(point649, direction639)
    
    point650 = NXOpen.Point3d(-72.611372211941514, -39.024795102541908, -24.935916956927009)
    direction640 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork25.DragByRay(point650, direction640)
    
    point651 = NXOpen.Point3d(-72.611372211941514, -39.024795102541908, -24.935916956927009)
    direction641 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork25.DragByRay(point651, direction641)
    
    point652 = NXOpen.Point3d(-72.611372211941514, -39.024795102541908, -24.9107790092723)
    direction642 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork25.DragByRay(point652, direction642)
    
    point653 = NXOpen.Point3d(-72.611372211941514, -39.024795102541908, -24.9107790092723)
    direction643 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork25.DragByRay(point653, direction643)
    
    point654 = NXOpen.Point3d(-72.611372211941514, -39.049933050196614, -24.9107790092723)
    direction644 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork25.DragByRay(point654, direction644)
    
    point655 = NXOpen.Point3d(-72.611372211941514, -39.100208945506033, -24.935916956927009)
    direction645 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork25.DragByRay(point655, direction645)
    
    point656 = NXOpen.Point3d(-72.611372211941514, -39.100208945506033, -24.935916956927009)
    direction646 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork25.DragByRay(point656, direction646)
    
    point657 = NXOpen.Point3d(-72.611372211941514, -39.125346893160739, -24.935916956927009)
    direction647 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork25.DragByRay(point657, direction647)
    
    point658 = NXOpen.Point3d(-72.611372211941514, -39.150484840815444, -24.961054904581715)
    direction648 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork25.DragByRay(point658, direction648)
    
    point659 = NXOpen.Point3d(-72.611372211941514, -39.17562278847015, -24.986192852236421)
    direction649 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork25.DragByRay(point659, direction649)
    
    point660 = NXOpen.Point3d(-72.611372211941514, -39.17562278847015, -24.986192852236421)
    direction650 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork25.DragByRay(point660, direction650)
    
    point661 = NXOpen.Point3d(-72.611372211941514, -39.150484840815444, -24.986192852236421)
    direction651 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork25.DragByRay(point661, direction651)
    
    point662 = NXOpen.Point3d(-72.611372211941514, -39.150484840815444, -24.986192852236421)
    direction652 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork25.DragByRay(point662, direction652)
    
    point663 = NXOpen.Point3d(-72.611372211941514, -39.125346893160739, -24.986192852236421)
    direction653 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork25.DragByRay(point663, direction653)
    
    point664 = NXOpen.Point3d(-72.611372211941514, -39.125346893160739, -24.986192852236421)
    direction654 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork25.DragByRay(point664, direction654)
    
    point665 = NXOpen.Point3d(-72.611372211941514, -39.100208945506033, -24.935916956927009)
    direction655 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork25.DragByRay(point665, direction655)
    
    point666 = NXOpen.Point3d(-72.611372211941514, -39.100208945506033, -24.935916956927009)
    direction656 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork25.DragByRay(point666, direction656)
    
    point667 = NXOpen.Point3d(-72.611372211941514, -39.100208945506033, -24.935916956927009)
    direction657 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork25.DragByRay(point667, direction657)
    
    point668 = NXOpen.Point3d(-72.611372211941514, -39.100208945506033, -24.935916956927009)
    direction658 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork25.DragByRay(point668, direction658)
    
    componentNetwork25.EndDrag()
    
    componentNetwork25.ResetDisplay()
    
    componentNetwork25.ApplyToModel()
    
    scaleAboutPoint76 = NXOpen.Point3d(6.9255045788719292, 3.795830095860846, 0.0)
    viewCenter76 = NXOpen.Point3d(-6.925504578871946, -3.795830095860846, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(0.80000000000000004, scaleAboutPoint76, viewCenter76)
    
    scaleAboutPoint77 = NXOpen.Point3d(8.782570461863461, 4.7447876198260595, 0.0)
    viewCenter77 = NXOpen.Point3d(-8.7825704618634752, -4.7447876198260568, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(0.80000000000000004, scaleAboutPoint77, viewCenter77)
    
    scaleAboutPoint78 = NXOpen.Point3d(11.33171546622366, 5.9309845247825743, 0.0)
    viewCenter78 = NXOpen.Point3d(-11.33171546622366, -5.9309845247825779, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(0.80000000000000004, scaleAboutPoint78, viewCenter78)
    
    scaleAboutPoint79 = NXOpen.Point3d(14.655619872910572, 7.5610233180175204, 0.0)
    viewCenter79 = NXOpen.Point3d(-14.655619872910579, -7.5610233180175204, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(0.80000000000000004, scaleAboutPoint79, viewCenter79)
    
    scaleAboutPoint80 = NXOpen.Point3d(19.73107951901487, 9.4512791475219, 0.0)
    viewCenter80 = NXOpen.Point3d(-19.73107951901488, -9.4512791475218965, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(0.80000000000000004, scaleAboutPoint80, viewCenter80)
    
    scaleAboutPoint81 = NXOpen.Point3d(29.19003015935133, 12.581248215857078, 0.0)
    viewCenter81 = NXOpen.Point3d(-29.19003015935133, -12.581248215857071, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(0.80000000000000004, scaleAboutPoint81, viewCenter81)
    
    scaleAboutPoint82 = NXOpen.Point3d(36.487537699189161, 15.726560269821348, 0.0)
    viewCenter82 = NXOpen.Point3d(-36.487537699189161, -15.726560269821348, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(0.80000000000000004, scaleAboutPoint82, viewCenter82)
    
    scaleAboutPoint83 = NXOpen.Point3d(45.609422123986455, 19.658200337276686, 0.0)
    viewCenter83 = NXOpen.Point3d(-45.609422123986455, -19.658200337276686, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(0.80000000000000004, scaleAboutPoint83, viewCenter83)
    
    scaleAboutPoint84 = NXOpen.Point3d(61.057291443904276, 23.074411981254634, 0.0)
    viewCenter84 = NXOpen.Point3d(-61.057291443904326, -23.074411981254649, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(0.80000000000000004, scaleAboutPoint84, viewCenter84)
    
    scaleAboutPoint85 = NXOpen.Point3d(77.070783525050956, 28.09384575639768, 0.0)
    viewCenter85 = NXOpen.Point3d(-77.070783525050985, -28.09384575639768, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(0.80000000000000004, scaleAboutPoint85, viewCenter85)
    
    markId125 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "Move Component")
    
    componentNetwork25.Solve()
    
    componentPositioner25.ClearNetwork()
    
    nErrs41 = theSession.UpdateManager.AddToDeleteList(componentNetwork25)
    
    componentPositioner25.DeleteNonPersistentConstraints()
    
    nErrs42 = theSession.UpdateManager.DoUpdate(markId121)
    
    theSession.DeleteUndoMark(markId125, None)
    
    theSession.SetUndoMarkName(markId120, "Move Component")
    
    componentPositioner25.EndMoveComponent()
    
    componentPositioner25.PrimaryArrangement = NXOpen.Assemblies.Arrangement.Null
    
    theSession.DeleteUndoMarksUpToMark(markId121, None, False)
    
    markId126 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Visible, "Start")
    
    componentPositioner26 = workPart.ComponentAssembly.Positioner
    
    componentPositioner26.ClearNetwork()
    
    componentPositioner26.PrimaryArrangement = arrangement1
    
    componentPositioner26.BeginMoveComponent()
    
    allowInterpartPositioning25 = theSession.Preferences.Assemblies.InterpartPositioning
    
    expression248 = workPart.Expressions.CreateSystemExpressionWithUnits("1.0", NXOpen.Unit.Null)
    
    expression249 = workPart.Expressions.CreateSystemExpressionWithUnits("1.0", unit1)
    
    expression250 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit1)
    
    expression251 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit2)
    
    expression252 = workPart.Expressions.CreateSystemExpressionWithUnits("1", NXOpen.Unit.Null)
    
    expression253 = workPart.Expressions.CreateSystemExpressionWithUnits("1.0", unit1)
    
    expression254 = workPart.Expressions.CreateSystemExpressionWithUnits("0", unit1)
    
    expression255 = workPart.Expressions.CreateSystemExpressionWithUnits("0", unit2)
    
    network26 = componentPositioner26.EstablishNetwork()
    
    componentNetwork26 = network26
    componentNetwork26.MoveObjectsState = True
    
    componentNetwork26.DisplayComponent = NXOpen.Assemblies.Component.Null
    
    componentNetwork26.NetworkArrangementsMode = NXOpen.Positioning.ComponentNetwork.ArrangementsMode.Existing
    
    expression256 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit1)
    
    expression257 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit1)
    
    expression258 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit1)
    
    expression259 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit1)
    
    expression260 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit2)
    
    componentNetwork26.RemoveAllConstraints()
    
    movableObjects30 = []
    componentNetwork26.SetMovingGroup(movableObjects30)
    
    componentNetwork26.Solve()
    
    theSession.SetUndoMarkName(markId126, "Move Component Dialog")
    
    componentNetwork26.MoveObjectsState = True
    
    componentNetwork26.NetworkArrangementsMode = NXOpen.Positioning.ComponentNetwork.ArrangementsMode.Existing
    
    markId127 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "Move Component Update")
    
    scaleAboutPoint86 = NXOpen.Point3d(-101.02078703238, -61.806460664074898, 0.0)
    viewCenter86 = NXOpen.Point3d(101.02078703238, 61.806460664074898, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(0.80000000000000004, scaleAboutPoint86, viewCenter86)
    
    scaleAboutPoint87 = NXOpen.Point3d(-99.060070713964748, -73.453700883914777, 0.0)
    viewCenter87 = NXOpen.Point3d(99.060070713964706, 73.453700883914749, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(0.80000000000000004, scaleAboutPoint87, viewCenter87)
    
    scaleAboutPoint88 = NXOpen.Point3d(-124.55669895902879, -92.548736671466315, 0.0)
    viewCenter88 = NXOpen.Point3d(124.55669895902879, 92.548736671466315, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(0.80000000000000004, scaleAboutPoint88, viewCenter88)
    
    scaleAboutPoint89 = NXOpen.Point3d(-176.27242088364758, 28.807166058806175, 0.0)
    viewCenter89 = NXOpen.Point3d(176.27242088364758, -28.807166058806214, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(1.25, scaleAboutPoint89, viewCenter89)
    
    scaleAboutPoint90 = NXOpen.Point3d(-141.01793670691805, 23.045732847044938, 0.0)
    viewCenter90 = NXOpen.Point3d(141.01793670691805, -23.045732847044999, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(1.25, scaleAboutPoint90, viewCenter90)
    
    componentNetwork26.RemoveAllConstraints()
    
    movableObjects31 = [NXOpen.NXObject.Null] * 1 
    component20 = nXObject11
    movableObjects31[0] = component20
    componentNetwork26.SetMovingGroup(movableObjects31)
    
    componentNetwork26.Solve()
    
    markId128 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Visible, "Transform Origin")
    
    loaded38 = componentNetwork26.IsReferencedGeometryLoaded()
    
    componentNetwork26.BeginDrag()
    
    point669 = NXOpen.Point3d(-72.339235295186128, 81.708995519693957, 60.006091371178627)
    direction659 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork26.DragByRay(point669, direction659)
    
    point670 = NXOpen.Point3d(-72.339235295186128, 81.700604172711778, 4.2887828495456484)
    direction660 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork26.DragByRay(point670, direction660)
    
    point671 = NXOpen.Point3d(-72.339235295186128, 81.700604172711778, -5.6611208558451924)
    direction661 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork26.DragByRay(point671, direction661)
    
    point672 = NXOpen.Point3d(-72.339235295186128, 81.700604172711778, -9.1728515753948976)
    direction662 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork26.DragByRay(point672, direction662)
    
    point673 = NXOpen.Point3d(-72.339235295186128, 81.700604172711778, -13.562514974832037)
    direction663 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork26.DragByRay(point673, direction663)
    
    point674 = NXOpen.Point3d(-72.339235295186128, 81.407959946082627, -15.903668787865186)
    direction664 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork26.DragByRay(point674, direction664)
    
    point675 = NXOpen.Point3d(-72.339235295186128, 81.407959946082627, -17.659534147640048)
    direction665 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork26.DragByRay(point675, direction665)
    
    point676 = NXOpen.Point3d(-72.339235295186128, 81.407959946082627, -19.122755280785764)
    direction666 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork26.DragByRay(point676, direction666)
    
    point677 = NXOpen.Point3d(-72.339235295186128, 81.407959946082627, -20.293332187302326)
    direction667 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork26.DragByRay(point677, direction667)
    
    point678 = NXOpen.Point3d(-72.339235295186128, 81.407959946082627, -21.171264867189755)
    direction668 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork26.DragByRay(point678, direction668)
    
    point679 = NXOpen.Point3d(-72.339235295186128, 81.407959946082627, -22.049197547077188)
    direction669 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork26.DragByRay(point679, direction669)
    
    point680 = NXOpen.Point3d(-72.339235295186128, 81.407959946082627, -22.341841773706317)
    direction670 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork26.DragByRay(point680, direction670)
    
    point681 = NXOpen.Point3d(-72.339235295186128, 81.407959946082627, -22.634486000335471)
    direction671 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork26.DragByRay(point681, direction671)
    
    point682 = NXOpen.Point3d(-72.339235295186128, 81.407959946082627, -22.634486000335471)
    direction672 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork26.DragByRay(point682, direction672)
    
    point683 = NXOpen.Point3d(-72.339235295186128, 81.407959946082627, -22.634486000335471)
    direction673 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork26.DragByRay(point683, direction673)
    
    point684 = NXOpen.Point3d(-72.339235295186128, 81.407959946082627, -22.634486000335471)
    direction674 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork26.DragByRay(point684, direction674)
    
    componentNetwork26.EndDrag()
    
    componentNetwork26.ResetDisplay()
    
    componentNetwork26.ApplyToModel()
    
    scaleAboutPoint91 = NXOpen.Point3d(-62.772186611951028, -39.799614821563402, 0.0)
    viewCenter91 = NXOpen.Point3d(62.772186611951078, 39.799614821563353, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(1.25, scaleAboutPoint91, viewCenter91)
    
    scaleAboutPoint92 = NXOpen.Point3d(-50.685980052167501, -34.649076432890496, 0.0)
    viewCenter92 = NXOpen.Point3d(50.685980052167501, 34.649076432890453, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(1.25, scaleAboutPoint92, viewCenter92)
    
    scaleAboutPoint93 = NXOpen.Point3d(-41.859830177032592, -30.715938026994827, 0.0)
    viewCenter93 = NXOpen.Point3d(41.859830177032563, 30.715938026994781, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(1.25, scaleAboutPoint93, viewCenter93)
    
    scaleAboutPoint94 = NXOpen.Point3d(-33.637697985660175, -24.872418109664114, 0.0)
    viewCenter94 = NXOpen.Point3d(33.637697985660161, 24.872418109664078, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(1.25, scaleAboutPoint94, viewCenter94)
    
    scaleAboutPoint95 = NXOpen.Point3d(-26.910158388528139, -19.897934487731298, 0.0)
    viewCenter95 = NXOpen.Point3d(26.910158388528139, 19.897934487731252, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(1.25, scaleAboutPoint95, viewCenter95)
    
    scaleAboutPoint96 = NXOpen.Point3d(-20.377402788640445, -8.7263230765472279, 0.0)
    viewCenter96 = NXOpen.Point3d(20.377402788640495, 8.7263230765471818, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(1.25, scaleAboutPoint96, viewCenter96)
    
    scaleAboutPoint97 = NXOpen.Point3d(-15.918347590185004, -6.6741987486559129, 0.0)
    viewCenter97 = NXOpen.Point3d(15.918347590185023, 6.6741987486558694, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(1.25, scaleAboutPoint97, viewCenter97)
    
    scaleAboutPoint98 = NXOpen.Point3d(-12.55056224459887, -4.9711273438264758, 0.0)
    viewCenter98 = NXOpen.Point3d(12.550562244598895, 4.9711273438264252, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(1.25, scaleAboutPoint98, viewCenter98)
    
    markId129 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Visible, "Transform Origin")
    
    loaded39 = componentNetwork26.IsReferencedGeometryLoaded()
    
    componentNetwork26.BeginDrag()
    
    point685 = NXOpen.Point3d(-72.339235295186128, 81.407959946082627, -22.634486000335471)
    direction675 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork26.DragByRay(point685, direction675)
    
    point686 = NXOpen.Point3d(-72.339235295186128, 81.023662357057844, -24.112166848599678)
    direction676 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork26.DragByRay(point686, direction676)
    
    point687 = NXOpen.Point3d(-72.339235295186128, 81.023662357057844, -24.25945951063898)
    direction677 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork26.DragByRay(point687, direction677)
    
    point688 = NXOpen.Point3d(-72.339235295186128, 81.023662357057844, -24.455849726691383)
    direction678 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork26.DragByRay(point688, direction678)
    
    point689 = NXOpen.Point3d(-72.339235295186128, 81.023662357057844, -24.652239942743787)
    direction679 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork26.DragByRay(point689, direction679)
    
    point690 = NXOpen.Point3d(-72.339235295186128, 81.023662357057844, -24.75043505076999)
    direction680 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork26.DragByRay(point690, direction680)
    
    point691 = NXOpen.Point3d(-72.339235295186128, 81.023662357057844, -24.897727712809292)
    direction681 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork26.DragByRay(point691, direction681)
    
    point692 = NXOpen.Point3d(-72.339235295186128, 81.023662357057844, -24.94682526682239)
    direction682 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork26.DragByRay(point692, direction682)
    
    point693 = NXOpen.Point3d(-72.339235295186128, 81.023662357057844, -24.94682526682239)
    direction683 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork26.DragByRay(point693, direction683)
    
    point694 = NXOpen.Point3d(-72.339235295186128, 81.023662357057844, -24.995922820835492)
    direction684 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork26.DragByRay(point694, direction684)
    
    point695 = NXOpen.Point3d(-72.339235295186128, 81.023662357057844, -24.995922820835492)
    direction685 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork26.DragByRay(point695, direction685)
    
    point696 = NXOpen.Point3d(-72.339235295186128, 81.072759911070946, -24.995922820835492)
    direction686 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork26.DragByRay(point696, direction686)
    
    point697 = NXOpen.Point3d(-72.339235295186128, 81.121857465084048, -24.995922820835492)
    direction687 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork26.DragByRay(point697, direction687)
    
    point698 = NXOpen.Point3d(-72.339235295186128, 81.121857465084048, -24.995922820835492)
    direction688 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork26.DragByRay(point698, direction688)
    
    point699 = NXOpen.Point3d(-72.339235295186128, 81.17095501909715, -24.995922820835492)
    direction689 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork26.DragByRay(point699, direction689)
    
    point700 = NXOpen.Point3d(-72.339235295186128, 81.17095501909715, -24.995922820835492)
    direction690 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork26.DragByRay(point700, direction690)
    
    point701 = NXOpen.Point3d(-72.339235295186128, 81.17095501909715, -24.94682526682239)
    direction691 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork26.DragByRay(point701, direction691)
    
    point702 = NXOpen.Point3d(-72.339235295186128, 81.17095501909715, -24.94682526682239)
    direction692 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork26.DragByRay(point702, direction692)
    
    point703 = NXOpen.Point3d(-72.339235295186128, 81.121857465084048, -24.94682526682239)
    direction693 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork26.DragByRay(point703, direction693)
    
    point704 = NXOpen.Point3d(-72.339235295186128, 81.121857465084048, -24.94682526682239)
    direction694 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork26.DragByRay(point704, direction694)
    
    point705 = NXOpen.Point3d(-72.339235295186128, 81.121857465084048, -24.94682526682239)
    direction695 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork26.DragByRay(point705, direction695)
    
    point706 = NXOpen.Point3d(-72.339235295186128, 81.121857465084048, -24.94682526682239)
    direction696 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork26.DragByRay(point706, direction696)
    
    componentNetwork26.EndDrag()
    
    componentNetwork26.ResetDisplay()
    
    componentNetwork26.ApplyToModel()
    
    markId130 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "Move Component")
    
    theSession.DeleteUndoMark(markId130, None)
    
    markId131 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "Move Component")
    
    componentNetwork26.Solve()
    
    componentPositioner26.ClearNetwork()
    
    nErrs43 = theSession.UpdateManager.AddToDeleteList(componentNetwork26)
    
    componentPositioner26.DeleteNonPersistentConstraints()
    
    nErrs44 = theSession.UpdateManager.DoUpdate(markId127)
    
    theSession.DeleteUndoMark(markId131, None)
    
    theSession.SetUndoMarkName(markId126, "Move Component")
    
    componentPositioner26.EndMoveComponent()
    
    componentPositioner26.PrimaryArrangement = NXOpen.Assemblies.Arrangement.Null
    
    theSession.DeleteUndoMarksUpToMark(markId127, None, False)
    
    # ----------------------------------------------
    #   Menu: Rendering Style->Shaded with Edges
    # ----------------------------------------------
    workPart.ModelingViews.WorkView.RenderingStyle = NXOpen.View.RenderingStyleType.ShadedWithEdges
    
    # ----------------------------------------------
    #   Menu: Orient View->Isometric
    # ----------------------------------------------
    workPart.ModelingViews.WorkView.Orient(NXOpen.View.Canned.Isometric, NXOpen.View.ScaleAdjustment.Fit)
    
    # ----------------------------------------------
    #   Menu: Assemblies->Components->Add Component...
    # ----------------------------------------------
    markId132 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Visible, "Start")
    
    addComponentBuilder14 = workPart.AssemblyManager.CreateAddComponentBuilder()
    
    componentPositioner27 = workPart.ComponentAssembly.Positioner
    
    componentPositioner27.ClearNetwork()
    
    componentPositioner27.PrimaryArrangement = arrangement1
    
    componentPositioner27.BeginAssemblyConstraints()
    
    allowInterpartPositioning26 = theSession.Preferences.Assemblies.InterpartPositioning
    
    expression261 = workPart.Expressions.CreateSystemExpressionWithUnits("1.0", NXOpen.Unit.Null)
    
    expression262 = workPart.Expressions.CreateSystemExpressionWithUnits("1.0", unit1)
    
    expression263 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit1)
    
    expression264 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit2)
    
    expression265 = workPart.Expressions.CreateSystemExpressionWithUnits("1", NXOpen.Unit.Null)
    
    expression266 = workPart.Expressions.CreateSystemExpressionWithUnits("1.0", unit1)
    
    expression267 = workPart.Expressions.CreateSystemExpressionWithUnits("0", unit1)
    
    expression268 = workPart.Expressions.CreateSystemExpressionWithUnits("0", unit2)
    
    network27 = componentPositioner27.EstablishNetwork()
    
    componentNetwork27 = network27
    componentNetwork27.MoveObjectsState = True
    
    componentNetwork27.DisplayComponent = NXOpen.Assemblies.Component.Null
    
    theSession.SetUndoMarkName(markId132, "Add Component Dialog")
    
    componentNetwork27.MoveObjectsState = True
    
    markId133 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "Assembly Constraints Update")
    
    addComponentBuilder14.SetComponentAnchor(NXOpen.Assemblies.ProductInterface.InterfaceObject.Null)
    
    addComponentBuilder14.SetInitialLocationType(NXOpen.Assemblies.AddComponentBuilder.LocationType.Snap)
    
    addComponentBuilder14.SetCount(1)
    
    addComponentBuilder14.SetScatterOption(True)
    
    addComponentBuilder14.ReferenceSet = "Unknown"
    
    addComponentBuilder14.Layer = -1
    
    basePart5, partLoadStatus5 = theSession.Parts.OpenBase(back_arm_path)
    
    partLoadStatus5.Dispose()
    addComponentBuilder14.ReferenceSet = "Use Model"
    
    addComponentBuilder14.Layer = -1
    
    partstouse14 = [NXOpen.BasePart.Null] * 1 
    part5 = basePart5
    partstouse14[0] = part5
    addComponentBuilder14.SetPartsToAdd(partstouse14)
    
    productinterfaceobjects14 = addComponentBuilder14.GetAllProductInterfaceObjects()
    
    coordinates19 = NXOpen.Point3d(-40.179666115354216, 180.0176439202919, 0.0)
    point707 = workPart.Points.CreatePoint(coordinates19)
    
    coordinates20 = NXOpen.Point3d(-40.179666115354216, 180.0176439202919, 0.0)
    point708 = workPart.Points.CreatePoint(coordinates20)
    
    origin19 = NXOpen.Point3d(-40.179666115354216, 180.0176439202919, 0.0)
    vector19 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    direction697 = workPart.Directions.CreateDirection(origin19, vector19, NXOpen.SmartObject.UpdateOption.WithinModeling)
    
    origin20 = NXOpen.Point3d(-40.179666115354216, 180.0176439202919, 0.0)
    vector20 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    direction698 = workPart.Directions.CreateDirection(origin20, vector20, NXOpen.SmartObject.UpdateOption.WithinModeling)
    
    xform11 = workPart.Xforms.CreateXformByPointXDirZDir(point708, direction698, direction697, NXOpen.SmartObject.UpdateOption.WithinModeling, 0.625)
    
    cartesianCoordinateSystem11 = workPart.CoordinateSystems.CreateCoordinateSystem(xform11, NXOpen.SmartObject.UpdateOption.WithinModeling)
    
    point709 = NXOpen.Point3d(-40.179666115354216, 180.0176439202919, 0.0)
    orientation11 = NXOpen.Matrix3x3()
    
    orientation11.Xx = 1.0
    orientation11.Xy = 0.0
    orientation11.Xz = 0.0
    orientation11.Yx = 0.0
    orientation11.Yy = 1.0
    orientation11.Yz = 0.0
    orientation11.Zx = 0.0
    orientation11.Zy = 0.0
    orientation11.Zz = 1.0
    addComponentBuilder14.SetInitialLocationAndOrientation(point709, orientation11)
    
    movableObjects32 = [NXOpen.NXObject.Null] * 1 
    component21 = workPart.ComponentAssembly.RootComponent.FindObject("COMPONENT back arm 1")
    movableObjects32[0] = component21
    componentNetwork27.SetMovingGroup(movableObjects32)
    
    scaleAboutPoint99 = NXOpen.Point3d(-185.76956341629281, -41.922158152513958, 0.0)
    viewCenter99 = NXOpen.Point3d(185.76956341629281, 41.922158152513958, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(0.80000000000000004, scaleAboutPoint99, viewCenter99)
    
    scaleAboutPoint100 = NXOpen.Point3d(-221.81141885084918, -60.403109551809209, 0.0)
    viewCenter100 = NXOpen.Point3d(221.81141885084918, 60.403109551809273, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(0.80000000000000004, scaleAboutPoint100, viewCenter100)
    
    scaleAboutPoint101 = NXOpen.Point3d(-277.26427356356146, -75.5038869397615, 0.0)
    viewCenter101 = NXOpen.Point3d(277.26427356356152, 75.503886939761543, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(0.80000000000000004, scaleAboutPoint101, viewCenter101)
    
    scaleAboutPoint102 = NXOpen.Point3d(-55.940379810502137, 19.375997476263308, 0.0)
    viewCenter102 = NXOpen.Point3d(55.940379810502137, -19.375997476263255, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(1.25, scaleAboutPoint102, viewCenter102)
    
    markId134 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Visible, "Rotate About X-axis")
    
    loaded40 = componentNetwork27.IsReferencedGeometryLoaded()
    
    componentNetwork27.BeginDrag()
    
    translation138 = NXOpen.Vector3d(0.0, 8.8251522508742823, -56.292639602010524)
    rotation18 = NXOpen.Matrix3x3()
    
    rotation18.Xx = 1.0
    rotation18.Xy = 0.0
    rotation18.Xz = 0.0
    rotation18.Yx = 0.0
    rotation18.Yy = 0.98480775301220813
    rotation18.Yz = -0.17364817766693019
    rotation18.Zx = 0.0
    rotation18.Zy = 0.17364817766693019
    rotation18.Zz = 0.98480775301220813
    componentNetwork27.DragByTransform(translation138, rotation18)
    
    translation139 = NXOpen.Vector3d(0.0, 27.29134489199879, -110.19759591359505)
    rotation19 = NXOpen.Matrix3x3()
    
    rotation19.Xx = 1.0
    rotation19.Xy = 0.0
    rotation19.Xz = 0.0
    rotation19.Yx = 0.0
    rotation19.Yy = 0.93969262078590854
    rotation19.Yz = -0.34202014332566844
    rotation19.Zx = 0.0
    rotation19.Zy = 0.34202014332566844
    rotation19.Zz = 0.93969262078590854
    componentNetwork27.DragByTransform(translation139, rotation19)
    
    translation140 = NXOpen.Vector3d(0.0, 39.97552766957881, -135.73864039223275)
    rotation20 = NXOpen.Matrix3x3()
    
    rotation20.Xx = 1.0
    rotation20.Xy = 0.0
    rotation20.Xz = 0.0
    rotation20.Yx = 0.0
    rotation20.Yy = 0.90630778703665027
    rotation20.Yz = -0.42261826174069905
    rotation20.Zx = 0.0
    rotation20.Zy = 0.42261826174069905
    rotation20.Zz = 0.90630778703665027
    componentNetwork27.DragByTransform(translation140, rotation20)
    
    translation141 = NXOpen.Vector3d(0.0, 54.837492004317312, -160.07699411445006)
    rotation21 = NXOpen.Matrix3x3()
    
    rotation21.Xx = 1.0
    rotation21.Xy = 0.0
    rotation21.Xz = 0.0
    rotation21.Yx = 0.0
    rotation21.Yy = 0.86602540378443904
    rotation21.Yz = -0.49999999999999956
    rotation21.Zx = 0.0
    rotation21.Zy = 0.49999999999999956
    rotation21.Zz = 0.86602540378443904
    componentNetwork27.DragByTransform(translation141, rotation21)
    
    translation142 = NXOpen.Vector3d(0.0, 71.764129373727485, -183.02742751252109)
    rotation22 = NXOpen.Matrix3x3()
    
    rotation22.Xx = 1.0
    rotation22.Xy = 0.0
    rotation22.Xz = 0.0
    rotation22.Yx = 0.0
    rotation22.Yy = 0.81915204428899235
    rotation22.Yz = -0.5735764363510456
    rotation22.Zx = 0.0
    rotation22.Zy = 0.5735764363510456
    rotation22.Zz = 0.81915204428899235
    componentNetwork27.DragByTransform(translation142, rotation22)
    
    translation143 = NXOpen.Vector3d(0.0, 111.28140249690773, -224.07775894261962)
    rotation23 = NXOpen.Matrix3x3()
    
    rotation23.Xx = 1.0
    rotation23.Xy = 0.0
    rotation23.Xz = 0.0
    rotation23.Yx = 0.0
    rotation23.Yy = 0.70710678118654824
    rotation23.Yz = -0.70710678118654702
    rotation23.Zx = 0.0
    rotation23.Zy = 0.70710678118654702
    rotation23.Zz = 0.70710678118654824
    componentNetwork27.DragByTransform(translation143, rotation23)
    
    translation144 = NXOpen.Vector3d(0.0, 182.36665021710718, -271.28899157685726)
    rotation24 = NXOpen.Matrix3x3()
    
    rotation24.Xx = 1.0
    rotation24.Xy = 0.0
    rotation24.Xz = 0.0
    rotation24.Yx = 0.0
    rotation24.Yy = 0.500000000000001
    rotation24.Yz = -0.86602540378443826
    rotation24.Zx = 0.0
    rotation24.Zy = 0.86602540378443826
    rotation24.Zz = 0.500000000000001
    componentNetwork27.DragByTransform(translation144, rotation24)
    
    translation145 = NXOpen.Vector3d(0.0, 291.4462401602521, -302.7527915537413)
    rotation25 = NXOpen.Matrix3x3()
    
    rotation25.Xx = 1.0
    rotation25.Xy = 0.0
    rotation25.Xz = 0.0
    rotation25.Yx = 0.0
    rotation25.Yy = 0.17364817766693175
    rotation25.Yz = -0.98480775301220802
    rotation25.Zx = 0.0
    rotation25.Zy = 0.98480775301220802
    rotation25.Zz = 0.17364817766693175
    componentNetwork27.DragByTransform(translation145, rotation25)
    
    translation146 = NXOpen.Vector3d(0.0, 348.41613968383166, -303.83682747851765)
    rotation26 = NXOpen.Matrix3x3()
    
    rotation26.Xx = 1.0
    rotation26.Xy = 0.0
    rotation26.Xz = 0.0
    rotation26.Yx = 0.0
    rotation26.Yy = 1.5265566588595902e-15
    rotation26.Yz = -1.0000000000000002
    rotation26.Zx = 0.0
    rotation26.Zy = 1.0000000000000002
    rotation26.Zz = 1.5265566588595902e-15
    componentNetwork27.DragByTransform(translation146, rotation26)
    
    translation147 = NXOpen.Vector3d(0.0, 404.70877928584224, -295.01167522764342)
    rotation27 = NXOpen.Matrix3x3()
    
    rotation27.Xx = 1.0
    rotation27.Xy = 0.0
    rotation27.Xz = 0.0
    rotation27.Yx = 0.0
    rotation27.Yy = -0.17364817766692872
    rotation27.Yz = -0.98480775301220858
    rotation27.Zx = 0.0
    rotation27.Zy = 0.98480775301220858
    rotation27.Zz = -0.17364817766692872
    componentNetwork27.DragByTransform(translation147, rotation27)
    
    translation148 = NXOpen.Vector3d(0.0, 458.6137355974268, -276.54548258651903)
    rotation28 = NXOpen.Matrix3x3()
    
    rotation28.Xx = 1.0
    rotation28.Xy = 0.0
    rotation28.Xz = 0.0
    rotation28.Yx = 0.0
    rotation28.Yy = -0.3420201433256671
    rotation28.Yz = -0.93969262078590932
    rotation28.Zx = 0.0
    rotation28.Zy = 0.93969262078590932
    rotation28.Zz = -0.3420201433256671
    componentNetwork27.DragByTransform(translation148, rotation28)
    
    translation149 = NXOpen.Vector3d(0.0, 484.15478007606453, -263.86129980893901)
    rotation29 = NXOpen.Matrix3x3()
    
    rotation29.Xx = 1.0
    rotation29.Xy = 0.0
    rotation29.Xz = 0.0
    rotation29.Yx = 0.0
    rotation29.Yy = -0.42261826174069783
    rotation29.Yz = -0.90630778703665105
    rotation29.Zx = 0.0
    rotation29.Zy = 0.90630778703665105
    rotation29.Zz = -0.42261826174069783
    componentNetwork27.DragByTransform(translation149, rotation29)
    
    translation150 = NXOpen.Vector3d(0.0, 508.49313379828186, -248.99933547420056)
    rotation30 = NXOpen.Matrix3x3()
    
    rotation30.Xx = 1.0
    rotation30.Xy = 0.0
    rotation30.Xz = 0.0
    rotation30.Yx = 0.0
    rotation30.Yy = -0.49999999999999845
    rotation30.Yz = -0.86602540378443993
    rotation30.Zx = 0.0
    rotation30.Zy = 0.86602540378443993
    rotation30.Zz = -0.49999999999999845
    componentNetwork27.DragByTransform(translation150, rotation30)
    
    translation151 = NXOpen.Vector3d(0.0, 531.443567196353, -232.07269810479036)
    rotation31 = NXOpen.Matrix3x3()
    
    rotation31.Xx = 1.0
    rotation31.Xy = 0.0
    rotation31.Xz = 0.0
    rotation31.Yx = 0.0
    rotation31.Yy = -0.57357643635104461
    rotation31.Yz = -0.81915204428899324
    rotation31.Zx = 0.0
    rotation31.Zy = 0.81915204428899324
    rotation31.Zz = -0.57357643635104461
    componentNetwork27.DragByTransform(translation151, rotation31)
    
    translation152 = NXOpen.Vector3d(0.0, 508.49313379828186, -248.99933547420056)
    rotation32 = NXOpen.Matrix3x3()
    
    rotation32.Xx = 1.0
    rotation32.Xy = 0.0
    rotation32.Xz = 0.0
    rotation32.Yx = 0.0
    rotation32.Yy = -0.49999999999999845
    rotation32.Yz = -0.86602540378443993
    rotation32.Zx = 0.0
    rotation32.Zy = 0.86602540378443993
    rotation32.Zz = -0.49999999999999845
    componentNetwork27.DragByTransform(translation152, rotation32)
    
    translation153 = NXOpen.Vector3d(0.0, 484.15478007606453, -263.86129980893901)
    rotation33 = NXOpen.Matrix3x3()
    
    rotation33.Xx = 1.0
    rotation33.Xy = 0.0
    rotation33.Xz = 0.0
    rotation33.Yx = 0.0
    rotation33.Yy = -0.42261826174069783
    rotation33.Yz = -0.90630778703665116
    rotation33.Zx = 0.0
    rotation33.Zy = 0.90630778703665116
    rotation33.Zz = -0.42261826174069783
    componentNetwork27.DragByTransform(translation153, rotation33)
    
    translation154 = NXOpen.Vector3d(0.0, 458.6137355974268, -276.54548258651909)
    rotation34 = NXOpen.Matrix3x3()
    
    rotation34.Xx = 1.0
    rotation34.Xy = 0.0
    rotation34.Xz = 0.0
    rotation34.Yx = 0.0
    rotation34.Yy = -0.3420201433256671
    rotation34.Yz = -0.93969262078590943
    rotation34.Zx = 0.0
    rotation34.Zy = 0.93969262078590943
    rotation34.Zz = -0.3420201433256671
    componentNetwork27.DragByTransform(translation154, rotation34)
    
    translation155 = NXOpen.Vector3d(0.0, 432.06438313295536, -286.95534951708419)
    rotation35 = NXOpen.Matrix3x3()
    
    rotation35.Xx = 1.0
    rotation35.Xy = 0.0
    rotation35.Xz = 0.0
    rotation35.Yx = 0.0
    rotation35.Yy = -0.25881904510251907
    rotation35.Yz = -0.96592582628906909
    rotation35.Zx = 0.0
    rotation35.Zy = 0.96592582628906909
    rotation35.Zz = -0.25881904510251907
    componentNetwork27.DragByTransform(translation155, rotation35)
    
    translation156 = NXOpen.Vector3d(0.0, 404.70877928584224, -295.01167522764348)
    rotation36 = NXOpen.Matrix3x3()
    
    rotation36.Xx = 1.0
    rotation36.Xy = 0.0
    rotation36.Xz = 0.0
    rotation36.Yx = 0.0
    rotation36.Yy = -0.17364817766692869
    rotation36.Yz = -0.98480775301220869
    rotation36.Zx = 0.0
    rotation36.Zy = 0.98480775301220869
    rotation36.Zz = -0.17364817766692869
    componentNetwork27.DragByTransform(translation156, rotation36)
    
    translation157 = NXOpen.Vector3d(0.0, 376.75511671912909, -300.65314621499698)
    rotation37 = NXOpen.Matrix3x3()
    
    rotation37.Xx = 1.0
    rotation37.Xy = 0.0
    rotation37.Xz = 0.0
    rotation37.Yx = 0.0
    rotation37.Yy = -0.087155742747656556
    rotation37.Yz = -0.99619469809174599
    rotation37.Zx = 0.0
    rotation37.Zy = 0.99619469809174599
    rotation37.Zz = -0.087155742747656556
    componentNetwork27.DragByTransform(translation157, rotation37)
    
    translation158 = NXOpen.Vector3d(0.0, 376.75511671912909, -300.65314621499698)
    rotation38 = NXOpen.Matrix3x3()
    
    rotation38.Xx = 1.0
    rotation38.Xy = 0.0
    rotation38.Xz = 0.0
    rotation38.Yx = 0.0
    rotation38.Yy = -0.087155742747656556
    rotation38.Yz = -0.99619469809174599
    rotation38.Zx = 0.0
    rotation38.Zy = 0.99619469809174599
    rotation38.Zz = -0.087155742747656556
    componentNetwork27.DragByTransform(translation158, rotation38)
    
    componentNetwork27.EndDrag()
    
    componentNetwork27.ResetDisplay()
    
    componentNetwork27.ApplyToModel()
    
    # ----------------------------------------------
    #   Menu: Rendering Style->Face Analysis
    # ----------------------------------------------
    workPart.ModelingViews.WorkView.RenderingStyle = NXOpen.View.RenderingStyleType.FaceAnalysis
    
    # ----------------------------------------------
    #   Menu: Orient View->Right
    # ----------------------------------------------
    workPart.ModelingViews.WorkView.Orient(NXOpen.View.Canned.Right, NXOpen.View.ScaleAdjustment.Fit)
    
    markId135 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Visible, "Transform Origin")
    
    loaded41 = componentNetwork27.IsReferencedGeometryLoaded()
    
    componentNetwork27.BeginDrag()
    
    point710 = NXOpen.Point3d(-40.179666115354223, 326.12648358117485, 22.289656102657318)
    direction699 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork27.DragByRay(point710, direction699)
    
    point711 = NXOpen.Point3d(-40.179666115354223, 272.13302459491916, 33.334594022460607)
    direction700 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork27.DragByRay(point711, direction700)
    
    point712 = NXOpen.Point3d(-40.179666115354223, 206.81010604065358, 43.432822977709392)
    direction701 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork27.DragByRay(point712, direction701)
    
    point713 = NXOpen.Point3d(-40.179666115354223, 130.12667991173316, 56.055609171770371)
    direction702 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork27.DragByRay(point713, direction702)
    
    point714 = NXOpen.Point3d(-40.179666115354223, 98.885284081432232, 61.735862959097801)
    direction703 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork27.DragByRay(point714, direction703)
    
    point715 = NXOpen.Point3d(-40.179666115354223, 80.266674445192308, 67.100547091573731)
    direction704 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork27.DragByRay(point715, direction704)
    
    point716 = NXOpen.Point3d(-40.179666115354223, 54.074393092515763, 75.936497427416413)
    direction705 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork27.DragByRay(point716, direction705)
    
    point717 = NXOpen.Point3d(-40.179666115354223, 49.025278614891391, 79.09219397593165)
    direction706 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork27.DragByRay(point717, direction706)
    
    point718 = NXOpen.Point3d(-40.179666115354223, 48.394139305188318, 79.40776363078318)
    direction707 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork27.DragByRay(point718, direction707)
    
    point719 = NXOpen.Point3d(-40.179666115354223, 45.86958206637614, 79.723333285634709)
    direction708 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork27.DragByRay(point719, direction708)
    
    point720 = NXOpen.Point3d(-40.179666115354223, 39.873758624197166, 79.723333285634709)
    direction709 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork27.DragByRay(point720, direction709)
    
    point721 = NXOpen.Point3d(-40.179666115354223, 37.664771040236502, 79.723333285634709)
    direction710 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork27.DragByRay(point721, direction710)
    
    point722 = NXOpen.Point3d(-40.179666115354223, 36.718062075681928, 79.723333285634709)
    direction711 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork27.DragByRay(point722, direction711)
    
    point723 = NXOpen.Point3d(-40.179666115354223, 33.877935182018206, 79.09219397593165)
    direction712 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork27.DragByRay(point723, direction712)
    
    point724 = NXOpen.Point3d(-40.179666115354223, 27.566542084987731, 78.46105466622862)
    direction713 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork27.DragByRay(point724, direction713)
    
    point725 = NXOpen.Point3d(-40.179666115354223, 27.566542084987731, 78.46105466622862)
    direction714 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork27.DragByRay(point725, direction714)
    
    point726 = NXOpen.Point3d(-40.179666115354223, 27.566542084987731, 78.46105466622862)
    direction715 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork27.DragByRay(point726, direction715)
    
    componentNetwork27.EndDrag()
    
    componentNetwork27.ResetDisplay()
    
    componentNetwork27.ApplyToModel()
    
    scaleAboutPoint103 = NXOpen.Point3d(84.099313017931266, 15.778482742576225, 0.0)
    viewCenter103 = NXOpen.Point3d(-84.099313017931266, -15.778482742576225, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(0.80000000000000004, scaleAboutPoint103, viewCenter103)
    
    scaleAboutPoint104 = NXOpen.Point3d(134.70879641474454, 6.3113930970304706, 0.0)
    viewCenter104 = NXOpen.Point3d(-134.70879641474451, -6.3113930970304706, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(0.80000000000000004, scaleAboutPoint104, viewCenter104)
    
    scaleAboutPoint105 = NXOpen.Point3d(-202.40834893211056, 106.50475851238947, 0.0)
    viewCenter105 = NXOpen.Point3d(202.40834893211056, -106.50475851238947, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(1.25, scaleAboutPoint105, viewCenter105)
    
    scaleAboutPoint106 = NXOpen.Point3d(-159.95436880286641, 87.176117152733624, 0.0)
    viewCenter106 = NXOpen.Point3d(159.95436880286641, -87.176117152733568, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(1.25, scaleAboutPoint106, viewCenter106)
    
    scaleAboutPoint107 = NXOpen.Point3d(50.96449925852118, 28.716838591488742, 0.0)
    viewCenter107 = NXOpen.Point3d(-50.96449925852118, -28.716838591488717, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(1.25, scaleAboutPoint107, viewCenter107)
    
    scaleAboutPoint108 = NXOpen.Point3d(40.771599406816939, 22.216103701547329, 0.0)
    viewCenter108 = NXOpen.Point3d(-40.771599406816939, -22.216103701547308, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(1.25, scaleAboutPoint108, viewCenter108)
    
    markId136 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Visible, "Transform Origin")
    
    loaded42 = componentNetwork27.IsReferencedGeometryLoaded()
    
    componentNetwork27.BeginDrag()
    
    point727 = NXOpen.Point3d(-40.179666115354223, 27.566542084987731, 78.46105466622862)
    direction716 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork27.DragByRay(point727, direction716)
    
    point728 = NXOpen.Point3d(-40.179666115354223, 18.08682965324796, 79.827471271735703)
    direction717 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork27.DragByRay(point728, direction717)
    
    point729 = NXOpen.Point3d(-40.179666115354223, 17.480935915933031, 79.827471271735703)
    direction718 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork27.DragByRay(point729, direction718)
    
    point730 = NXOpen.Point3d(-40.179666115354223, 16.673077599513135, 80.231400429945651)
    direction719 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork27.DragByRay(point730, direction719)
    
    point731 = NXOpen.Point3d(-40.179666115354223, 15.663254703988258, 80.635329588155599)
    direction720 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork27.DragByRay(point731, direction720)
    
    point732 = NXOpen.Point3d(-40.179666115354223, 13.441644333833516, 81.847117062785458)
    direction721 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork27.DragByRay(point732, direction721)
    
    point733 = NXOpen.Point3d(-40.179666115354223, 10.816104805468846, 83.462833695625264)
    direction722 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork27.DragByRay(point733, direction722)
    
    point734 = NXOpen.Point3d(-40.179666115354223, 10.008246489048936, 84.674621170255122)
    direction723 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork27.DragByRay(point734, direction723)
    
    point735 = NXOpen.Point3d(-40.179666115354223, 8.7964590144190922, 86.896231540409843)
    direction724 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork27.DragByRay(point735, direction724)
    
    point736 = NXOpen.Point3d(-40.179666115354223, 5.9689549069494277, 90.329629385194437)
    direction725 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork27.DragByRay(point736, direction725)
    
    point737 = NXOpen.Point3d(-40.179666115354223, 2.7375216412698293, 93.157133492664087)
    direction726 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork27.DragByRay(point737, direction726)
    
    point738 = NXOpen.Point3d(-40.179666115354223, 0.71787585022006795, 94.36892096729396)
    direction727 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork27.DragByRay(point738, direction727)
    
    point739 = NXOpen.Point3d(-40.179666115354223, -1.0998053617247194, 95.378743862818837)
    direction728 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork27.DragByRay(point739, direction728)
    
    point740 = NXOpen.Point3d(-40.179666115354223, -6.350884418454072, 98.408212549393454)
    direction729 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork27.DragByRay(point740, direction729)
    
    point741 = NXOpen.Point3d(-40.179666115354223, -8.1685656303988594, 100.22589376133824)
    direction730 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork27.DragByRay(point741, direction730)
    
    point742 = NXOpen.Point3d(-40.179666115354223, -9.5823176841336846, 102.04357497328303)
    direction731 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork27.DragByRay(point742, direction731)
    
    point743 = NXOpen.Point3d(-40.179666115354223, -10.188211421448614, 103.05339786880791)
    direction732 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork27.DragByRay(point743, direction732)
    
    point744 = NXOpen.Point3d(-40.179666115354223, -10.188211421448614, 103.05339786880791)
    direction733 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork27.DragByRay(point744, direction733)
    
    point745 = NXOpen.Point3d(-40.179666115354223, -10.188211421448614, 103.25536244791289)
    direction734 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork27.DragByRay(point745, direction734)
    
    point746 = NXOpen.Point3d(-40.179666115354223, -10.188211421448614, 103.45732702701785)
    direction735 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork27.DragByRay(point746, direction735)
    
    point747 = NXOpen.Point3d(-40.179666115354223, -9.7842822632386515, 103.45732702701785)
    direction736 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork27.DragByRay(point747, direction736)
    
    point748 = NXOpen.Point3d(-40.179666115354223, -9.3803531050287035, 103.45732702701785)
    direction737 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork27.DragByRay(point748, direction737)
    
    point749 = NXOpen.Point3d(-40.179666115354223, -9.1783885259237366, 103.45732702701785)
    direction738 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork27.DragByRay(point749, direction738)
    
    point750 = NXOpen.Point3d(-40.179666115354223, -8.9764239468187554, 103.65929160612284)
    direction739 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork27.DragByRay(point750, direction739)
    
    point751 = NXOpen.Point3d(-40.179666115354223, -8.7744593677137743, 103.8612561852278)
    direction740 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork27.DragByRay(point751, direction740)
    
    point752 = NXOpen.Point3d(-40.179666115354223, -8.5724947886088074, 104.06322076433278)
    direction741 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork27.DragByRay(point752, direction741)
    
    point753 = NXOpen.Point3d(-40.179666115354223, -8.1685656303988594, 104.26518534343776)
    direction742 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork27.DragByRay(point753, direction742)
    
    point754 = NXOpen.Point3d(-40.179666115354223, -8.1685656303988594, 104.26518534343776)
    direction743 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork27.DragByRay(point754, direction743)
    
    point755 = NXOpen.Point3d(-40.179666115354223, -8.1685656303988594, 104.66911450164771)
    direction744 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork27.DragByRay(point755, direction744)
    
    point756 = NXOpen.Point3d(-40.179666115354223, -8.1685656303988594, 104.66911450164771)
    direction745 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork27.DragByRay(point756, direction745)
    
    point757 = NXOpen.Point3d(-40.179666115354223, -8.1685656303988594, 104.87107908075268)
    direction746 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork27.DragByRay(point757, direction746)
    
    point758 = NXOpen.Point3d(-40.179666115354223, -8.1685656303988594, 105.07304365985766)
    direction747 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork27.DragByRay(point758, direction747)
    
    point759 = NXOpen.Point3d(-40.179666115354223, -8.1685656303988594, 105.47697281806761)
    direction748 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork27.DragByRay(point759, direction748)
    
    point760 = NXOpen.Point3d(-40.179666115354223, -8.1685656303988594, 105.47697281806761)
    direction749 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork27.DragByRay(point760, direction749)
    
    point761 = NXOpen.Point3d(-40.179666115354223, -8.1685656303988594, 105.67893739717258)
    direction750 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork27.DragByRay(point761, direction750)
    
    point762 = NXOpen.Point3d(-40.179666115354223, -8.1685656303988594, 105.67893739717258)
    direction751 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork27.DragByRay(point762, direction751)
    
    point763 = NXOpen.Point3d(-40.179666115354223, -8.1685656303988594, 106.08286655538254)
    direction752 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork27.DragByRay(point763, direction752)
    
    point764 = NXOpen.Point3d(-40.179666115354223, -8.1685656303988594, 106.08286655538254)
    direction753 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork27.DragByRay(point764, direction753)
    
    point765 = NXOpen.Point3d(-40.179666115354223, -8.1685656303988594, 106.28483113448752)
    direction754 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork27.DragByRay(point765, direction754)
    
    point766 = NXOpen.Point3d(-40.179666115354223, -8.1685656303988594, 106.28483113448752)
    direction755 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork27.DragByRay(point766, direction755)
    
    point767 = NXOpen.Point3d(-40.179666115354223, -8.1685656303988594, 106.28483113448752)
    direction756 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork27.DragByRay(point767, direction756)
    
    point768 = NXOpen.Point3d(-40.179666115354223, -8.1685656303988594, 106.28483113448752)
    direction757 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork27.DragByRay(point768, direction757)
    
    componentNetwork27.EndDrag()
    
    componentNetwork27.ResetDisplay()
    
    componentNetwork27.ApplyToModel()
    
    # ----------------------------------------------
    #   Menu: Orient View->Front
    # ----------------------------------------------
    workPart.ModelingViews.WorkView.Orient(NXOpen.View.Canned.Front, NXOpen.View.ScaleAdjustment.Fit)
    
    # ----------------------------------------------
    #   Menu: Rendering Style->Shaded with Edges
    # ----------------------------------------------
    workPart.ModelingViews.WorkView.RenderingStyle = NXOpen.View.RenderingStyleType.ShadedWithEdges
    
    markId137 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Visible, "Translate Along X-axis")
    
    loaded43 = componentNetwork27.IsReferencedGeometryLoaded()
    
    componentNetwork27.BeginDrag()
    
    translation159 = NXOpen.Vector3d(15.0, 0.0, -1.4210854715202004e-14)
    componentNetwork27.DragByTranslation(translation159)
    
    translation160 = NXOpen.Vector3d(17.0, 0.0, -1.4210854715202004e-14)
    componentNetwork27.DragByTranslation(translation160)
    
    translation161 = NXOpen.Vector3d(18.0, 0.0, -1.4210854715202004e-14)
    componentNetwork27.DragByTranslation(translation161)
    
    translation162 = NXOpen.Vector3d(19.0, 0.0, -1.4210854715202004e-14)
    componentNetwork27.DragByTranslation(translation162)
    
    translation163 = NXOpen.Vector3d(20.0, 0.0, -1.4210854715202004e-14)
    componentNetwork27.DragByTranslation(translation163)
    
    translation164 = NXOpen.Vector3d(23.0, 0.0, -1.4210854715202004e-14)
    componentNetwork27.DragByTranslation(translation164)
    
    translation165 = NXOpen.Vector3d(24.0, 0.0, -1.4210854715202004e-14)
    componentNetwork27.DragByTranslation(translation165)
    
    translation166 = NXOpen.Vector3d(27.0, 0.0, -1.4210854715202004e-14)
    componentNetwork27.DragByTranslation(translation166)
    
    translation167 = NXOpen.Vector3d(31.0, 0.0, -1.4210854715202004e-14)
    componentNetwork27.DragByTranslation(translation167)
    
    translation168 = NXOpen.Vector3d(32.0, 0.0, -1.4210854715202004e-14)
    componentNetwork27.DragByTranslation(translation168)
    
    translation169 = NXOpen.Vector3d(33.0, 0.0, -1.4210854715202004e-14)
    componentNetwork27.DragByTranslation(translation169)
    
    translation170 = NXOpen.Vector3d(34.0, 0.0, -1.4210854715202004e-14)
    componentNetwork27.DragByTranslation(translation170)
    
    translation171 = NXOpen.Vector3d(35.0, 0.0, -1.4210854715202004e-14)
    componentNetwork27.DragByTranslation(translation171)
    
    translation172 = NXOpen.Vector3d(36.0, 0.0, -1.4210854715202004e-14)
    componentNetwork27.DragByTranslation(translation172)
    
    translation173 = NXOpen.Vector3d(37.0, 0.0, -1.4210854715202004e-14)
    componentNetwork27.DragByTranslation(translation173)
    
    translation174 = NXOpen.Vector3d(38.0, 0.0, -1.4210854715202004e-14)
    componentNetwork27.DragByTranslation(translation174)
    
    translation175 = NXOpen.Vector3d(39.0, 0.0, -1.4210854715202004e-14)
    componentNetwork27.DragByTranslation(translation175)
    
    translation176 = NXOpen.Vector3d(40.0, 0.0, -1.4210854715202004e-14)
    componentNetwork27.DragByTranslation(translation176)
    
    translation177 = NXOpen.Vector3d(41.0, 0.0, -1.4210854715202004e-14)
    componentNetwork27.DragByTranslation(translation177)
    
    translation178 = NXOpen.Vector3d(40.0, 0.0, -1.4210854715202004e-14)
    componentNetwork27.DragByTranslation(translation178)
    
    componentNetwork27.EndDrag()
    
    componentNetwork27.ResetDisplay()
    
    componentNetwork27.ApplyToModel()
    
    markId138 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "Add Component")
    
    theSession.DeleteUndoMark(markId138, None)
    
    markId139 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "Add Component")
    
    markId140 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "AddComponent on_apply")
    
    componentNetwork27.Solve()
    
    componentPositioner27.ClearNetwork()
    
    nErrs45 = theSession.UpdateManager.AddToDeleteList(componentNetwork27)
    
    nErrs46 = theSession.UpdateManager.DoUpdate(markId133)
    
    componentPositioner27.EndAssemblyConstraints()
    
    logicalobjects11 = addComponentBuilder14.GetLogicalObjectsHavingUnassignedRequiredAttributes()
    
    addComponentBuilder14.ComponentName = "BACK ARM"
    
    nXObject12 = addComponentBuilder14.Commit()
    
    errorList11 = addComponentBuilder14.GetOperationFailures()
    
    errorList11.Dispose()
    theSession.DeleteUndoMark(markId139, None)
    
    theSession.SetUndoMarkName(markId132, "Add Component")
    
    addComponentBuilder14.Destroy()
    
    workPart.Points.DeletePoint(point707)
    
    componentPositioner27.PrimaryArrangement = NXOpen.Assemblies.Arrangement.Null
    
    theSession.DeleteUndoMark(markId133, None)
    
    theSession.DeleteUndoMark(markId137, None)
    
    theSession.DeleteUndoMark(markId136, None)
    
    theSession.DeleteUndoMark(markId135, None)
    
    theSession.DeleteUndoMark(markId134, None)
    
    # ----------------------------------------------
    #   Menu: Orient View->Isometric
    # ----------------------------------------------
    workPart.ModelingViews.WorkView.Orient(NXOpen.View.Canned.Isometric, NXOpen.View.ScaleAdjustment.Fit)
    
    # ----------------------------------------------
    #   Menu: Assemblies->Components->Add Component...
    # ----------------------------------------------
    markId141 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Visible, "Start")
    
    addComponentBuilder15 = workPart.AssemblyManager.CreateAddComponentBuilder()
    
    componentPositioner28 = workPart.ComponentAssembly.Positioner
    
    componentPositioner28.ClearNetwork()
    
    componentPositioner28.PrimaryArrangement = arrangement1
    
    componentPositioner28.BeginAssemblyConstraints()
    
    allowInterpartPositioning27 = theSession.Preferences.Assemblies.InterpartPositioning
    
    expression269 = workPart.Expressions.CreateSystemExpressionWithUnits("1.0", NXOpen.Unit.Null)
    
    expression270 = workPart.Expressions.CreateSystemExpressionWithUnits("1.0", unit1)
    
    expression271 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit1)
    
    expression272 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit2)
    
    expression273 = workPart.Expressions.CreateSystemExpressionWithUnits("1", NXOpen.Unit.Null)
    
    expression274 = workPart.Expressions.CreateSystemExpressionWithUnits("1.0", unit1)
    
    expression275 = workPart.Expressions.CreateSystemExpressionWithUnits("0", unit1)
    
    expression276 = workPart.Expressions.CreateSystemExpressionWithUnits("0", unit2)
    
    network28 = componentPositioner28.EstablishNetwork()
    
    componentNetwork28 = network28
    componentNetwork28.MoveObjectsState = True
    
    componentNetwork28.DisplayComponent = NXOpen.Assemblies.Component.Null
    
    theSession.SetUndoMarkName(markId141, "Add Component Dialog")
    
    componentNetwork28.MoveObjectsState = True
    
    markId142 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "Assembly Constraints Update")
    
    addComponentBuilder15.SetComponentAnchor(NXOpen.Assemblies.ProductInterface.InterfaceObject.Null)
    
    addComponentBuilder15.SetInitialLocationType(NXOpen.Assemblies.AddComponentBuilder.LocationType.Snap)
    
    addComponentBuilder15.SetCount(1)
    
    addComponentBuilder15.SetScatterOption(True)
    
    addComponentBuilder15.ReferenceSet = "Unknown"
    
    addComponentBuilder15.Layer = -1
    
    basePart6, partLoadStatus6 = theSession.Parts.OpenBase(forearm_path)
    
    partLoadStatus6.Dispose()
    addComponentBuilder15.ReferenceSet = "Use Model"
    
    addComponentBuilder15.Layer = -1
    
    partstouse15 = [NXOpen.BasePart.Null] * 1 
    part6 = basePart6
    partstouse15[0] = part6
    addComponentBuilder15.SetPartsToAdd(partstouse15)
    
    productinterfaceobjects15 = addComponentBuilder15.GetAllProductInterfaceObjects()
    
    coordinates21 = NXOpen.Point3d(-86.0201225880718, -175.20588677297269, 0.0)
    point769 = workPart.Points.CreatePoint(coordinates21)
    
    coordinates22 = NXOpen.Point3d(-86.0201225880718, -175.20588677297269, 0.0)
    point770 = workPart.Points.CreatePoint(coordinates22)
    
    origin21 = NXOpen.Point3d(-86.0201225880718, -175.20588677297269, 0.0)
    vector21 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    direction758 = workPart.Directions.CreateDirection(origin21, vector21, NXOpen.SmartObject.UpdateOption.WithinModeling)
    
    origin22 = NXOpen.Point3d(-86.0201225880718, -175.20588677297269, 0.0)
    vector22 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    direction759 = workPart.Directions.CreateDirection(origin22, vector22, NXOpen.SmartObject.UpdateOption.WithinModeling)
    
    xform12 = workPart.Xforms.CreateXformByPointXDirZDir(point770, direction759, direction758, NXOpen.SmartObject.UpdateOption.WithinModeling, 0.625)
    
    cartesianCoordinateSystem12 = workPart.CoordinateSystems.CreateCoordinateSystem(xform12, NXOpen.SmartObject.UpdateOption.WithinModeling)
    
    point771 = NXOpen.Point3d(-86.0201225880718, -175.20588677297269, 0.0)
    orientation12 = NXOpen.Matrix3x3()
    
    orientation12.Xx = 1.0
    orientation12.Xy = 0.0
    orientation12.Xz = 0.0
    orientation12.Yx = 0.0
    orientation12.Yy = 1.0
    orientation12.Yz = 0.0
    orientation12.Zx = 0.0
    orientation12.Zy = 0.0
    orientation12.Zz = 1.0
    addComponentBuilder15.SetInitialLocationAndOrientation(point771, orientation12)
    
    movableObjects33 = [NXOpen.NXObject.Null] * 1 
    component22 = workPart.ComponentAssembly.RootComponent.FindObject("COMPONENT forearm 1")
    movableObjects33[0] = component22
    componentNetwork28.SetMovingGroup(movableObjects33)
    
    markId143 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Visible, "Rotate About X-axis")
    
    loaded44 = componentNetwork28.IsReferencedGeometryLoaded()
    
    componentNetwork28.BeginDrag()
    
    translation179 = NXOpen.Vector3d(0.0, 32.797630342727018, 18.396903284420873)
    rotation39 = NXOpen.Matrix3x3()
    
    rotation39.Xx = 1.0
    rotation39.Xy = 0.0
    rotation39.Xz = 0.0
    rotation39.Yx = 0.0
    rotation39.Yy = 0.93969262078590854
    rotation39.Yz = -0.34202014332566844
    rotation39.Zx = 0.0
    rotation39.Zy = 0.34202014332566844
    rotation39.Zz = 0.93969262078590854
    componentNetwork28.DragByTransform(translation179, rotation39)
    
    translation180 = NXOpen.Vector3d(0.0, 39.840703524480887, 24.691707793915924)
    rotation40 = NXOpen.Matrix3x3()
    
    rotation40.Xx = 1.0
    rotation40.Xy = 0.0
    rotation40.Xz = 0.0
    rotation40.Yx = 0.0
    rotation40.Yy = 0.90630778703665027
    rotation40.Yz = -0.42261826174069905
    rotation40.Zx = 0.0
    rotation40.Zy = 0.42261826174069905
    rotation40.Zz = 0.90630778703665027
    componentNetwork28.DragByTransform(translation180, rotation40)
    
    translation181 = NXOpen.Vector3d(0.0, 46.308347323939913, 31.576402946180792)
    rotation41 = NXOpen.Matrix3x3()
    
    rotation41.Xx = 1.0
    rotation41.Xy = 0.0
    rotation41.Xz = 0.0
    rotation41.Yx = 0.0
    rotation41.Yy = 0.86602540378443904
    rotation41.Yz = -0.49999999999999956
    rotation41.Zx = 0.0
    rotation41.Zy = 0.49999999999999956
    rotation41.Zz = 0.86602540378443904
    componentNetwork28.DragByTransform(translation181, rotation41)
    
    translation182 = NXOpen.Vector3d(0.0, 52.151339066520094, 38.998592054014111)
    rotation42 = NXOpen.Matrix3x3()
    
    rotation42.Xx = 1.0
    rotation42.Xy = 0.0
    rotation42.Xz = 0.0
    rotation42.Yx = 0.0
    rotation42.Yy = 0.81915204428899235
    rotation42.Yz = -0.5735764363510456
    rotation42.Zx = 0.0
    rotation42.Zy = 0.5735764363510456
    rotation42.Zz = 0.81915204428899235
    componentNetwork28.DragByTransform(translation182, rotation42)
    
    translation183 = NXOpen.Vector3d(0.0, 57.325210056965531, 46.901787776664989)
    rotation43 = NXOpen.Matrix3x3()
    
    rotation43.Xx = 1.0
    rotation43.Xy = 0.0
    rotation43.Xz = 0.0
    rotation43.Yx = 0.0
    rotation43.Yy = 0.76604444311897868
    rotation43.Yz = -0.64278760968653881
    rotation43.Zx = 0.0
    rotation43.Zy = 0.64278760968653881
    rotation43.Zz = 0.76604444311897868
    componentNetwork28.DragByTransform(translation183, rotation43)
    
    translation184 = NXOpen.Vector3d(0.0, 61.7905840129702, 55.225842022603985)
    rotation44 = NXOpen.Matrix3x3()
    
    rotation44.Xx = 1.0
    rotation44.Xy = 0.0
    rotation44.Xz = 0.0
    rotation44.Yx = 0.0
    rotation44.Yy = 0.70710678118654835
    rotation44.Yz = -0.70710678118654702
    rotation44.Zx = 0.0
    rotation44.Zy = 0.70710678118654702
    rotation44.Zz = 0.70710678118654835
    componentNetwork28.DragByTransform(translation184, rotation44)
    
    translation185 = NXOpen.Vector3d(0.0, 65.513476742462416, 63.907403712818137)
    rotation45 = NXOpen.Matrix3x3()
    
    rotation45.Xx = 1.0
    rotation45.Xy = 0.0
    rotation45.Xz = 0.0
    rotation45.Yx = 0.0
    rotation45.Yy = 0.64278760968654025
    rotation45.Yz = -0.76604444311897746
    rotation45.Zx = 0.0
    rotation45.Zy = 0.76604444311897746
    rotation45.Zz = 0.64278760968654025
    componentNetwork28.DragByTransform(translation185, rotation45)
    
    translation186 = NXOpen.Vector3d(0.0, 68.465554783826633, 72.880400920774633)
    rotation46 = NXOpen.Matrix3x3()
    
    rotation46.Xx = 1.0
    rotation46.Xy = 0.0
    rotation46.Xz = 0.0
    rotation46.Yx = 0.0
    rotation46.Yy = 0.57357643635104716
    rotation46.Yz = -0.81915204428899124
    rotation46.Zx = 0.0
    rotation46.Zy = 0.81915204428899124
    rotation46.Zz = 0.57357643635104716
    componentNetwork28.DragByTransform(translation186, rotation46)
    
    translation187 = NXOpen.Vector3d(0.0, 70.624351040654631, 82.076543719677076)
    rotation47 = NXOpen.Matrix3x3()
    
    rotation47.Xx = 1.0
    rotation47.Xy = 0.0
    rotation47.Xz = 0.0
    rotation47.Yx = 0.0
    rotation47.Yy = 0.50000000000000122
    rotation47.Yz = -0.86602540378443815
    rotation47.Zx = 0.0
    rotation47.Zy = 0.86602540378443815
    rotation47.Zz = 0.50000000000000122
    componentNetwork28.DragByTransform(translation187, rotation47)
    
    translation188 = NXOpen.Vector3d(0.0, 70.624351040654631, 82.076543719677076)
    rotation48 = NXOpen.Matrix3x3()
    
    rotation48.Xx = 1.0
    rotation48.Xy = 0.0
    rotation48.Xz = 0.0
    rotation48.Yx = 0.0
    rotation48.Yy = 0.50000000000000122
    rotation48.Yz = -0.86602540378443815
    rotation48.Zx = 0.0
    rotation48.Zy = 0.86602540378443815
    rotation48.Zz = 0.50000000000000122
    componentNetwork28.DragByTransform(translation188, rotation48)
    
    componentNetwork28.EndDrag()
    
    componentNetwork28.ResetDisplay()
    
    componentNetwork28.ApplyToModel()
    
    # ----------------------------------------------
    #   Menu: Orient View->Right
    # ----------------------------------------------
    workPart.ModelingViews.WorkView.Orient(NXOpen.View.Canned.Right, NXOpen.View.ScaleAdjustment.Fit)
    
    markId144 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Visible, "Transform Origin")
    
    loaded45 = componentNetwork28.IsReferencedGeometryLoaded()
    
    componentNetwork28.BeginDrag()
    
    point772 = NXOpen.Point3d(-86.0201225880718, -35.768196395737277, 102.20075398683548)
    direction760 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point772, direction760)
    
    point773 = NXOpen.Point3d(-86.0201225880718, -58.880488533541687, 98.371233258969653)
    direction761 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point773, direction761)
    
    point774 = NXOpen.Point3d(-86.0201225880718, -67.198627749842558, 98.371233258969653)
    direction762 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point774, direction762)
    
    point775 = NXOpen.Point3d(-86.0201225880718, -74.851315828839361, 98.371233258969653)
    direction763 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point775, direction763)
    
    point776 = NXOpen.Point3d(-86.0201225880718, -83.169455045140225, 100.36758667088186)
    direction764 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point776, direction764)
    
    point777 = NXOpen.Point3d(-86.0201225880718, -93.151222104701262, 102.36394008279407)
    direction765 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point777, direction765)
    
    point778 = NXOpen.Point3d(-86.0201225880718, -99.805733477741953, 105.02574463201034)
    direction766 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point778, direction766)
    
    point779 = NXOpen.Point3d(-86.0201225880718, -102.4675380269582, 106.02392133796646)
    direction767 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point779, direction767)
    
    point780 = NXOpen.Point3d(-86.0201225880718, -104.13116587021837, 107.35482361257459)
    direction768 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point780, direction768)
    
    point781 = NXOpen.Point3d(-86.0201225880718, -106.79297041943465, 109.01845145583476)
    direction769 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point781, direction769)
    
    point782 = NXOpen.Point3d(-86.0201225880718, -109.45477496865094, 109.3511770244868)
    direction770 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point782, direction770)
    
    point783 = NXOpen.Point3d(-86.0201225880718, -113.11475622382333, 109.3511770244868)
    direction771 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point783, direction771)
    
    point784 = NXOpen.Point3d(-86.0201225880718, -117.10746304764774, 109.3511770244868)
    direction772 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point784, direction772)
    
    point785 = NXOpen.Point3d(-86.0201225880718, -121.76562100877621, 109.3511770244868)
    direction773 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point785, direction773)
    
    point786 = NXOpen.Point3d(-86.0201225880718, -126.75650453855673, 110.01662816179086)
    direction774 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point786, direction774)
    
    point787 = NXOpen.Point3d(-86.0201225880718, -128.08740681316488, 110.68207929909494)
    direction775 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point787, direction775)
    
    point788 = NXOpen.Point3d(-86.0201225880718, -128.75285795046895, 110.68207929909494)
    direction776 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point788, direction776)
    
    point789 = NXOpen.Point3d(-86.0201225880718, -128.75285795046895, 111.68025600505104)
    direction777 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point789, direction777)
    
    point790 = NXOpen.Point3d(-86.0201225880718, -128.75285795046895, 113.67660941696325)
    direction778 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point790, direction778)
    
    point791 = NXOpen.Point3d(-86.0201225880718, -129.08558351912097, 116.00568839752751)
    direction779 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point791, direction779)
    
    point792 = NXOpen.Point3d(-86.0201225880718, -129.75103465642502, 117.00386510348359)
    direction780 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point792, direction780)
    
    point793 = NXOpen.Point3d(-86.0201225880718, -130.08376022507707, 117.66931624078765)
    direction781 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point793, direction781)
    
    point794 = NXOpen.Point3d(-86.0201225880718, -130.41648579372912, 118.66749294674376)
    direction782 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point794, direction782)
    
    point795 = NXOpen.Point3d(-86.0201225880718, -130.74921136238117, 118.66749294674376)
    direction783 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point795, direction783)
    
    point796 = NXOpen.Point3d(-86.0201225880718, -131.74738806833724, 119.0002185153958)
    direction784 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point796, direction784)
    
    point797 = NXOpen.Point3d(-86.0201225880718, -132.41283920564135, 119.0002185153958)
    direction785 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point797, direction785)
    
    point798 = NXOpen.Point3d(-86.0201225880718, -133.07829034294537, 119.0002185153958)
    direction786 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point798, direction786)
    
    point799 = NXOpen.Point3d(-86.0201225880718, -133.41101591159742, 119.0002185153958)
    direction787 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point799, direction787)
    
    point800 = NXOpen.Point3d(-86.0201225880718, -133.74374148024947, 119.0002185153958)
    direction788 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point800, direction788)
    
    point801 = NXOpen.Point3d(-86.0201225880718, -133.74374148024947, 119.0002185153958)
    direction789 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point801, direction789)
    
    point802 = NXOpen.Point3d(-86.0201225880718, -133.74374148024947, 119.0002185153958)
    direction790 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point802, direction790)
    
    componentNetwork28.EndDrag()
    
    componentNetwork28.ResetDisplay()
    
    componentNetwork28.ApplyToModel()
    
    markId145 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Visible, "Rotate About X-axis")
    
    loaded46 = componentNetwork28.IsReferencedGeometryLoaded()
    
    componentNetwork28.BeginDrag()
    
    translation189 = NXOpen.Vector3d(0.0, 9.8626171171710553, 12.109366885161236)
    rotation49 = NXOpen.Matrix3x3()
    
    rotation49.Xx = 1.0
    rotation49.Xy = 0.0
    rotation49.Xz = 0.0
    rotation49.Yx = 0.0
    rotation49.Yy = 0.99619469809174555
    rotation49.Yz = -0.087155742747658194
    rotation49.Zx = 0.0
    rotation49.Zy = 0.087155742747658083
    rotation49.Zz = 0.99619469809174566
    componentNetwork28.DragByTransform(translation189, rotation49)
    
    translation190 = NXOpen.Vector3d(0.0, 18.632303133525625, 25.032237693689439)
    rotation50 = NXOpen.Matrix3x3()
    
    rotation50.Xx = 1.0
    rotation50.Xy = 0.0
    rotation50.Xz = 0.0
    rotation50.Yx = 0.0
    rotation50.Yy = 0.98480775301220813
    rotation50.Yz = -0.17364817766693025
    rotation50.Zx = 0.0
    rotation50.Zy = 0.17364817766693014
    rotation50.Zz = 0.98480775301220813
    componentNetwork28.DragByTransform(translation190, rotation50)
    
    translation191 = NXOpen.Vector3d(0.0, 18.632303133525625, 25.032237693689439)
    rotation51 = NXOpen.Matrix3x3()
    
    rotation51.Xx = 1.0
    rotation51.Xy = 0.0
    rotation51.Xz = 0.0
    rotation51.Yx = 0.0
    rotation51.Yy = 0.98480775301220813
    rotation51.Yz = -0.17364817766693025
    rotation51.Zx = 0.0
    rotation51.Zy = 0.17364817766693014
    rotation51.Zz = 0.98480775301220813
    componentNetwork28.DragByTransform(translation191, rotation51)
    
    componentNetwork28.EndDrag()
    
    componentNetwork28.ResetDisplay()
    
    componentNetwork28.ApplyToModel()
    
    markId146 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Visible, "Transform Origin")
    
    loaded47 = componentNetwork28.IsReferencedGeometryLoaded()
    
    componentNetwork28.BeginDrag()
    
    point803 = NXOpen.Point3d(-86.0201225880718, -133.74374148024947, 119.0002185153958)
    direction791 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point803, direction791)
    
    point804 = NXOpen.Point3d(-86.0201225880718, -121.4328954401242, 116.00568839752751)
    direction792 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point804, direction792)
    
    point805 = NXOpen.Point3d(-86.0201225880718, -120.43471873416809, 115.00751169157138)
    direction793 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point805, direction793)
    
    point806 = NXOpen.Point3d(-86.0201225880718, -119.76926759686403, 114.67478612291936)
    direction794 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point806, direction794)
    
    point807 = NXOpen.Point3d(-86.0201225880718, -119.76926759686403, 114.00933498561528)
    direction795 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point807, direction795)
    
    point808 = NXOpen.Point3d(-86.0201225880718, -119.43654202821197, 113.01115827965918)
    direction796 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point808, direction796)
    
    point809 = NXOpen.Point3d(-86.0201225880718, -119.43654202821197, 112.67843271100716)
    direction797 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point809, direction797)
    
    point810 = NXOpen.Point3d(-86.0201225880718, -119.76926759686403, 112.34570714235511)
    direction798 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point810, direction798)
    
    point811 = NXOpen.Point3d(-86.0201225880718, -121.10016987147215, 112.01298157370307)
    direction799 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point811, direction799)
    
    point812 = NXOpen.Point3d(-86.0201225880718, -122.76379771473232, 111.68025600505104)
    direction800 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point812, direction800)
    
    point813 = NXOpen.Point3d(-86.0201225880718, -123.42924885203638, 111.34753043639901)
    direction801 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point813, direction801)
    
    point814 = NXOpen.Point3d(-86.0201225880718, -124.42742555799249, 111.01480486774697)
    direction802 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point814, direction802)
    
    point815 = NXOpen.Point3d(-86.0201225880718, -124.42742555799249, 111.01480486774697)
    direction803 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point815, direction803)
    
    point816 = NXOpen.Point3d(-86.0201225880718, -124.42742555799249, 110.68207929909494)
    direction804 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point816, direction804)
    
    point817 = NXOpen.Point3d(-86.0201225880718, -124.42742555799249, 110.68207929909494)
    direction805 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point817, direction805)
    
    point818 = NXOpen.Point3d(-86.0201225880718, -124.42742555799249, 110.3493537304429)
    direction806 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point818, direction806)
    
    point819 = NXOpen.Point3d(-86.0201225880718, -124.42742555799249, 110.3493537304429)
    direction807 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point819, direction807)
    
    point820 = NXOpen.Point3d(-86.0201225880718, -124.42742555799249, 110.01662816179086)
    direction808 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point820, direction808)
    
    point821 = NXOpen.Point3d(-86.0201225880718, -124.42742555799249, 110.01662816179086)
    direction809 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point821, direction809)
    
    point822 = NXOpen.Point3d(-86.0201225880718, -124.42742555799249, 109.68390259313884)
    direction810 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point822, direction810)
    
    point823 = NXOpen.Point3d(-86.0201225880718, -124.42742555799249, 109.68390259313884)
    direction811 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point823, direction811)
    
    point824 = NXOpen.Point3d(-86.0201225880718, -124.42742555799249, 109.3511770244868)
    direction812 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point824, direction812)
    
    point825 = NXOpen.Point3d(-86.0201225880718, -124.09469998934046, 109.3511770244868)
    direction813 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point825, direction813)
    
    point826 = NXOpen.Point3d(-86.0201225880718, -124.09469998934046, 109.3511770244868)
    direction814 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point826, direction814)
    
    point827 = NXOpen.Point3d(-86.0201225880718, -123.76197442068843, 109.01845145583476)
    direction815 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point827, direction815)
    
    point828 = NXOpen.Point3d(-86.0201225880718, -123.76197442068843, 109.01845145583476)
    direction816 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point828, direction816)
    
    point829 = NXOpen.Point3d(-86.0201225880718, -123.76197442068843, 109.01845145583476)
    direction817 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point829, direction817)
    
    point830 = NXOpen.Point3d(-86.0201225880718, -123.76197442068843, 109.01845145583476)
    direction818 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point830, direction818)
    
    componentNetwork28.EndDrag()
    
    componentNetwork28.ResetDisplay()
    
    componentNetwork28.ApplyToModel()
    
    # ----------------------------------------------
    #   Menu: Orient View->Front
    # ----------------------------------------------
    workPart.ModelingViews.WorkView.Orient(NXOpen.View.Canned.Front, NXOpen.View.ScaleAdjustment.Fit)
    
    markId147 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Visible, "Translate Along X-axis")
    
    loaded48 = componentNetwork28.IsReferencedGeometryLoaded()
    
    componentNetwork28.BeginDrag()
    
    translation192 = NXOpen.Vector3d(29.0, 2.8421709430404007e-14, 0.0)
    componentNetwork28.DragByTranslation(translation192)
    
    translation193 = NXOpen.Vector3d(34.0, 2.8421709430404007e-14, 0.0)
    componentNetwork28.DragByTranslation(translation193)
    
    translation194 = NXOpen.Vector3d(40.0, 2.8421709430404007e-14, 0.0)
    componentNetwork28.DragByTranslation(translation194)
    
    translation195 = NXOpen.Vector3d(45.0, 2.8421709430404007e-14, 0.0)
    componentNetwork28.DragByTranslation(translation195)
    
    translation196 = NXOpen.Vector3d(50.0, 2.8421709430404007e-14, 0.0)
    componentNetwork28.DragByTranslation(translation196)
    
    translation197 = NXOpen.Vector3d(52.0, 2.8421709430404007e-14, 0.0)
    componentNetwork28.DragByTranslation(translation197)
    
    translation198 = NXOpen.Vector3d(57.0, 2.8421709430404007e-14, 0.0)
    componentNetwork28.DragByTranslation(translation198)
    
    translation199 = NXOpen.Vector3d(59.0, 2.8421709430404007e-14, 0.0)
    componentNetwork28.DragByTranslation(translation199)
    
    translation200 = NXOpen.Vector3d(64.0, 2.8421709430404007e-14, 0.0)
    componentNetwork28.DragByTranslation(translation200)
    
    translation201 = NXOpen.Vector3d(68.0, 2.8421709430404007e-14, 0.0)
    componentNetwork28.DragByTranslation(translation201)
    
    translation202 = NXOpen.Vector3d(73.0, 2.8421709430404007e-14, 0.0)
    componentNetwork28.DragByTranslation(translation202)
    
    translation203 = NXOpen.Vector3d(77.0, 2.8421709430404007e-14, 0.0)
    componentNetwork28.DragByTranslation(translation203)
    
    translation204 = NXOpen.Vector3d(78.0, 2.8421709430404007e-14, 0.0)
    componentNetwork28.DragByTranslation(translation204)
    
    translation205 = NXOpen.Vector3d(79.0, 2.8421709430404007e-14, 0.0)
    componentNetwork28.DragByTranslation(translation205)
    
    translation206 = NXOpen.Vector3d(80.0, 2.8421709430404007e-14, 0.0)
    componentNetwork28.DragByTranslation(translation206)
    
    translation207 = NXOpen.Vector3d(81.0, 2.8421709430404007e-14, 0.0)
    componentNetwork28.DragByTranslation(translation207)
    
    translation208 = NXOpen.Vector3d(82.0, 2.8421709430404007e-14, 0.0)
    componentNetwork28.DragByTranslation(translation208)
    
    translation209 = NXOpen.Vector3d(83.0, 2.8421709430404007e-14, 0.0)
    componentNetwork28.DragByTranslation(translation209)
    
    translation210 = NXOpen.Vector3d(84.0, 2.8421709430404007e-14, 0.0)
    componentNetwork28.DragByTranslation(translation210)
    
    translation211 = NXOpen.Vector3d(85.0, 2.8421709430404007e-14, 0.0)
    componentNetwork28.DragByTranslation(translation211)
    
    translation212 = NXOpen.Vector3d(86.0, 2.8421709430404007e-14, 0.0)
    componentNetwork28.DragByTranslation(translation212)
    
    componentNetwork28.EndDrag()
    
    componentNetwork28.ResetDisplay()
    
    componentNetwork28.ApplyToModel()
    
    # ----------------------------------------------
    #   Menu: Rendering Style->Face Analysis
    # ----------------------------------------------
    workPart.ModelingViews.WorkView.RenderingStyle = NXOpen.View.RenderingStyleType.FaceAnalysis
    
    # ----------------------------------------------
    #   Menu: Orient View->Right
    # ----------------------------------------------
    workPart.ModelingViews.WorkView.Orient(NXOpen.View.Canned.Right, NXOpen.View.ScaleAdjustment.Fit)
    
    scaleAboutPoint109 = NXOpen.Point3d(-118.27944160259102, 6.866731007407318, 0.0)
    viewCenter109 = NXOpen.Point3d(118.27944160259102, -6.866731007407318, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(0.80000000000000004, scaleAboutPoint109, viewCenter109)
    
    scaleAboutPoint110 = NXOpen.Point3d(-141.84091237175736, 21.458534398147865, 0.0)
    viewCenter110 = NXOpen.Point3d(141.84091237175736, -21.458534398147865, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(0.80000000000000004, scaleAboutPoint110, viewCenter110)
    
    scaleAboutPoint111 = NXOpen.Point3d(-87.175295992475654, 123.92303614930384, 0.0)
    viewCenter111 = NXOpen.Point3d(87.175295992475654, -123.92303614930388, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(1.25, scaleAboutPoint111, viewCenter111)
    
    scaleAboutPoint112 = NXOpen.Point3d(-69.311066106017591, 99.567599607406038, 0.0)
    viewCenter112 = NXOpen.Point3d(69.311066106017591, -99.567599607406066, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(1.25, scaleAboutPoint112, viewCenter112)
    
    scaleAboutPoint113 = NXOpen.Point3d(-54.418843233702979, 80.684089337035928, 0.0)
    viewCenter113 = NXOpen.Point3d(54.418843233702951, -80.684089337035985, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(1.25, scaleAboutPoint113, viewCenter113)
    
    scaleAboutPoint114 = NXOpen.Point3d(-56.444528880888136, 24.720231626666333, 0.0)
    viewCenter114 = NXOpen.Point3d(56.444528880888093, -24.720231626666333, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(1.25, scaleAboutPoint114, viewCenter114)
    
    scaleAboutPoint115 = NXOpen.Point3d(-45.155623104710514, 19.116979124621988, 0.0)
    viewCenter115 = NXOpen.Point3d(45.155623104710514, -19.116979124621952, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(1.25, scaleAboutPoint115, viewCenter115)
    
    markId148 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Visible, "Transform Origin")
    
    loaded49 = componentNetwork28.IsReferencedGeometryLoaded()
    
    componentNetwork28.BeginDrag()
    
    point831 = NXOpen.Point3d(-0.020122588071799896, -123.76197442068843, 109.01845145583476)
    direction819 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point831, direction819)
    
    point832 = NXOpen.Point3d(-0.020122588071799896, -125.00115582580121, 108.01287108539837)
    direction820 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point832, direction820)
    
    point833 = NXOpen.Point3d(-0.020122588071799896, -125.52852076717009, 107.83708277160875)
    direction821 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point833, direction821)
    
    point834 = NXOpen.Point3d(-0.020122588071799896, -125.70430908095972, 107.66129445781911)
    direction822 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point834, direction822)
    
    point835 = NXOpen.Point3d(-0.020122588071799896, -126.05588570853895, 107.48550614402949)
    direction823 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point835, direction823)
    
    point836 = NXOpen.Point3d(-0.020122588071799896, -126.23167402232859, 107.13392951645024)
    direction824 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point836, direction824)
    
    point837 = NXOpen.Point3d(-0.020122588071799896, -126.23167402232859, 107.13392951645024)
    direction825 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point837, direction825)
    
    point838 = NXOpen.Point3d(-0.020122588071799896, -126.23167402232859, 106.9581412026606)
    direction826 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point838, direction826)
    
    point839 = NXOpen.Point3d(-0.020122588071799896, -126.05588570853895, 106.9581412026606)
    direction827 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point839, direction827)
    
    point840 = NXOpen.Point3d(-0.020122588071799896, -125.35273245338045, 107.13392951645024)
    direction828 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point840, direction828)
    
    point841 = NXOpen.Point3d(-0.020122588071799896, -122.71590774653605, 107.48550614402949)
    direction829 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point841, direction829)
    
    point842 = NXOpen.Point3d(-0.020122588071799896, -122.01275449137754, 107.66129445781911)
    direction830 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point842, direction830)
    
    point843 = NXOpen.Point3d(-0.020122588071799896, -120.95802460863978, 107.83708277160875)
    direction831 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point843, direction831)
    
    point844 = NXOpen.Point3d(-0.020122588071799896, -120.60644798106051, 108.01287108539837)
    direction832 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point844, direction832)
    
    point845 = NXOpen.Point3d(-0.020122588071799896, -120.4306596672709, 108.188659399188)
    direction833 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point845, direction833)
    
    point846 = NXOpen.Point3d(-0.020122588071799896, -120.4306596672709, 108.71602434055688)
    direction834 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point846, direction834)
    
    point847 = NXOpen.Point3d(-0.020122588071799896, -120.4306596672709, 108.89181265434651)
    direction835 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point847, direction835)
    
    point848 = NXOpen.Point3d(-0.020122588071799896, -120.4306596672709, 109.24338928192576)
    direction836 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point848, direction836)
    
    point849 = NXOpen.Point3d(-0.020122588071799896, -120.78223629485014, 109.24338928192576)
    direction837 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point849, direction837)
    
    point850 = NXOpen.Point3d(-0.020122588071799896, -121.30960123621904, 109.59496590950502)
    direction838 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point850, direction838)
    
    point851 = NXOpen.Point3d(-0.020122588071799896, -122.71590774653605, 109.77075422329465)
    direction839 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point851, direction839)
    
    point852 = NXOpen.Point3d(-0.020122588071799896, -126.93482727748709, 109.77075422329465)
    direction840 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point852, direction840)
    
    point853 = NXOpen.Point3d(-0.020122588071799896, -128.86849872917298, 109.77075422329465)
    direction841 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point853, direction841)
    
    point854 = NXOpen.Point3d(-0.020122588071799896, -129.57165198433151, 109.77075422329465)
    direction842 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point854, direction842)
    
    point855 = NXOpen.Point3d(-0.020122588071799896, -129.74744029812115, 109.77075422329465)
    direction843 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point855, direction843)
    
    point856 = NXOpen.Point3d(-0.020122588071799896, -131.15374680843814, 109.77075422329465)
    direction844 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point856, direction844)
    
    point857 = NXOpen.Point3d(-0.020122588071799896, -132.03268837738631, 109.59496590950502)
    direction845 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point857, direction845)
    
    point858 = NXOpen.Point3d(-0.020122588071799896, -132.20847669117592, 109.59496590950502)
    direction846 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point858, direction846)
    
    point859 = NXOpen.Point3d(-0.020122588071799896, -132.38426500496553, 109.59496590950502)
    direction847 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point859, direction847)
    
    point860 = NXOpen.Point3d(-0.020122588071799896, -132.38426500496553, 109.59496590950502)
    direction848 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point860, direction848)
    
    point861 = NXOpen.Point3d(-0.020122588071799896, -132.38426500496553, 109.59496590950502)
    direction849 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point861, direction849)
    
    componentNetwork28.EndDrag()
    
    componentNetwork28.ResetDisplay()
    
    componentNetwork28.ApplyToModel()
    
    markId149 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Visible, "Transform Origin")
    
    loaded50 = componentNetwork28.IsReferencedGeometryLoaded()
    
    componentNetwork28.BeginDrag()
    
    point862 = NXOpen.Point3d(-0.020122588071799896, -132.38426500496553, 109.59496590950502)
    direction850 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point862, direction850)
    
    point863 = NXOpen.Point3d(-0.020122588071799896, -127.81376884643522, 109.59496590950502)
    direction851 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point863, direction851)
    
    point864 = NXOpen.Point3d(-0.020122588071799896, -126.75903896369748, 109.59496590950502)
    direction852 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point864, direction852)
    
    point865 = NXOpen.Point3d(-0.020122588071799896, -126.58325064990785, 109.59496590950502)
    direction853 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point865, direction853)
    
    point866 = NXOpen.Point3d(-0.020122588071799896, -126.23167402232859, 109.59496590950502)
    direction854 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point866, direction854)
    
    point867 = NXOpen.Point3d(-0.020122588071799896, -125.70430908095972, 109.77075422329465)
    direction855 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point867, direction855)
    
    point868 = NXOpen.Point3d(-0.020122588071799896, -125.70430908095972, 109.77075422329465)
    direction856 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point868, direction856)
    
    point869 = NXOpen.Point3d(-0.020122588071799896, -125.52852076717009, 109.77075422329465)
    direction857 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point869, direction857)
    
    point870 = NXOpen.Point3d(-0.020122588071799896, -124.82536751201158, 109.77075422329465)
    direction858 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point870, direction858)
    
    point871 = NXOpen.Point3d(-0.020122588071799896, -124.64957919822196, 109.77075422329465)
    direction859 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point871, direction859)
    
    point872 = NXOpen.Point3d(-0.020122588071799896, -124.29800257064268, 109.94654253708427)
    direction860 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point872, direction860)
    
    point873 = NXOpen.Point3d(-0.020122588071799896, -124.29800257064268, 109.94654253708427)
    direction861 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point873, direction861)
    
    point874 = NXOpen.Point3d(-0.020122588071799896, -124.12221425685307, 109.94654253708427)
    direction862 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point874, direction862)
    
    point875 = NXOpen.Point3d(-0.020122588071799896, -123.94642594306345, 109.94654253708427)
    direction863 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point875, direction863)
    
    point876 = NXOpen.Point3d(-0.020122588071799896, -123.77063762927381, 109.94654253708427)
    direction864 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point876, direction864)
    
    point877 = NXOpen.Point3d(-0.020122588071799896, -123.77063762927381, 109.94654253708427)
    direction865 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point877, direction865)
    
    point878 = NXOpen.Point3d(-0.020122588071799896, -123.77063762927381, 109.77075422329465)
    direction866 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point878, direction866)
    
    point879 = NXOpen.Point3d(-0.020122588071799896, -123.77063762927381, 109.77075422329465)
    direction867 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point879, direction867)
    
    point880 = NXOpen.Point3d(-0.020122588071799896, -123.77063762927381, 109.59496590950502)
    direction868 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point880, direction868)
    
    point881 = NXOpen.Point3d(-0.020122588071799896, -123.77063762927381, 109.59496590950502)
    direction869 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point881, direction869)
    
    point882 = NXOpen.Point3d(-0.020122588071799896, -123.59484931548418, 109.4191775957154)
    direction870 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point882, direction870)
    
    point883 = NXOpen.Point3d(-0.020122588071799896, -123.41906100169454, 109.4191775957154)
    direction871 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point883, direction871)
    
    point884 = NXOpen.Point3d(-0.020122588071799896, -123.41906100169454, 109.4191775957154)
    direction872 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point884, direction872)
    
    point885 = NXOpen.Point3d(-0.020122588071799896, -123.41906100169454, 109.4191775957154)
    direction873 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point885, direction873)
    
    point886 = NXOpen.Point3d(-0.020122588071799896, -123.41906100169454, 109.4191775957154)
    direction874 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork28.DragByRay(point886, direction874)
    
    componentNetwork28.EndDrag()
    
    componentNetwork28.ResetDisplay()
    
    componentNetwork28.ApplyToModel()
    
    markId150 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "Add Component")
    
    theSession.DeleteUndoMark(markId150, None)
    
    markId151 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "Add Component")
    
    markId152 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "AddComponent on_apply")
    
    componentNetwork28.Solve()
    
    componentPositioner28.ClearNetwork()
    
    nErrs47 = theSession.UpdateManager.AddToDeleteList(componentNetwork28)
    
    nErrs48 = theSession.UpdateManager.DoUpdate(markId142)
    
    componentPositioner28.EndAssemblyConstraints()
    
    logicalobjects12 = addComponentBuilder15.GetLogicalObjectsHavingUnassignedRequiredAttributes()
    
    addComponentBuilder15.ComponentName = "FOREARM"
    
    nXObject13 = addComponentBuilder15.Commit()
    
    errorList12 = addComponentBuilder15.GetOperationFailures()
    
    errorList12.Dispose()
    theSession.DeleteUndoMark(markId151, None)
    
    theSession.SetUndoMarkName(markId141, "Add Component")
    
    addComponentBuilder15.Destroy()
    
    workPart.Points.DeletePoint(point769)
    
    componentPositioner28.PrimaryArrangement = NXOpen.Assemblies.Arrangement.Null
    
    theSession.DeleteUndoMark(markId142, None)
    
    theSession.DeleteUndoMark(markId149, None)
    
    theSession.DeleteUndoMark(markId148, None)
    
    theSession.DeleteUndoMark(markId147, None)
    
    theSession.DeleteUndoMark(markId146, None)
    
    theSession.DeleteUndoMark(markId145, None)
    
    theSession.DeleteUndoMark(markId144, None)
    
    theSession.DeleteUndoMark(markId143, None)
    
    # ----------------------------------------------
    #   Menu: Rendering Style->Shaded with Edges
    # ----------------------------------------------
    workPart.ModelingViews.WorkView.RenderingStyle = NXOpen.View.RenderingStyleType.ShadedWithEdges
    
    scaleAboutPoint116 = NXOpen.Point3d(42.628666093984627, 53.615435705836347, 0.0)
    viewCenter116 = NXOpen.Point3d(-42.628666093984627, -53.61543570583629, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(0.80000000000000004, scaleAboutPoint116, viewCenter116)
    
    scaleAboutPoint117 = NXOpen.Point3d(53.505568009717777, 64.382469925451034, 0.0)
    viewCenter117 = NXOpen.Point3d(-53.505568009717777, -64.382469925450934, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(0.80000000000000004, scaleAboutPoint117, viewCenter117)
    
    scaleAboutPoint118 = NXOpen.Point3d(66.881960012147218, 75.534041081480495, 0.0)
    viewCenter118 = NXOpen.Point3d(-66.881960012147218, -75.534041081480382, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(0.80000000000000004, scaleAboutPoint118, viewCenter118)
    
    scaleAboutPoint119 = NXOpen.Point3d(83.945786565554414, 89.267503096295144, 0.0)
    viewCenter119 = NXOpen.Point3d(-83.945786565554442, -89.26750309629503, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(0.80000000000000004, scaleAboutPoint119, viewCenter119)
    
    scaleAboutPoint120 = NXOpen.Point3d(104.932233206943, 103.8593064870357, 0.0)
    viewCenter120 = NXOpen.Point3d(-104.932233206943, -103.85930648703555, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(0.80000000000000004, scaleAboutPoint120, viewCenter120)
    
    # ----------------------------------------------
    #   Menu: Assemblies->Components->Add Component...
    # ----------------------------------------------
    markId153 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Visible, "Start")
    
    addComponentBuilder16 = workPart.AssemblyManager.CreateAddComponentBuilder()
    
    componentPositioner29 = workPart.ComponentAssembly.Positioner
    
    componentPositioner29.ClearNetwork()
    
    componentPositioner29.PrimaryArrangement = arrangement1
    
    componentPositioner29.BeginAssemblyConstraints()
    
    allowInterpartPositioning28 = theSession.Preferences.Assemblies.InterpartPositioning
    
    expression277 = workPart.Expressions.CreateSystemExpressionWithUnits("1.0", NXOpen.Unit.Null)
    
    expression278 = workPart.Expressions.CreateSystemExpressionWithUnits("1.0", unit1)
    
    expression279 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit1)
    
    expression280 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit2)
    
    expression281 = workPart.Expressions.CreateSystemExpressionWithUnits("1", NXOpen.Unit.Null)
    
    expression282 = workPart.Expressions.CreateSystemExpressionWithUnits("1.0", unit1)
    
    expression283 = workPart.Expressions.CreateSystemExpressionWithUnits("0", unit1)
    
    expression284 = workPart.Expressions.CreateSystemExpressionWithUnits("0", unit2)
    
    network29 = componentPositioner29.EstablishNetwork()
    
    componentNetwork29 = network29
    componentNetwork29.MoveObjectsState = True
    
    componentNetwork29.DisplayComponent = NXOpen.Assemblies.Component.Null
    
    theSession.SetUndoMarkName(markId153, "Add Component Dialog")
    
    componentNetwork29.MoveObjectsState = True
    
    markId154 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "Assembly Constraints Update")
    
    addComponentBuilder16.SetComponentAnchor(NXOpen.Assemblies.ProductInterface.InterfaceObject.Null)
    
    addComponentBuilder16.SetInitialLocationType(NXOpen.Assemblies.AddComponentBuilder.LocationType.Snap)
    
    addComponentBuilder16.SetCount(1)
    
    addComponentBuilder16.SetScatterOption(True)
    
    addComponentBuilder16.ReferenceSet = "Unknown"
    
    addComponentBuilder16.Layer = -1
    
    basePart7, partLoadStatus7 = theSession.Parts.OpenBase(shovel_path)
    
    partLoadStatus7.Dispose()
    addComponentBuilder16.ReferenceSet = "Use Model"
    
    addComponentBuilder16.Layer = -1
    
    partstouse16 = [NXOpen.BasePart.Null] * 1 
    part7 = basePart7
    partstouse16[0] = part7
    addComponentBuilder16.SetPartsToAdd(partstouse16)
    
    productinterfaceobjects16 = addComponentBuilder16.GetAllProductInterfaceObjects()
    
    coordinates23 = NXOpen.Point3d(-0.29025536987728628, -281.46563021920826, 0.0)
    point887 = workPart.Points.CreatePoint(coordinates23)
    
    coordinates24 = NXOpen.Point3d(-0.29025536987728628, -281.46563021920826, 0.0)
    point888 = workPart.Points.CreatePoint(coordinates24)
    
    origin23 = NXOpen.Point3d(-0.29025536987728628, -281.46563021920826, 0.0)
    vector23 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    direction875 = workPart.Directions.CreateDirection(origin23, vector23, NXOpen.SmartObject.UpdateOption.WithinModeling)
    
    origin24 = NXOpen.Point3d(-0.29025536987728628, -281.46563021920826, 0.0)
    vector24 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    direction876 = workPart.Directions.CreateDirection(origin24, vector24, NXOpen.SmartObject.UpdateOption.WithinModeling)
    
    xform13 = workPart.Xforms.CreateXformByPointXDirZDir(point888, direction876, direction875, NXOpen.SmartObject.UpdateOption.WithinModeling, 0.625)
    
    cartesianCoordinateSystem13 = workPart.CoordinateSystems.CreateCoordinateSystem(xform13, NXOpen.SmartObject.UpdateOption.WithinModeling)
    
    point889 = NXOpen.Point3d(-0.29025536987728628, -281.46563021920826, 0.0)
    orientation13 = NXOpen.Matrix3x3()
    
    orientation13.Xx = 1.0
    orientation13.Xy = 0.0
    orientation13.Xz = 0.0
    orientation13.Yx = 0.0
    orientation13.Yy = 1.0
    orientation13.Yz = 0.0
    orientation13.Zx = 0.0
    orientation13.Zy = 0.0
    orientation13.Zz = 1.0
    addComponentBuilder16.SetInitialLocationAndOrientation(point889, orientation13)
    
    movableObjects34 = [NXOpen.NXObject.Null] * 1 
    component23 = workPart.ComponentAssembly.RootComponent.FindObject("COMPONENT shovel 1")
    movableObjects34[0] = component23
    componentNetwork29.SetMovingGroup(movableObjects34)
    
    markId155 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Visible, "Rotate About X-axis")
    
    loaded51 = componentNetwork29.IsReferencedGeometryLoaded()
    
    componentNetwork29.BeginDrag()
    
    translation213 = NXOpen.Vector3d(0.0, 37.829206028156648, 69.188566573179799)
    rotation52 = NXOpen.Matrix3x3()
    
    rotation52.Xx = 1.0
    rotation52.Xy = 0.0
    rotation52.Xz = 0.0
    rotation52.Yx = 0.0
    rotation52.Yy = 0.96592582628906831
    rotation52.Yz = -0.25881904510252057
    rotation52.Zx = 0.0
    rotation52.Zy = 0.25881904510252057
    rotation52.Zz = 0.96592582628906831
    componentNetwork29.DragByTransform(translation213, rotation52)
    
    translation214 = NXOpen.Vector3d(0.0, 52.490705397217653, 119.75964264422822)
    rotation53 = NXOpen.Matrix3x3()
    
    rotation53.Xx = 1.0
    rotation53.Xy = 0.0
    rotation53.Xz = 0.0
    rotation53.Yx = 0.0
    rotation53.Yy = 0.90630778703665005
    rotation53.Yz = -0.42261826174069916
    rotation53.Zx = 0.0
    rotation53.Zy = 0.42261826174069916
    rotation53.Zz = 0.90630778703665005
    componentNetwork29.DragByTransform(translation214, rotation53)
    
    translation215 = NXOpen.Vector3d(0.0, 56.462094386280739, 145.81050889132874)
    rotation54 = NXOpen.Matrix3x3()
    
    rotation54.Xx = 1.0
    rotation54.Xy = 0.0
    rotation54.Xz = 0.0
    rotation54.Yx = 0.0
    rotation54.Yy = 0.86602540378443882
    rotation54.Yz = -0.49999999999999967
    rotation54.Zx = 0.0
    rotation54.Zy = 0.49999999999999967
    rotation54.Zz = 0.86602540378443882
    componentNetwork29.DragByTransform(translation215, rotation54)
    
    translation216 = NXOpen.Vector3d(0.0, 58.147888444259308, 172.10837308446915)
    rotation55 = NXOpen.Matrix3x3()
    
    rotation55.Xx = 1.0
    rotation55.Xy = 0.0
    rotation55.Xz = 0.0
    rotation55.Yx = 0.0
    rotation55.Yy = 0.81915204428899202
    rotation55.Yz = -0.57357643635104572
    rotation55.Zx = 0.0
    rotation55.Zy = 0.57357643635104572
    rotation55.Zz = 0.81915204428899202
    componentNetwork29.DragByTransform(translation216, rotation55)
    
    translation217 = NXOpen.Vector3d(0.0, 57.53525766046198, 198.45309259805509)
    rotation56 = NXOpen.Matrix3x3()
    
    rotation56.Xx = 1.0
    rotation56.Xy = 0.0
    rotation56.Xz = 0.0
    rotation56.Yx = 0.0
    rotation56.Yy = 0.76604444311897835
    rotation56.Yz = -0.64278760968653892
    rotation56.Zx = 0.0
    rotation56.Zy = 0.64278760968653892
    rotation56.Zz = 0.76604444311897835
    componentNetwork29.DragByTransform(translation217, rotation56)
    
    translation218 = NXOpen.Vector3d(0.0, 54.628864525069957, 224.64416820921161)
    rotation57 = NXOpen.Matrix3x3()
    
    rotation57.Xx = 1.0
    rotation57.Xy = 0.0
    rotation57.Xz = 0.0
    rotation57.Yx = 0.0
    rotation57.Yy = 0.70710678118654802
    rotation57.Yz = -0.70710678118654713
    rotation57.Zx = 0.0
    rotation57.Zy = 0.70710678118654713
    rotation57.Zz = 0.70710678118654802
    componentNetwork29.DragByTransform(translation218, rotation57)
    
    translation219 = NXOpen.Vector3d(0.0, 42.040557400722207, 275.7707544679854)
    rotation58 = NXOpen.Matrix3x3()
    
    rotation58.Xx = 1.0
    rotation58.Xy = 0.0
    rotation58.Xz = 0.0
    rotation58.Yx = 0.0
    rotation58.Yy = 0.57357643635104683
    rotation58.Yz = -0.81915204428899147
    rotation58.Zx = 0.0
    rotation58.Zy = 0.81915204428899147
    rotation58.Zz = 0.57357643635104683
    componentNetwork29.DragByTransform(translation219, rotation58)
    
    translation220 = NXOpen.Vector3d(0.0, 32.454448030010326, 300.31716092309654)
    rotation59 = NXOpen.Matrix3x3()
    
    rotation59.Xx = 1.0
    rotation59.Xy = 0.0
    rotation59.Xz = 0.0
    rotation59.Yx = 0.0
    rotation59.Yy = 0.50000000000000089
    rotation59.Yz = -0.86602540378443837
    rotation59.Zx = 0.0
    rotation59.Zy = 0.86602540378443837
    rotation59.Zz = 0.50000000000000089
    componentNetwork29.DragByTransform(translation220, rotation59)
    
    translation221 = NXOpen.Vector3d(0.0, 20.765456413198478, 323.93467640861866)
    rotation60 = NXOpen.Matrix3x3()
    
    rotation60.Xx = 1.0
    rotation60.Xy = 0.0
    rotation60.Xz = 0.0
    rotation60.Yx = 0.0
    rotation60.Yy = 0.42261826174070044
    rotation60.Yz = -0.90630778703664983
    rotation60.Zx = 0.0
    rotation60.Zy = 0.90630778703664983
    rotation60.Zz = 0.42261826174070044
    componentNetwork29.DragByTransform(translation221, rotation60)
    
    translation222 = NXOpen.Vector3d(0.0, 7.0625428344966679, 346.44355737106099)
    rotation61 = NXOpen.Matrix3x3()
    
    rotation61.Xx = 1.0
    rotation61.Xy = 0.0
    rotation61.Xz = 0.0
    rotation61.Yx = 0.0
    rotation61.Yy = 0.34202014332566982
    rotation61.Yz = -0.93969262078590832
    rotation61.Zx = 0.0
    rotation61.Zy = 0.93969262078590832
    rotation61.Zz = 0.34202014332566982
    componentNetwork29.DragByTransform(translation222, rotation61)
    
    translation223 = NXOpen.Vector3d(0.0, -8.5500052597157605, 367.67249763506561)
    rotation62 = NXOpen.Matrix3x3()
    
    rotation62.Xx = 1.0
    rotation62.Xy = 0.0
    rotation62.Xz = 0.0
    rotation62.Yx = 0.0
    rotation62.Yy = 0.25881904510252191
    rotation62.Yz = -0.96592582628906831
    rotation62.Zx = 0.0
    rotation62.Zy = 0.96592582628906831
    rotation62.Zz = 0.25881904510252191
    componentNetwork29.DragByTransform(translation223, rotation62)
    
    translation224 = NXOpen.Vector3d(0.0, -25.953366951327553, 387.45993214683881)
    rotation63 = NXOpen.Matrix3x3()
    
    rotation63.Xx = 1.0
    rotation63.Xy = 0.0
    rotation63.Xz = 0.0
    rotation63.Yx = 0.0
    rotation63.Yy = 0.17364817766693158
    rotation63.Yz = -0.98480775301220824
    rotation63.Zx = 0.0
    rotation63.Zy = 0.98480775301220824
    rotation63.Zz = 0.17364817766693158
    componentNetwork29.DragByTransform(translation224, rotation63)
    
    translation225 = NXOpen.Vector3d(0.0, -45.015092149428511, 405.65526658176623)
    rotation64 = NXOpen.Matrix3x3()
    
    rotation64.Xx = 1.0
    rotation64.Xy = 0.0
    rotation64.Xz = 0.0
    rotation64.Yx = 0.0
    rotation64.Yy = 0.087155742747659457
    rotation64.Yz = -0.99619469809174577
    rotation64.Zx = 0.0
    rotation64.Zy = 0.99619469809174577
    rotation64.Zz = 0.087155742747659457
    componentNetwork29.DragByTransform(translation225, rotation64)
    
    translation226 = NXOpen.Vector3d(0.0, -65.590109615476592, 422.12002345815495)
    rotation65 = NXOpen.Matrix3x3()
    
    rotation65.Xx = 1.0
    rotation65.Xy = 0.0
    rotation65.Xz = 0.0
    rotation65.Yx = 0.0
    rotation65.Yy = 1.3322676295501878e-15
    rotation65.Yz = -1.0000000000000004
    rotation65.Zx = 0.0
    rotation65.Zy = 1.0000000000000004
    rotation65.Zz = 1.3322676295501878e-15
    componentNetwork29.DragByTransform(translation226, rotation65)
    
    translation227 = NXOpen.Vector3d(0.0, -65.590109615476592, 422.12002345815495)
    rotation66 = NXOpen.Matrix3x3()
    
    rotation66.Xx = 1.0
    rotation66.Xy = 0.0
    rotation66.Xz = 0.0
    rotation66.Yx = 0.0
    rotation66.Yy = 1.3322676295501878e-15
    rotation66.Yz = -1.0000000000000004
    rotation66.Zx = 0.0
    rotation66.Zy = 1.0000000000000004
    rotation66.Zz = 1.3322676295501878e-15
    componentNetwork29.DragByTransform(translation227, rotation66)
    
    componentNetwork29.EndDrag()
    
    componentNetwork29.ResetDisplay()
    
    componentNetwork29.ApplyToModel()
    
    markId156 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Visible, "Transform Origin")
    
    loaded52 = componentNetwork29.IsReferencedGeometryLoaded()
    
    componentNetwork29.BeginDrag()
    
    point890 = NXOpen.Point3d(-0.29025536987727207, -243.85506653681603, 178.26495692133904)
    direction877 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork29.DragByRay(point890, direction877)
    
    point891 = NXOpen.Point3d(-0.29025536987727207, -240.6944148627274, 147.13967603388053)
    direction878 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork29.DragByRay(point891, direction878)
    
    point892 = NXOpen.Point3d(-0.29025536987727207, -240.6944148627274, 136.94687219476029)
    direction879 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork29.DragByRay(point892, direction879)
    
    point893 = NXOpen.Point3d(-0.29025536987727207, -240.6944148627274, 123.53528819591787)
    direction880 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork29.DragByRay(point893, direction880)
    
    point894 = NXOpen.Point3d(-0.29025536987727207, -240.6944148627274, 113.34248435679763)
    direction881 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork29.DragByRay(point894, direction881)
    
    point895 = NXOpen.Point3d(-0.29025536987727207, -240.6944148627274, 103.6861438776311)
    direction882 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork29.DragByRay(point895, direction882)
    
    point896 = NXOpen.Point3d(-0.29025536987727207, -240.6944148627274, 85.446389639205393)
    direction883 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork29.DragByRay(point896, direction883)
    
    point897 = NXOpen.Point3d(-0.29025536987727207, -240.6944148627274, 69.888952200548189)
    direction884 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork29.DragByRay(point897, direction884)
    
    point898 = NXOpen.Point3d(-0.29025536987727207, -240.6944148627274, 55.940904841752101)
    direction885 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork29.DragByRay(point898, direction885)
    
    point899 = NXOpen.Point3d(-0.29025536987727207, -240.6944148627274, 46.821027722539263)
    direction886 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork29.DragByRay(point899, direction886)
    
    point900 = NXOpen.Point3d(-0.29025536987727207, -240.6944148627274, 37.164687243372711)
    direction887 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork29.DragByRay(point900, direction887)
    
    point901 = NXOpen.Point3d(-0.29025536987727207, -240.6944148627274, 32.33651700378941)
    direction888 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork29.DragByRay(point901, direction888)
    
    point902 = NXOpen.Point3d(-0.29025536987727207, -241.2308782226811, 30.190663563974642)
    direction889 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork29.DragByRay(point902, direction889)
    
    point903 = NXOpen.Point3d(-0.29025536987727207, -241.2308782226811, 29.117736844067256)
    direction890 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork29.DragByRay(point903, direction890)
    
    point904 = NXOpen.Point3d(-0.29025536987727207, -241.2308782226811, 28.581273484113542)
    direction891 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork29.DragByRay(point904, direction891)
    
    point905 = NXOpen.Point3d(-0.29025536987727207, -241.2308782226811, 27.508346764206156)
    direction892 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork29.DragByRay(point905, direction892)
    
    point906 = NXOpen.Point3d(-0.29025536987727207, -241.2308782226811, 26.971883404252441)
    direction893 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork29.DragByRay(point906, direction893)
    
    point907 = NXOpen.Point3d(-0.29025536987727207, -240.6944148627274, 26.971883404252441)
    direction894 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork29.DragByRay(point907, direction894)
    
    point908 = NXOpen.Point3d(-0.29025536987727207, -240.15795150277367, 26.435420044298773)
    direction895 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork29.DragByRay(point908, direction895)
    
    point909 = NXOpen.Point3d(-0.29025536987727207, -239.62148814282, 25.362493324391387)
    direction896 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork29.DragByRay(point909, direction896)
    
    point910 = NXOpen.Point3d(-0.29025536987727207, -239.0850247828663, 24.289566604483959)
    direction897 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork29.DragByRay(point910, direction897)
    
    point911 = NXOpen.Point3d(-0.29025536987727207, -238.5485614229126, 23.753103244530287)
    direction898 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork29.DragByRay(point911, direction898)
    
    point912 = NXOpen.Point3d(-0.29025536987727207, -238.0120980629589, 22.680176524622905)
    direction899 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork29.DragByRay(point912, direction899)
    
    point913 = NXOpen.Point3d(-0.29025536987727207, -236.9391713430515, 22.680176524622905)
    direction900 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork29.DragByRay(point913, direction900)
    
    point914 = NXOpen.Point3d(-0.29025536987727207, -234.25685454328305, 21.070786444761804)
    direction901 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork29.DragByRay(point914, direction901)
    
    point915 = NXOpen.Point3d(-0.29025536987727207, -233.72039118332933, 21.070786444761804)
    direction902 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork29.DragByRay(point915, direction902)
    
    point916 = NXOpen.Point3d(-0.29025536987727207, -232.64746446342195, 21.070786444761804)
    direction903 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork29.DragByRay(point916, direction903)
    
    point917 = NXOpen.Point3d(-0.29025536987727207, -231.03807438356085, 21.070786444761804)
    direction904 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork29.DragByRay(point917, direction904)
    
    point918 = NXOpen.Point3d(-0.29025536987727207, -231.03807438356085, 21.070786444761804)
    direction905 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork29.DragByRay(point918, direction905)
    
    point919 = NXOpen.Point3d(-0.29025536987727207, -231.03807438356085, 21.070786444761804)
    direction906 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork29.DragByRay(point919, direction906)
    
    point920 = NXOpen.Point3d(-0.29025536987727207, -231.03807438356085, 21.070786444761804)
    direction907 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork29.DragByRay(point920, direction907)
    
    componentNetwork29.EndDrag()
    
    componentNetwork29.ResetDisplay()
    
    componentNetwork29.ApplyToModel()
    
    # ----------------------------------------------
    #   Menu: Orient View->Front
    # ----------------------------------------------
    workPart.ModelingViews.WorkView.Orient(NXOpen.View.Canned.Front, NXOpen.View.ScaleAdjustment.Fit)
    
    # ----------------------------------------------
    #   Menu: Orient View->Right
    # ----------------------------------------------
    workPart.ModelingViews.WorkView.Orient(NXOpen.View.Canned.Right, NXOpen.View.ScaleAdjustment.Fit)
    
    # ----------------------------------------------
    #   Menu: Rendering Style->Face Analysis
    # ----------------------------------------------
    workPart.ModelingViews.WorkView.RenderingStyle = NXOpen.View.RenderingStyleType.FaceAnalysis
    
    scaleAboutPoint121 = NXOpen.Point3d(-105.05019098638631, -70.491944851748599, 0.0)
    viewCenter121 = NXOpen.Point3d(105.05019098638631, 70.491944851748599, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(1.25, scaleAboutPoint121, viewCenter121)
    
    scaleAboutPoint122 = NXOpen.Point3d(-84.04015278910903, -56.393555881398875, 0.0)
    viewCenter122 = NXOpen.Point3d(84.04015278910903, 56.393555881398875, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(1.25, scaleAboutPoint122, viewCenter122)
    
    scaleAboutPoint123 = NXOpen.Point3d(-68.112411884070028, -38.952817135639393, 0.0)
    viewCenter123 = NXOpen.Point3d(68.112411884070056, 38.952817135639428, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(1.25, scaleAboutPoint123, viewCenter123)
    
    scaleAboutPoint124 = NXOpen.Point3d(-58.891377771170099, -31.162253708511514, 0.0)
    viewCenter124 = NXOpen.Point3d(58.891377771170099, 31.162253708511546, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(1.25, scaleAboutPoint124, viewCenter124)
    
    markId157 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Visible, "Transform Origin")
    
    loaded53 = componentNetwork29.IsReferencedGeometryLoaded()
    
    componentNetwork29.BeginDrag()
    
    point921 = NXOpen.Point3d(-0.29025536987727207, -231.03807438356085, 21.070786444761804)
    direction908 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork29.DragByRay(point921, direction908)
    
    point922 = NXOpen.Point3d(-0.29025536987727207, -226.033436266531, 21.516179406446497)
    direction909 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork29.DragByRay(point922, direction909)
    
    point923 = NXOpen.Point3d(-0.29025536987727207, -225.47005088875, 21.516179406446497)
    direction910 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork29.DragByRay(point923, direction910)
    
    point924 = NXOpen.Point3d(-0.29025536987727207, -225.47005088875, 21.516179406446497)
    direction911 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork29.DragByRay(point924, direction911)
    
    point925 = NXOpen.Point3d(-0.29025536987727207, -225.32920454430473, 21.516179406446497)
    direction912 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork29.DragByRay(point925, direction912)
    
    point926 = NXOpen.Point3d(-0.29025536987727207, -225.32920454430473, 21.516179406446497)
    direction913 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork29.DragByRay(point926, direction913)
    
    point927 = NXOpen.Point3d(-0.29025536987727207, -225.18835819985947, 21.657025750891741)
    direction914 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork29.DragByRay(point927, direction914)
    
    point928 = NXOpen.Point3d(-0.29025536987727207, -225.18835819985947, 21.657025750891741)
    direction915 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork29.DragByRay(point928, direction915)
    
    point929 = NXOpen.Point3d(-0.29025536987727207, -225.18835819985947, 21.797872095336995)
    direction916 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork29.DragByRay(point929, direction916)
    
    point930 = NXOpen.Point3d(-0.29025536987727207, -225.18835819985947, 21.797872095336995)
    direction917 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork29.DragByRay(point930, direction917)
    
    point931 = NXOpen.Point3d(-0.29025536987727207, -225.32920454430473, 21.797872095336995)
    direction918 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork29.DragByRay(point931, direction918)
    
    point932 = NXOpen.Point3d(-0.29025536987727207, -225.47005088875, 21.797872095336995)
    direction919 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork29.DragByRay(point932, direction919)
    
    point933 = NXOpen.Point3d(-0.29025536987727207, -226.033436266531, 21.797872095336995)
    direction920 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork29.DragByRay(point933, direction920)
    
    point934 = NXOpen.Point3d(-0.29025536987727207, -226.17428261097626, 21.797872095336995)
    direction921 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork29.DragByRay(point934, direction921)
    
    point935 = NXOpen.Point3d(-0.29025536987727207, -226.45597529986674, 21.797872095336995)
    direction922 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork29.DragByRay(point935, direction922)
    
    point936 = NXOpen.Point3d(-0.29025536987727207, -226.596821644312, 21.797872095336995)
    direction923 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork29.DragByRay(point936, direction923)
    
    point937 = NXOpen.Point3d(-0.29025536987727207, -226.596821644312, 21.797872095336995)
    direction924 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork29.DragByRay(point937, direction924)
    
    point938 = NXOpen.Point3d(-0.29025536987727207, -226.73766798875724, 21.797872095336995)
    direction925 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork29.DragByRay(point938, direction925)
    
    point939 = NXOpen.Point3d(-0.29025536987727207, -226.73766798875724, 21.797872095336995)
    direction926 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork29.DragByRay(point939, direction926)
    
    point940 = NXOpen.Point3d(-0.29025536987727207, -226.87851433320247, 21.797872095336995)
    direction927 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork29.DragByRay(point940, direction927)
    
    point941 = NXOpen.Point3d(-0.29025536987727207, -227.160207022093, 21.938718439782249)
    direction928 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork29.DragByRay(point941, direction928)
    
    point942 = NXOpen.Point3d(-0.29025536987727207, -227.30105336653821, 21.938718439782249)
    direction929 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork29.DragByRay(point942, direction929)
    
    point943 = NXOpen.Point3d(-0.29025536987727207, -227.30105336653821, 21.938718439782249)
    direction930 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork29.DragByRay(point943, direction930)
    
    point944 = NXOpen.Point3d(-0.29025536987727207, -227.30105336653821, 22.079564784227493)
    direction931 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork29.DragByRay(point944, direction931)
    
    point945 = NXOpen.Point3d(-0.29025536987727207, -227.44189971098348, 22.220411128672747)
    direction932 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork29.DragByRay(point945, direction932)
    
    point946 = NXOpen.Point3d(-0.29025536987727207, -227.44189971098348, 22.220411128672747)
    direction933 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork29.DragByRay(point946, direction933)
    
    point947 = NXOpen.Point3d(-0.29025536987727207, -227.58274605542874, 22.220411128672747)
    direction934 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork29.DragByRay(point947, direction934)
    
    point948 = NXOpen.Point3d(-0.29025536987727207, -227.58274605542874, 22.220411128672747)
    direction935 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork29.DragByRay(point948, direction935)
    
    point949 = NXOpen.Point3d(-0.29025536987727207, -227.72359239987401, 22.220411128672747)
    direction936 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork29.DragByRay(point949, direction936)
    
    point950 = NXOpen.Point3d(-0.29025536987727207, -227.86443874431924, 22.220411128672747)
    direction937 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork29.DragByRay(point950, direction937)
    
    point951 = NXOpen.Point3d(-0.29025536987727207, -227.86443874431924, 22.220411128672747)
    direction938 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork29.DragByRay(point951, direction938)
    
    point952 = NXOpen.Point3d(-0.29025536987727207, -228.00528508876448, 22.220411128672747)
    direction939 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork29.DragByRay(point952, direction939)
    
    point953 = NXOpen.Point3d(-0.29025536987727207, -228.00528508876448, 22.220411128672747)
    direction940 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork29.DragByRay(point953, direction940)
    
    point954 = NXOpen.Point3d(-0.29025536987727207, -228.00528508876448, 22.361257473117991)
    direction941 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork29.DragByRay(point954, direction941)
    
    point955 = NXOpen.Point3d(-0.29025536987727207, -227.86443874431924, 22.502103817563246)
    direction942 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork29.DragByRay(point955, direction942)
    
    point956 = NXOpen.Point3d(-0.29025536987727207, -227.86443874431924, 22.502103817563246)
    direction943 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork29.DragByRay(point956, direction943)
    
    point957 = NXOpen.Point3d(-0.29025536987727207, -227.72359239987401, 22.502103817563246)
    direction944 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork29.DragByRay(point957, direction944)
    
    point958 = NXOpen.Point3d(-0.29025536987727207, -227.72359239987401, 22.502103817563246)
    direction945 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork29.DragByRay(point958, direction945)
    
    point959 = NXOpen.Point3d(-0.29025536987727207, -227.72359239987401, 22.361257473117991)
    direction946 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork29.DragByRay(point959, direction946)
    
    point960 = NXOpen.Point3d(-0.29025536987727207, -227.72359239987401, 22.220411128672747)
    direction947 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork29.DragByRay(point960, direction947)
    
    point961 = NXOpen.Point3d(-0.29025536987727207, -227.72359239987401, 22.220411128672747)
    direction948 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork29.DragByRay(point961, direction948)
    
    point962 = NXOpen.Point3d(-0.29025536987727207, -227.72359239987401, 22.079564784227493)
    direction949 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork29.DragByRay(point962, direction949)
    
    point963 = NXOpen.Point3d(-0.29025536987727207, -227.72359239987401, 22.079564784227493)
    direction950 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork29.DragByRay(point963, direction950)
    
    point964 = NXOpen.Point3d(-0.29025536987727207, -227.86443874431924, 22.220411128672747)
    direction951 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork29.DragByRay(point964, direction951)
    
    point965 = NXOpen.Point3d(-0.29025536987727207, -227.86443874431924, 22.220411128672747)
    direction952 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork29.DragByRay(point965, direction952)
    
    point966 = NXOpen.Point3d(-0.29025536987727207, -227.86443874431924, 22.361257473117991)
    direction953 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork29.DragByRay(point966, direction953)
    
    point967 = NXOpen.Point3d(-0.29025536987727207, -227.86443874431924, 22.361257473117991)
    direction954 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork29.DragByRay(point967, direction954)
    
    point968 = NXOpen.Point3d(-0.29025536987727207, -227.86443874431924, 22.361257473117991)
    direction955 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork29.DragByRay(point968, direction955)
    
    point969 = NXOpen.Point3d(-0.29025536987727207, -227.86443874431924, 22.361257473117991)
    direction956 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork29.DragByRay(point969, direction956)
    
    componentNetwork29.EndDrag()
    
    componentNetwork29.ResetDisplay()
    
    componentNetwork29.ApplyToModel()
    
    markId158 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "Add Component")
    
    theSession.DeleteUndoMark(markId158, None)
    
    markId159 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "Add Component")
    
    markId160 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "AddComponent on_apply")
    
    componentNetwork29.Solve()
    
    componentPositioner29.ClearNetwork()
    
    nErrs49 = theSession.UpdateManager.AddToDeleteList(componentNetwork29)
    
    nErrs50 = theSession.UpdateManager.DoUpdate(markId154)
    
    componentPositioner29.EndAssemblyConstraints()
    
    logicalobjects13 = addComponentBuilder16.GetLogicalObjectsHavingUnassignedRequiredAttributes()
    
    addComponentBuilder16.ComponentName = "SHOVEL"
    
    nXObject14 = addComponentBuilder16.Commit()
    
    errorList13 = addComponentBuilder16.GetOperationFailures()
    
    errorList13.Dispose()
    theSession.DeleteUndoMark(markId159, None)
    
    theSession.SetUndoMarkName(markId153, "Add Component")
    
    addComponentBuilder16.Destroy()
    
    workPart.Points.DeletePoint(point887)
    
    componentPositioner29.PrimaryArrangement = NXOpen.Assemblies.Arrangement.Null
    
    theSession.DeleteUndoMark(markId154, None)
    
    theSession.DeleteUndoMark(markId157, None)
    
    theSession.DeleteUndoMark(markId156, None)
    
    theSession.DeleteUndoMark(markId155, None)
    
    # ----------------------------------------------
    #   Menu: Orient View->Isometric
    # ----------------------------------------------
    workPart.ModelingViews.WorkView.Orient(NXOpen.View.Canned.Isometric, NXOpen.View.ScaleAdjustment.Fit)
    
    # ----------------------------------------------
    #   Menu: Assemblies->Components->Add Component...
    # ----------------------------------------------
    markId161 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Visible, "Start")
    
    addComponentBuilder17 = workPart.AssemblyManager.CreateAddComponentBuilder()
    
    componentPositioner30 = workPart.ComponentAssembly.Positioner
    
    componentPositioner30.ClearNetwork()
    
    componentPositioner30.PrimaryArrangement = arrangement1
    
    componentPositioner30.BeginAssemblyConstraints()
    
    allowInterpartPositioning29 = theSession.Preferences.Assemblies.InterpartPositioning
    
    expression285 = workPart.Expressions.CreateSystemExpressionWithUnits("1.0", NXOpen.Unit.Null)
    
    expression286 = workPart.Expressions.CreateSystemExpressionWithUnits("1.0", unit1)
    
    expression287 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit1)
    
    expression288 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit2)
    
    expression289 = workPart.Expressions.CreateSystemExpressionWithUnits("1", NXOpen.Unit.Null)
    
    expression290 = workPart.Expressions.CreateSystemExpressionWithUnits("1.0", unit1)
    
    expression291 = workPart.Expressions.CreateSystemExpressionWithUnits("0", unit1)
    
    expression292 = workPart.Expressions.CreateSystemExpressionWithUnits("0", unit2)
    
    network30 = componentPositioner30.EstablishNetwork()
    
    componentNetwork30 = network30
    componentNetwork30.MoveObjectsState = True
    
    componentNetwork30.DisplayComponent = NXOpen.Assemblies.Component.Null
    
    theSession.SetUndoMarkName(markId161, "Add Component Dialog")
    
    componentNetwork30.MoveObjectsState = True
    
    markId162 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "Assembly Constraints Update")
    
    addComponentBuilder17.SetComponentAnchor(NXOpen.Assemblies.ProductInterface.InterfaceObject.Null)
    
    addComponentBuilder17.SetInitialLocationType(NXOpen.Assemblies.AddComponentBuilder.LocationType.Snap)
    
    addComponentBuilder17.SetCount(1)
    
    addComponentBuilder17.SetScatterOption(True)
    
    addComponentBuilder17.ReferenceSet = "Unknown"
    
    addComponentBuilder17.Layer = -1
    
    addComponentBuilder17.ReferenceSet = "Use Model"
    
    addComponentBuilder17.Layer = -1
    
    partstouse17 = [NXOpen.BasePart.Null] * 1 
    partstouse17[0] = part2
    addComponentBuilder17.SetPartsToAdd(partstouse17)
    
    productinterfaceobjects17 = addComponentBuilder17.GetAllProductInterfaceObjects()
    
    coordinates25 = NXOpen.Point3d(-229.01529833651406, -112.76077632646363, 0.0)
    point970 = workPart.Points.CreatePoint(coordinates25)
    
    coordinates26 = NXOpen.Point3d(-229.01529833651406, -112.76077632646363, 0.0)
    point971 = workPart.Points.CreatePoint(coordinates26)
    
    origin25 = NXOpen.Point3d(-229.01529833651406, -112.76077632646363, 0.0)
    vector25 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    direction957 = workPart.Directions.CreateDirection(origin25, vector25, NXOpen.SmartObject.UpdateOption.WithinModeling)
    
    origin26 = NXOpen.Point3d(-229.01529833651406, -112.76077632646363, 0.0)
    vector26 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    direction958 = workPart.Directions.CreateDirection(origin26, vector26, NXOpen.SmartObject.UpdateOption.WithinModeling)
    
    xform14 = workPart.Xforms.CreateXformByPointXDirZDir(point971, direction958, direction957, NXOpen.SmartObject.UpdateOption.WithinModeling, 0.625)
    
    cartesianCoordinateSystem14 = workPart.CoordinateSystems.CreateCoordinateSystem(xform14, NXOpen.SmartObject.UpdateOption.WithinModeling)
    
    point972 = NXOpen.Point3d(-229.01529833651406, -112.76077632646363, 0.0)
    orientation14 = NXOpen.Matrix3x3()
    
    orientation14.Xx = 1.0
    orientation14.Xy = 0.0
    orientation14.Xz = 0.0
    orientation14.Yx = 0.0
    orientation14.Yy = 1.0
    orientation14.Yz = 0.0
    orientation14.Zx = 0.0
    orientation14.Zy = 0.0
    orientation14.Zz = 1.0
    addComponentBuilder17.SetInitialLocationAndOrientation(point972, orientation14)
    
    movableObjects35 = [NXOpen.NXObject.Null] * 1 
    component24 = workPart.ComponentAssembly.RootComponent.FindObject("COMPONENT connect 1")
    movableObjects35[0] = component24
    componentNetwork30.SetMovingGroup(movableObjects35)
    
    markId163 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Visible, "Translate Along Y-axis")
    
    loaded54 = componentNetwork30.IsReferencedGeometryLoaded()
    
    componentNetwork30.BeginDrag()
    
    translation228 = NXOpen.Vector3d(0.0, 10.0, 0.0)
    componentNetwork30.DragByTranslation(translation228)
    
    componentNetwork30.EndDrag()
    
    componentNetwork30.ResetDisplay()
    
    componentNetwork30.ApplyToModel()
    
    markId164 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Visible, "Translate Along Z-axis")
    
    loaded55 = componentNetwork30.IsReferencedGeometryLoaded()
    
    componentNetwork30.BeginDrag()
    
    translation229 = NXOpen.Vector3d(0.0, 0.0, 45.0)
    componentNetwork30.DragByTranslation(translation229)
    
    translation230 = NXOpen.Vector3d(0.0, 0.0, 55.0)
    componentNetwork30.DragByTranslation(translation230)
    
    translation231 = NXOpen.Vector3d(0.0, 0.0, 65.0)
    componentNetwork30.DragByTranslation(translation231)
    
    translation232 = NXOpen.Vector3d(0.0, 0.0, 70.0)
    componentNetwork30.DragByTranslation(translation232)
    
    translation233 = NXOpen.Vector3d(0.0, 0.0, 75.0)
    componentNetwork30.DragByTranslation(translation233)
    
    translation234 = NXOpen.Vector3d(0.0, 0.0, 80.0)
    componentNetwork30.DragByTranslation(translation234)
    
    translation235 = NXOpen.Vector3d(0.0, 0.0, 85.0)
    componentNetwork30.DragByTranslation(translation235)
    
    translation236 = NXOpen.Vector3d(0.0, 0.0, 90.0)
    componentNetwork30.DragByTranslation(translation236)
    
    translation237 = NXOpen.Vector3d(0.0, 0.0, 95.0)
    componentNetwork30.DragByTranslation(translation237)
    
    translation238 = NXOpen.Vector3d(0.0, 0.0, 100.0)
    componentNetwork30.DragByTranslation(translation238)
    
    componentNetwork30.EndDrag()
    
    componentNetwork30.ResetDisplay()
    
    componentNetwork30.ApplyToModel()
    
    markId165 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Visible, "Translate Along X-axis")
    
    loaded56 = componentNetwork30.IsReferencedGeometryLoaded()
    
    componentNetwork30.BeginDrag()
    
    translation239 = NXOpen.Vector3d(40.0, 0.0, 0.0)
    componentNetwork30.DragByTranslation(translation239)
    
    translation240 = NXOpen.Vector3d(55.0, 0.0, 0.0)
    componentNetwork30.DragByTranslation(translation240)
    
    translation241 = NXOpen.Vector3d(65.0, 0.0, 0.0)
    componentNetwork30.DragByTranslation(translation241)
    
    translation242 = NXOpen.Vector3d(75.0, 0.0, 0.0)
    componentNetwork30.DragByTranslation(translation242)
    
    translation243 = NXOpen.Vector3d(80.0, 0.0, 0.0)
    componentNetwork30.DragByTranslation(translation243)
    
    translation244 = NXOpen.Vector3d(85.0, 0.0, 0.0)
    componentNetwork30.DragByTranslation(translation244)
    
    translation245 = NXOpen.Vector3d(90.0, 0.0, 0.0)
    componentNetwork30.DragByTranslation(translation245)
    
    translation246 = NXOpen.Vector3d(100.0, 0.0, 0.0)
    componentNetwork30.DragByTranslation(translation246)
    
    translation247 = NXOpen.Vector3d(105.0, 0.0, 0.0)
    componentNetwork30.DragByTranslation(translation247)
    
    translation248 = NXOpen.Vector3d(110.0, 0.0, 0.0)
    componentNetwork30.DragByTranslation(translation248)
    
    componentNetwork30.EndDrag()
    
    componentNetwork30.ResetDisplay()
    
    componentNetwork30.ApplyToModel()
    
    # ----------------------------------------------
    #   Menu: Orient View->Right
    # ----------------------------------------------
    workPart.ModelingViews.WorkView.Orient(NXOpen.View.Canned.Right, NXOpen.View.ScaleAdjustment.Fit)
    
    markId166 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Visible, "Transform Origin")
    
    loaded57 = componentNetwork30.IsReferencedGeometryLoaded()
    
    componentNetwork30.BeginDrag()
    
    point973 = NXOpen.Point3d(-119.01529833651409, -37.760776848004269, 69.957431778311729)
    direction959 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork30.DragByRay(point973, direction959)
    
    point974 = NXOpen.Point3d(-119.01529833651409, -48.391438795512727, 115.29013503120149)
    direction960 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork30.DragByRay(point974, direction960)
    
    point975 = NXOpen.Point3d(-119.01529833651409, -50.454617669222451, 125.94989254536836)
    direction961 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork30.DragByRay(point975, direction961)
    
    point976 = NXOpen.Point3d(-119.01529833651409, -51.486207106077288, 138.67282893324492)
    direction962 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork30.DragByRay(point976, direction962)
    
    point977 = NXOpen.Point3d(-119.01529833651409, -52.173933397313881, 143.83077611751921)
    direction963 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork30.DragByRay(point977, direction963)
    
    point978 = NXOpen.Point3d(-119.01529833651409, -53.893249125405312, 150.36417588426664)
    direction964 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork30.DragByRay(point978, direction964)
    
    point979 = NXOpen.Point3d(-119.01529833651409, -55.612564853496743, 156.55371250539579)
    direction965 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork30.DragByRay(point979, direction965)
    
    point980 = NXOpen.Point3d(-119.01529833651409, -56.988017435969873, 161.3677965440518)
    direction966 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork30.DragByRay(point980, direction966)
    
    point981 = NXOpen.Point3d(-119.01529833651409, -58.01960687282471, 163.08711227214323)
    direction967 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork30.DragByRay(point981, direction967)
    
    point982 = NXOpen.Point3d(-119.01529833651409, -58.36347001844301, 164.11870170899806)
    direction968 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork30.DragByRay(point982, direction968)
    
    point983 = NXOpen.Point3d(-119.01529833651409, -59.395059455297897, 167.21347001956266)
    direction969 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork30.DragByRay(point983, direction969)
    
    point984 = NXOpen.Point3d(-119.01529833651409, -61.114375183389328, 172.71528034945521)
    direction970 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork30.DragByRay(point984, direction970)
    
    point985 = NXOpen.Point3d(-119.01529833651409, -61.458238329007571, 176.15391180563807)
    direction971 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork30.DragByRay(point985, direction971)
    
    point986 = NXOpen.Point3d(-119.01529833651409, -62.489827765862458, 177.87322753372951)
    direction972 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork30.DragByRay(point986, direction972)
    
    point987 = NXOpen.Point3d(-119.01529833651409, -62.489827765862458, 178.90481697058436)
    direction973 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork30.DragByRay(point987, direction973)
    
    point988 = NXOpen.Point3d(-119.01529833651409, -63.177554057099002, 179.59254326182094)
    direction974 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork30.DragByRay(point988, direction974)
    
    point989 = NXOpen.Point3d(-119.01529833651409, -63.865280348335588, 180.62413269867579)
    direction975 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork30.DragByRay(point989, direction975)
    
    point990 = NXOpen.Point3d(-119.01529833651409, -64.553006639572189, 181.31185898991237)
    direction976 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork30.DragByRay(point990, direction976)
    
    point991 = NXOpen.Point3d(-119.01529833651409, -64.553006639572189, 181.31185898991237)
    direction977 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork30.DragByRay(point991, direction977)
    
    point992 = NXOpen.Point3d(-119.01529833651409, -64.553006639572189, 181.31185898991237)
    direction978 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork30.DragByRay(point992, direction978)
    
    componentNetwork30.EndDrag()
    
    componentNetwork30.ResetDisplay()
    
    componentNetwork30.ApplyToModel()
    
    scaleAboutPoint125 = NXOpen.Point3d(-53.814582289261729, 56.393555881398875, 0.0)
    viewCenter125 = NXOpen.Point3d(53.814582289261729, -56.393555881398875, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(0.80000000000000004, scaleAboutPoint125, viewCenter125)
    
    scaleAboutPoint126 = NXOpen.Point3d(-74.57531970596574, 66.623484463542908, 0.0)
    viewCenter126 = NXOpen.Point3d(74.575319705965697, -66.623484463542837, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(0.80000000000000004, scaleAboutPoint126, viewCenter126)
    
    scaleAboutPoint127 = NXOpen.Point3d(-15.3126557033144, 152.05198470308579, 0.0)
    viewCenter127 = NXOpen.Point3d(15.312655703314222, -152.05198470308571, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(1.25, scaleAboutPoint127, viewCenter127)
    
    scaleAboutPoint128 = NXOpen.Point3d(-8.8114931064686548, 122.50124562651435, 0.0)
    viewCenter128 = NXOpen.Point3d(8.8114931064685127, -122.50124562651425, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(1.25, scaleAboutPoint128, viewCenter128)
    
    scaleAboutPoint129 = NXOpen.Point3d(10.143962795739286, 79.432386637824109, 0.0)
    viewCenter129 = NXOpen.Point3d(-10.143962795739514, -79.432386637823967, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(1.25, scaleAboutPoint129, viewCenter129)
    
    scaleAboutPoint130 = NXOpen.Point3d(7.8400797200967922, 62.445547244280782, 0.0)
    viewCenter130 = NXOpen.Point3d(-7.8400797200970649, -62.445547244280618, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(1.25, scaleAboutPoint130, viewCenter130)
    
    scaleAboutPoint131 = NXOpen.Point3d(6.2720637760774709, 49.296220555837543, 0.0)
    viewCenter131 = NXOpen.Point3d(-6.2720637760776343, -49.29622055583738, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(1.25, scaleAboutPoint131, viewCenter131)
    
    scaleAboutPoint132 = NXOpen.Point3d(5.017651020861976, 39.260918514113492, 0.0)
    viewCenter132 = NXOpen.Point3d(-5.0176510208620924, -39.260918514113321, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(1.25, scaleAboutPoint132, viewCenter132)
    
    scaleAboutPoint133 = NXOpen.Point3d(4.0141208166895588, 31.408734811290827, 0.0)
    viewCenter133 = NXOpen.Point3d(-4.0141208166896982, -31.408734811290653, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(1.25, scaleAboutPoint133, viewCenter133)
    
    scaleAboutPoint134 = NXOpen.Point3d(-0.95775514222777791, 27.155175209044273, 0.0)
    viewCenter134 = NXOpen.Point3d(0.95775514222764768, -27.155175209044103, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(1.25, scaleAboutPoint134, viewCenter134)
    
    scaleAboutPoint135 = NXOpen.Point3d(-1.036629095117104, 21.633998506790473, 0.0)
    viewCenter135 = NXOpen.Point3d(1.036629095116985, -21.633998506790302, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(1.25, scaleAboutPoint135, viewCenter135)
    
    scaleAboutPoint136 = NXOpen.Point3d(-0.90141660444964766, 17.307198805432403, 0.0)
    viewCenter136 = NXOpen.Point3d(0.90141660444954053, -17.307198805432233, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(1.25, scaleAboutPoint136, viewCenter136)
    
    scaleAboutPoint137 = NXOpen.Point3d(-1.0672772596683757, 13.845759044345934, 0.0)
    viewCenter137 = NXOpen.Point3d(1.0672772596682805, -13.845759044345764, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(1.25, scaleAboutPoint137, viewCenter137)
    
    scaleAboutPoint138 = NXOpen.Point3d(-1.6384148202476467, 11.076607235476766, 0.0)
    viewCenter138 = NXOpen.Point3d(1.6384148202475401, -11.076607235476596, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(1.25, scaleAboutPoint138, viewCenter138)
    
    scaleAboutPoint139 = NXOpen.Point3d(-13.974986128759806, 4.7260190871368044, 0.0)
    viewCenter139 = NXOpen.Point3d(13.974986128759687, -4.726019087136633, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(1.25, scaleAboutPoint139, viewCenter139)
    
    scaleAboutPoint140 = NXOpen.Point3d(-11.179988903007855, 3.7808152697094588, 0.0)
    viewCenter140 = NXOpen.Point3d(11.179988903007738, -3.7808152697092883, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(1.25, scaleAboutPoint140, viewCenter140)
    
    markId167 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Visible, "Transform Origin")
    
    loaded58 = componentNetwork30.IsReferencedGeometryLoaded()
    
    componentNetwork30.BeginDrag()
    
    point993 = NXOpen.Point3d(-119.01529833651409, -64.553006639572189, 181.31185898991237)
    direction979 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork30.DragByRay(point993, direction979)
    
    point994 = NXOpen.Point3d(-119.01529833651409, -65.073899048036978, 181.44249152401107)
    direction980 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork30.DragByRay(point994, direction980)
    
    point995 = NXOpen.Point3d(-119.01529833651409, -65.310200002393813, 181.56064200118951)
    direction981 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork30.DragByRay(point995, direction981)
    
    point996 = NXOpen.Point3d(-119.01529833651409, -65.475610670443601, 181.65516238293225)
    direction982 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork30.DragByRay(point996, direction982)
    
    point997 = NXOpen.Point3d(-119.01529833651409, -65.570131052186326, 181.77331286011065)
    direction983 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork30.DragByRay(point997, direction983)
    
    point998 = NXOpen.Point3d(-119.01529833651409, -65.593761147622018, 181.79694295554634)
    direction984 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork30.DragByRay(point998, direction984)
    
    point999 = NXOpen.Point3d(-119.01529833651409, -65.641021338493388, 181.79694295554634)
    direction985 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork30.DragByRay(point999, direction985)
    
    point1000 = NXOpen.Point3d(-119.01529833651409, -65.688281529364758, 181.79694295554634)
    direction986 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork30.DragByRay(point1000, direction986)
    
    point1001 = NXOpen.Point3d(-119.01529833651409, -65.877322292850224, 181.82057305098203)
    direction987 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork30.DragByRay(point1001, direction987)
    
    point1002 = NXOpen.Point3d(-119.01529833651409, -66.137253342642737, 181.91509343272475)
    direction988 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork30.DragByRay(point1002, direction988)
    
    point1003 = NXOpen.Point3d(-119.01529833651409, -66.255403819821154, 181.96235362359613)
    direction989 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork30.DragByRay(point1003, direction989)
    
    point1004 = NXOpen.Point3d(-119.01529833651409, -66.420814487870942, 181.98598371903182)
    direction990 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork30.DragByRay(point1004, direction990)
    
    point1005 = NXOpen.Point3d(-119.01529833651409, -66.515334869613682, 182.00961381446749)
    direction991 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork30.DragByRay(point1005, direction991)
    
    point1006 = NXOpen.Point3d(-119.01529833651409, -66.775265919406195, 182.08050410077453)
    direction992 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork30.DragByRay(point1006, direction992)
    
    point1007 = NXOpen.Point3d(-119.01529833651409, -66.846156205713243, 182.15139438708158)
    direction993 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork30.DragByRay(point1007, direction993)
    
    point1008 = NXOpen.Point3d(-119.01529833651409, -66.91704649202029, 182.17502448251727)
    direction994 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork30.DragByRay(point1008, direction994)
    
    point1009 = NXOpen.Point3d(-119.01529833651409, -66.940676587455982, 182.19865457795296)
    direction995 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork30.DragByRay(point1009, direction995)
    
    point1010 = NXOpen.Point3d(-119.01529833651409, -66.96430668289166, 182.19865457795296)
    direction996 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork30.DragByRay(point1010, direction996)
    
    point1011 = NXOpen.Point3d(-119.01529833651409, -67.01156687376303, 182.24591476882432)
    direction997 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork30.DragByRay(point1011, direction997)
    
    point1012 = NXOpen.Point3d(-119.01529833651409, -67.035196969198722, 182.24591476882432)
    direction998 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork30.DragByRay(point1012, direction998)
    
    point1013 = NXOpen.Point3d(-119.01529833651409, -67.0588270646344, 182.26954486426001)
    direction999 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork30.DragByRay(point1013, direction999)
    
    point1014 = NXOpen.Point3d(-119.01529833651409, -67.082457160070078, 182.26954486426001)
    direction1000 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork30.DragByRay(point1014, direction1000)
    
    point1015 = NXOpen.Point3d(-119.01529833651409, -67.129717350941448, 182.2931749596957)
    direction1001 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork30.DragByRay(point1015, direction1001)
    
    point1016 = NXOpen.Point3d(-119.01529833651409, -67.129717350941448, 182.2931749596957)
    direction1002 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork30.DragByRay(point1016, direction1002)
    
    point1017 = NXOpen.Point3d(-119.01529833651409, -67.15334744637714, 182.2931749596957)
    direction1003 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork30.DragByRay(point1017, direction1003)
    
    point1018 = NXOpen.Point3d(-119.01529833651409, -67.176977541812818, 182.31680505513137)
    direction1004 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork30.DragByRay(point1018, direction1004)
    
    point1019 = NXOpen.Point3d(-119.01529833651409, -67.224237732684188, 182.34043515056706)
    direction1005 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork30.DragByRay(point1019, direction1005)
    
    point1020 = NXOpen.Point3d(-119.01529833651409, -67.247867828119865, 182.36406524600275)
    direction1006 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork30.DragByRay(point1020, direction1006)
    
    point1021 = NXOpen.Point3d(-119.01529833651409, -67.247867828119865, 182.38769534143842)
    direction1007 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork30.DragByRay(point1021, direction1007)
    
    point1022 = NXOpen.Point3d(-119.01529833651409, -67.271497923555557, 182.41132543687411)
    direction1008 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork30.DragByRay(point1022, direction1008)
    
    point1023 = NXOpen.Point3d(-119.01529833651409, -67.271497923555557, 182.41132543687411)
    direction1009 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork30.DragByRay(point1023, direction1009)
    
    point1024 = NXOpen.Point3d(-119.01529833651409, -67.295128018991235, 182.4349555323098)
    direction1010 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork30.DragByRay(point1024, direction1010)
    
    point1025 = NXOpen.Point3d(-119.01529833651409, -67.295128018991235, 182.4349555323098)
    direction1011 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork30.DragByRay(point1025, direction1011)
    
    point1026 = NXOpen.Point3d(-119.01529833651409, -67.318758114426913, 182.4349555323098)
    direction1012 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork30.DragByRay(point1026, direction1012)
    
    point1027 = NXOpen.Point3d(-119.01529833651409, -67.318758114426913, 182.4349555323098)
    direction1013 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork30.DragByRay(point1027, direction1013)
    
    point1028 = NXOpen.Point3d(-119.01529833651409, -67.318758114426913, 182.4349555323098)
    direction1014 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork30.DragByRay(point1028, direction1014)
    
    point1029 = NXOpen.Point3d(-119.01529833651409, -67.318758114426913, 182.4349555323098)
    direction1015 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork30.DragByRay(point1029, direction1015)
    
    componentNetwork30.EndDrag()
    
    componentNetwork30.ResetDisplay()
    
    componentNetwork30.ApplyToModel()
    
    scaleAboutPoint141 = NXOpen.Point3d(3.7926303174271565, 5.5294423319500456, 0.0)
    viewCenter141 = NXOpen.Point3d(-3.7926303174272737, -5.5294423319498742, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(0.80000000000000004, scaleAboutPoint141, viewCenter141)
    
    scaleAboutPoint142 = NXOpen.Point3d(4.5340245617217265, 6.5278138641076753, 0.0)
    viewCenter142 = NXOpen.Point3d(-4.5340245617218526, -6.5278138641075047, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(0.80000000000000004, scaleAboutPoint142, viewCenter142)
    
    scaleAboutPoint143 = NXOpen.Point3d(5.1875443886148416, 6.7198083895226022, 0.0)
    viewCenter143 = NXOpen.Point3d(-5.1875443886149792, -6.7198083895224316, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(0.80000000000000004, scaleAboutPoint143, viewCenter143)
    
    scaleAboutPoint144 = NXOpen.Point3d(6.4844304857685673, 8.261302896459771, 0.0)
    viewCenter144 = NXOpen.Point3d(-6.4844304857687076, -8.261302896459604, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(0.80000000000000004, scaleAboutPoint144, viewCenter144)
    
    scaleAboutPoint145 = NXOpen.Point3d(7.8170847937868571, 10.268937957889921, 0.0)
    viewCenter145 = NXOpen.Point3d(-7.8170847937870045, -10.268937957889751, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(0.80000000000000004, scaleAboutPoint145, viewCenter145)
    
    scaleAboutPoint146 = NXOpen.Point3d(8.689656066894063, -5.696952940121383, 0.0)
    viewCenter146 = NXOpen.Point3d(-8.6896560668942051, 5.6969529401215491, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(0.80000000000000004, scaleAboutPoint146, viewCenter146)
    
    markId168 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "Add Component")
    
    theSession.DeleteUndoMark(markId168, None)
    
    markId169 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "Add Component")
    
    markId170 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "AddComponent on_apply")
    
    componentNetwork30.Solve()
    
    componentPositioner30.ClearNetwork()
    
    nErrs51 = theSession.UpdateManager.AddToDeleteList(componentNetwork30)
    
    nErrs52 = theSession.UpdateManager.DoUpdate(markId162)
    
    componentPositioner30.EndAssemblyConstraints()
    
    logicalobjects14 = addComponentBuilder17.GetLogicalObjectsHavingUnassignedRequiredAttributes()
    
    addComponentBuilder17.ComponentName = "CONNECT"
    
    nXObject15 = addComponentBuilder17.Commit()
    
    errorList14 = addComponentBuilder17.GetOperationFailures()
    
    errorList14.Dispose()
    theSession.DeleteUndoMark(markId169, None)
    
    theSession.SetUndoMarkName(markId161, "Add Component")
    
    addComponentBuilder17.Destroy()
    
    workPart.Points.DeletePoint(point970)
    
    componentPositioner30.PrimaryArrangement = NXOpen.Assemblies.Arrangement.Null
    
    theSession.DeleteUndoMark(markId162, None)
    
    theSession.DeleteUndoMark(markId167, None)
    
    theSession.DeleteUndoMark(markId166, None)
    
    theSession.DeleteUndoMark(markId165, None)
    
    theSession.DeleteUndoMark(markId164, None)
    
    theSession.DeleteUndoMark(markId163, None)
    
    scaleAboutPoint147 = NXOpen.Point3d(30.873518702398705, 19.650881977001344, 0.0)
    viewCenter147 = NXOpen.Point3d(-30.873518702398854, -19.65088197700117, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(0.80000000000000004, scaleAboutPoint147, viewCenter147)
    
    scaleAboutPoint148 = NXOpen.Point3d(38.929929604666988, 24.563602471251659, 0.0)
    viewCenter148 = NXOpen.Point3d(-38.929929604667137, -24.563602471251492, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(0.80000000000000004, scaleAboutPoint148, viewCenter148)
    
    scaleAboutPoint149 = NXOpen.Point3d(49.78918276139575, 30.141117711283567, 0.0)
    viewCenter149 = NXOpen.Point3d(-49.789182761395899, -30.141117711283389, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(0.80000000000000004, scaleAboutPoint149, viewCenter149)
    
    scaleAboutPoint150 = NXOpen.Point3d(62.940710173970935, 37.148223347434708, 0.0)
    viewCenter150 = NXOpen.Point3d(-62.940710173971105, -37.148223347434566, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(0.80000000000000004, scaleAboutPoint150, viewCenter150)
    
    scaleAboutPoint151 = NXOpen.Point3d(79.996322196637891, 45.554989531510543, 0.0)
    viewCenter151 = NXOpen.Point3d(-79.996322196638047, -45.554989531510437, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(0.80000000000000004, scaleAboutPoint151, viewCenter151)
    
    scaleAboutPoint152 = NXOpen.Point3d(100.54558377878664, 56.118465364904267, 0.0)
    viewCenter152 = NXOpen.Point3d(-100.54558377878682, -56.118465364904154, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(0.80000000000000004, scaleAboutPoint152, viewCenter152)
    
    scaleAboutPoint153 = NXOpen.Point3d(126.71356916033818, 60.176050483199987, 0.0)
    viewCenter153 = NXOpen.Point3d(-126.71356916033835, -60.176050483199958, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(0.80000000000000004, scaleAboutPoint153, viewCenter153)
    
    # ----------------------------------------------
    #   Menu: Assemblies->Components->Add Component...
    # ----------------------------------------------
    markId171 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Visible, "Start")
    
    addComponentBuilder18 = workPart.AssemblyManager.CreateAddComponentBuilder()
    
    componentPositioner31 = workPart.ComponentAssembly.Positioner
    
    componentPositioner31.ClearNetwork()
    
    componentPositioner31.PrimaryArrangement = arrangement1
    
    componentPositioner31.BeginAssemblyConstraints()
    
    allowInterpartPositioning30 = theSession.Preferences.Assemblies.InterpartPositioning
    
    expression293 = workPart.Expressions.CreateSystemExpressionWithUnits("1.0", NXOpen.Unit.Null)
    
    expression294 = workPart.Expressions.CreateSystemExpressionWithUnits("1.0", unit1)
    
    expression295 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit1)
    
    expression296 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit2)
    
    expression297 = workPart.Expressions.CreateSystemExpressionWithUnits("1", NXOpen.Unit.Null)
    
    expression298 = workPart.Expressions.CreateSystemExpressionWithUnits("1.0", unit1)
    
    expression299 = workPart.Expressions.CreateSystemExpressionWithUnits("0", unit1)
    
    expression300 = workPart.Expressions.CreateSystemExpressionWithUnits("0", unit2)
    
    network31 = componentPositioner31.EstablishNetwork()
    
    componentNetwork31 = network31
    componentNetwork31.MoveObjectsState = True
    
    componentNetwork31.DisplayComponent = NXOpen.Assemblies.Component.Null
    
    theSession.SetUndoMarkName(markId171, "Add Component Dialog")
    
    componentNetwork31.MoveObjectsState = True
    
    markId172 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "Assembly Constraints Update")
    
    addComponentBuilder18.SetComponentAnchor(NXOpen.Assemblies.ProductInterface.InterfaceObject.Null)
    
    addComponentBuilder18.SetInitialLocationType(NXOpen.Assemblies.AddComponentBuilder.LocationType.Snap)
    
    addComponentBuilder18.SetCount(1)
    
    addComponentBuilder18.SetScatterOption(True)
    
    addComponentBuilder18.ReferenceSet = "Unknown"
    
    addComponentBuilder18.Layer = -1
    
    addComponentBuilder18.ReferenceSet = "Use Model"
    
    addComponentBuilder18.Layer = -1
    
    partstouse18 = [NXOpen.BasePart.Null] * 1 
    partstouse18[0] = part2
    addComponentBuilder18.SetPartsToAdd(partstouse18)
    
    productinterfaceobjects18 = addComponentBuilder18.GetAllProductInterfaceObjects()
    
    coordinates27 = NXOpen.Point3d(-57.127415439309061, -222.54905394370923, 0.0)
    point1030 = workPart.Points.CreatePoint(coordinates27)
    
    coordinates28 = NXOpen.Point3d(-57.127415439309061, -222.54905394370923, 0.0)
    point1031 = workPart.Points.CreatePoint(coordinates28)
    
    origin27 = NXOpen.Point3d(-57.127415439309061, -222.54905394370923, 0.0)
    vector27 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    direction1016 = workPart.Directions.CreateDirection(origin27, vector27, NXOpen.SmartObject.UpdateOption.WithinModeling)
    
    origin28 = NXOpen.Point3d(-57.127415439309061, -222.54905394370923, 0.0)
    vector28 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    direction1017 = workPart.Directions.CreateDirection(origin28, vector28, NXOpen.SmartObject.UpdateOption.WithinModeling)
    
    xform15 = workPart.Xforms.CreateXformByPointXDirZDir(point1031, direction1017, direction1016, NXOpen.SmartObject.UpdateOption.WithinModeling, 0.625)
    
    cartesianCoordinateSystem15 = workPart.CoordinateSystems.CreateCoordinateSystem(xform15, NXOpen.SmartObject.UpdateOption.WithinModeling)
    
    point1032 = NXOpen.Point3d(-57.127415439309061, -222.54905394370923, 0.0)
    orientation15 = NXOpen.Matrix3x3()
    
    orientation15.Xx = 1.0
    orientation15.Xy = 0.0
    orientation15.Xz = 0.0
    orientation15.Yx = 0.0
    orientation15.Yy = 1.0
    orientation15.Yz = 0.0
    orientation15.Zx = 0.0
    orientation15.Zy = 0.0
    orientation15.Zz = 1.0
    addComponentBuilder18.SetInitialLocationAndOrientation(point1032, orientation15)
    
    movableObjects36 = [NXOpen.NXObject.Null] * 1 
    component25 = workPart.ComponentAssembly.RootComponent.FindObject("COMPONENT connect 1")
    movableObjects36[0] = component25
    componentNetwork31.SetMovingGroup(movableObjects36)
    
    markId173 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Visible, "Transform Origin")
    
    loaded59 = componentNetwork31.IsReferencedGeometryLoaded()
    
    componentNetwork31.BeginDrag()
    
    point1033 = NXOpen.Point3d(-57.127415439309061, -157.54905446524987, -30.042568221688271)
    direction1018 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork31.DragByRay(point1033, direction1018)
    
    point1034 = NXOpen.Point3d(-57.127415439309061, -161.94317452848645, -9.5448053159674657)
    direction1019 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork31.DragByRay(point1034, direction1019)
    
    point1035 = NXOpen.Point3d(-57.127415439309061, -164.09231918860073, -3.0973713356246293)
    direction1020 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork31.DragByRay(point1035, direction1020)
    
    point1036 = NXOpen.Point3d(-57.127415439309061, -166.67129278073782, 3.7798915767410364)
    direction1021 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork31.DragByRay(point1036, direction1021)
    
    point1037 = NXOpen.Point3d(-57.127415439309061, -167.53095064478356, 7.2185230329238834)
    direction1022 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork31.DragByRay(point1037, direction1022)
    
    point1038 = NXOpen.Point3d(-57.127415439309061, -169.25026637287499, 11.08698342112956)
    direction1023 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork31.DragByRay(point1038, direction1023)
    
    point1039 = NXOpen.Point3d(-57.127415439309061, -170.10992423692073, 12.806299149221005)
    direction1024 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork31.DragByRay(point1039, direction1024)
    
    point1040 = NXOpen.Point3d(-57.127415439309061, -171.39941103298926, 15.385272741358122)
    direction1025 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork31.DragByRay(point1040, direction1025)
    
    point1041 = NXOpen.Point3d(-57.127415439309061, -172.25906889703501, 17.534417401472396)
    direction1026 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork31.DragByRay(point1041, direction1026)
    
    point1042 = NXOpen.Point3d(-57.127415439309061, -173.97838462512641, 20.973048857655243)
    direction1027 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork31.DragByRay(point1042, direction1027)
    
    point1043 = NXOpen.Point3d(-57.127415439309061, -175.69770035321784, 23.552022449792389)
    direction1028 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork31.DragByRay(point1043, direction1028)
    
    point1044 = NXOpen.Point3d(-57.127415439309061, -176.12752928524071, 25.271338177883791)
    direction1029 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork31.DragByRay(point1044, direction1029)
    
    point1045 = NXOpen.Point3d(-57.127415439309061, -177.41701608130924, 27.850311770020937)
    direction1030 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork31.DragByRay(point1045, direction1030)
    
    point1046 = NXOpen.Point3d(-57.127415439309061, -178.70650287737786, 29.999456430135226)
    direction1031 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork31.DragByRay(point1046, direction1031)
    
    point1047 = NXOpen.Point3d(-57.127415439309061, -179.99598967344639, 31.718772158226628)
    direction1032 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork31.DragByRay(point1047, direction1032)
    
    point1048 = NXOpen.Point3d(-57.127415439309061, -180.42581860546926, 32.578430022272329)
    direction1033 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork31.DragByRay(point1048, direction1033)
    
    point1049 = NXOpen.Point3d(-57.127415439309061, -180.42581860546926, 33.43808788631803)
    direction1034 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork31.DragByRay(point1049, direction1034)
    
    point1050 = NXOpen.Point3d(-57.127415439309061, -181.71530540153782, 36.446890410478048)
    direction1035 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork31.DragByRay(point1050, direction1035)
    
    point1051 = NXOpen.Point3d(-57.127415439309061, -181.71530540153782, 36.446890410478048)
    direction1036 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork31.DragByRay(point1051, direction1036)
    
    point1052 = NXOpen.Point3d(-57.127415439309061, -181.71530540153782, 36.446890410478048)
    direction1037 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork31.DragByRay(point1052, direction1037)
    
    componentNetwork31.EndDrag()
    
    componentNetwork31.ResetDisplay()
    
    componentNetwork31.ApplyToModel()
    
    scaleAboutPoint154 = NXOpen.Point3d(-94.347450579017178, -74.790234171977062, 0.0)
    viewCenter154 = NXOpen.Point3d(94.347450579017035, 74.790234171977133, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(0.80000000000000004, scaleAboutPoint154, viewCenter154)
    
    scaleAboutPoint155 = NXOpen.Point3d(-123.30717487405715, -96.17422354011417, 0.0)
    viewCenter155 = NXOpen.Point3d(123.30717487405707, 96.174223540114255, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(0.80000000000000004, scaleAboutPoint155, viewCenter155)
    
    scaleAboutPoint156 = NXOpen.Point3d(-154.13396859257131, -120.21777942514274, 0.0)
    viewCenter156 = NXOpen.Point3d(154.13396859257136, 120.21777942514285, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(0.80000000000000004, scaleAboutPoint156, viewCenter156)
    
    scaleAboutPoint157 = NXOpen.Point3d(-53.308861686428578, -146.0746761171427, 0.0)
    viewCenter157 = NXOpen.Point3d(53.308861686428578, 146.07467611714284, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(1.25, scaleAboutPoint157, viewCenter157)
    
    scaleAboutPoint158 = NXOpen.Point3d(-41.303873936571399, -115.51652548114276, 0.0)
    viewCenter158 = NXOpen.Point3d(41.303873936571343, 115.51652548114288, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(1.25, scaleAboutPoint158, viewCenter158)
    
    scaleAboutPoint159 = NXOpen.Point3d(-30.893954489142839, -92.413220384914183, 0.0)
    viewCenter159 = NXOpen.Point3d(30.893954489142839, 92.413220384914311, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(1.25, scaleAboutPoint159, viewCenter159)
    
    scaleAboutPoint160 = NXOpen.Point3d(-24.285334659291408, -73.50074737590846, 0.0)
    viewCenter160 = NXOpen.Point3d(24.285334659291408, 73.50074737590856, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(1.25, scaleAboutPoint160, viewCenter160)
    
    scaleAboutPoint161 = NXOpen.Point3d(-51.063677124315376, -59.832187337581637, 0.0)
    viewCenter161 = NXOpen.Point3d(51.063677124315348, 59.83218733758175, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(1.25, scaleAboutPoint161, viewCenter161)
    
    scaleAboutPoint162 = NXOpen.Point3d(-40.850941699452306, -47.865749870065287, 0.0)
    viewCenter162 = NXOpen.Point3d(40.850941699452349, 47.865749870065379, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(1.25, scaleAboutPoint162, viewCenter162)
    
    scaleAboutPoint163 = NXOpen.Point3d(-32.680753359561848, -38.292599896052252, 0.0)
    viewCenter163 = NXOpen.Point3d(32.680753359561848, 38.292599896052323, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(1.25, scaleAboutPoint163, viewCenter163)
    
    scaleAboutPoint164 = NXOpen.Point3d(-26.144602687649488, -30.634079916841799, 0.0)
    viewCenter164 = NXOpen.Point3d(26.144602687649456, 30.634079916841856, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(1.25, scaleAboutPoint164, viewCenter164)
    
    scaleAboutPoint165 = NXOpen.Point3d(-20.91568215011959, -24.507263933473428, 0.0)
    viewCenter165 = NXOpen.Point3d(20.915682150119569, 24.507263933473485, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(1.25, scaleAboutPoint165, viewCenter165)
    
    scaleAboutPoint166 = NXOpen.Point3d(-15.605774964533706, -19.718488222334951, 0.0)
    viewCenter166 = NXOpen.Point3d(15.605774964533623, 19.71848822233498, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(1.25, scaleAboutPoint166, viewCenter166)
    
    scaleAboutPoint167 = NXOpen.Point3d(-12.214194990292084, -15.77479057786795, 0.0)
    viewCenter167 = NXOpen.Point3d(12.214194990292039, 15.774790577867988, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(1.25, scaleAboutPoint167, viewCenter167)
    
    scaleAboutPoint168 = NXOpen.Point3d(-9.7713559922336639, -12.619832462294351, 0.0)
    viewCenter168 = NXOpen.Point3d(9.7713559922336177, 12.619832462294386, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(1.25, scaleAboutPoint168, viewCenter168)
    
    scaleAboutPoint169 = NXOpen.Point3d(-7.8170847937869414, -10.095865969835476, 0.0)
    viewCenter169 = NXOpen.Point3d(7.8170847937868837, 10.095865969835513, 0.0)
    workPart.ModelingViews.WorkView.ZoomAboutPoint(1.25, scaleAboutPoint169, viewCenter169)
    
    markId174 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Visible, "Transform Origin")
    
    loaded60 = componentNetwork31.IsReferencedGeometryLoaded()
    
    componentNetwork31.BeginDrag()
    
    point1053 = NXOpen.Point3d(-57.127415439309061, -181.71530540153782, 36.446890410478048)
    direction1038 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork31.DragByRay(point1053, direction1038)
    
    point1054 = NXOpen.Point3d(-57.127415439309061, -182.12004875921352, 35.972795651800368)
    direction1039 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork31.DragByRay(point1054, direction1039)
    
    point1055 = NXOpen.Point3d(-57.127415439309061, -182.16620128936134, 35.972795651800368)
    direction1040 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork31.DragByRay(point1055, direction1040)
    
    point1056 = NXOpen.Point3d(-57.127415439309061, -182.30465887980478, 35.972795651800368)
    direction1041 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork31.DragByRay(point1056, direction1041)
    
    point1057 = NXOpen.Point3d(-57.127415439309061, -182.62772659083953, 35.926643121652546)
    direction1042 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork31.DragByRay(point1057, direction1042)
    
    point1058 = NXOpen.Point3d(-57.127415439309061, -182.90464177172643, 35.83433806135691)
    direction1043 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork31.DragByRay(point1058, direction1043)
    
    point1059 = NXOpen.Point3d(-57.127415439309061, -182.99694683202208, 35.742033001061273)
    direction1044 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork31.DragByRay(point1059, direction1044)
    
    point1060 = NXOpen.Point3d(-57.127415439309061, -183.0430993621699, 35.695880470913451)
    direction1045 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork31.DragByRay(point1060, direction1045)
    
    point1061 = NXOpen.Point3d(-57.127415439309061, -183.13540442246554, 35.649727940765629)
    direction1046 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork31.DragByRay(point1061, direction1046)
    
    point1062 = NXOpen.Point3d(-57.127415439309061, -183.13540442246554, 35.603575410617815)
    direction1047 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork31.DragByRay(point1062, direction1047)
    
    point1063 = NXOpen.Point3d(-57.127415439309061, -183.13540442246554, 35.418965290026534)
    direction1048 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork31.DragByRay(point1063, direction1048)
    
    point1064 = NXOpen.Point3d(-57.127415439309061, -181.56621839743968, 35.37281275987872)
    direction1049 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork31.DragByRay(point1064, direction1049)
    
    point1065 = NXOpen.Point3d(-57.127415439309061, -180.73547285477892, 35.37281275987872)
    direction1050 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork31.DragByRay(point1065, direction1050)
    
    point1066 = NXOpen.Point3d(-57.127415439309061, -180.50471020403984, 35.37281275987872)
    direction1051 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork31.DragByRay(point1066, direction1051)
    
    point1067 = NXOpen.Point3d(-57.127415439309061, -180.27394755330073, 35.418965290026534)
    direction1052 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork31.DragByRay(point1067, direction1052)
    
    point1068 = NXOpen.Point3d(-57.127415439309061, -180.13548996285726, 35.511270350322178)
    direction1053 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork31.DragByRay(point1068, direction1053)
    
    point1069 = NXOpen.Point3d(-57.127415439309061, -180.04318490256165, 35.557422880469993)
    direction1054 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork31.DragByRay(point1069, direction1054)
    
    point1070 = NXOpen.Point3d(-57.127415439309061, -179.950879842266, 35.649727940765629)
    direction1055 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork31.DragByRay(point1070, direction1055)
    
    point1071 = NXOpen.Point3d(-57.127415439309061, -179.85857478197036, 35.695880470913451)
    direction1056 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork31.DragByRay(point1071, direction1056)
    
    point1072 = NXOpen.Point3d(-57.127415439309061, -179.81242225182254, 35.742033001061273)
    direction1057 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork31.DragByRay(point1072, direction1057)
    
    point1073 = NXOpen.Point3d(-57.127415439309061, -179.67396466137907, 35.83433806135691)
    direction1058 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork31.DragByRay(point1073, direction1058)
    
    point1074 = NXOpen.Point3d(-57.127415439309061, -179.62781213123125, 35.926643121652546)
    direction1059 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork31.DragByRay(point1074, direction1059)
    
    point1075 = NXOpen.Point3d(-57.127415439309061, -179.58165960108343, 35.926643121652546)
    direction1060 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork31.DragByRay(point1075, direction1060)
    
    point1076 = NXOpen.Point3d(-57.127415439309061, -179.58165960108343, 35.972795651800368)
    direction1061 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork31.DragByRay(point1076, direction1061)
    
    point1077 = NXOpen.Point3d(-57.127415439309061, -179.53550707093561, 36.01894818194819)
    direction1062 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork31.DragByRay(point1077, direction1062)
    
    point1078 = NXOpen.Point3d(-57.127415439309061, -179.44320201063999, 36.111253242243826)
    direction1063 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork31.DragByRay(point1078, direction1063)
    
    point1079 = NXOpen.Point3d(-57.127415439309061, -179.44320201063999, 36.111253242243826)
    direction1064 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork31.DragByRay(point1079, direction1064)
    
    point1080 = NXOpen.Point3d(-57.127415439309061, -179.44320201063999, 36.157405772391648)
    direction1065 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork31.DragByRay(point1080, direction1065)
    
    point1081 = NXOpen.Point3d(-57.127415439309061, -179.44320201063999, 36.157405772391648)
    direction1066 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork31.DragByRay(point1081, direction1066)
    
    point1082 = NXOpen.Point3d(-57.127415439309061, -179.39704948049217, 36.203558302539463)
    direction1067 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork31.DragByRay(point1082, direction1067)
    
    point1083 = NXOpen.Point3d(-57.127415439309061, -179.39704948049217, 36.203558302539463)
    direction1068 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork31.DragByRay(point1083, direction1068)
    
    point1084 = NXOpen.Point3d(-57.127415439309061, -179.35089695034435, 36.249710832687285)
    direction1069 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork31.DragByRay(point1084, direction1069)
    
    point1085 = NXOpen.Point3d(-57.127415439309061, -179.35089695034435, 36.249710832687285)
    direction1070 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork31.DragByRay(point1085, direction1070)
    
    point1086 = NXOpen.Point3d(-57.127415439309061, -179.35089695034435, 36.295863362835107)
    direction1071 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork31.DragByRay(point1086, direction1071)
    
    point1087 = NXOpen.Point3d(-57.127415439309061, -179.35089695034435, 36.295863362835107)
    direction1072 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork31.DragByRay(point1087, direction1072)
    
    point1088 = NXOpen.Point3d(-57.127415439309061, -179.39704948049217, 36.295863362835107)
    direction1073 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork31.DragByRay(point1088, direction1073)
    
    point1089 = NXOpen.Point3d(-57.127415439309061, -179.39704948049217, 36.295863362835107)
    direction1074 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork31.DragByRay(point1089, direction1074)
    
    point1090 = NXOpen.Point3d(-57.127415439309061, -179.39704948049217, 36.295863362835107)
    direction1075 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork31.DragByRay(point1090, direction1075)
    
    point1091 = NXOpen.Point3d(-57.127415439309061, -179.39704948049217, 36.295863362835107)
    direction1076 = NXOpen.Vector3d(1.0, 0.0, 0.0)
    componentNetwork31.DragByRay(point1091, direction1076)
    
    componentNetwork31.EndDrag()
    
    componentNetwork31.ResetDisplay()
    
    componentNetwork31.ApplyToModel()
    
    # ----------------------------------------------
    #   Menu: Orient View->Front
    # ----------------------------------------------
    workPart.ModelingViews.WorkView.Orient(NXOpen.View.Canned.Front, NXOpen.View.ScaleAdjustment.Fit)
    
    # ----------------------------------------------
    #   Menu: Rendering Style->Shaded with Edges
    # ----------------------------------------------
    workPart.ModelingViews.WorkView.RenderingStyle = NXOpen.View.RenderingStyleType.ShadedWithEdges
    
    markId175 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Visible, "Translate Along X-axis")
    
    loaded61 = componentNetwork31.IsReferencedGeometryLoaded()
    
    componentNetwork31.BeginDrag()
    
    translation249 = NXOpen.Vector3d(4.0, 0.0, 0.0)
    componentNetwork31.DragByTranslation(translation249)
    
    translation250 = NXOpen.Vector3d(6.0, 0.0, 0.0)
    componentNetwork31.DragByTranslation(translation250)
    
    translation251 = NXOpen.Vector3d(8.0, 0.0, 0.0)
    componentNetwork31.DragByTranslation(translation251)
    
    translation252 = NXOpen.Vector3d(9.0, 0.0, 0.0)
    componentNetwork31.DragByTranslation(translation252)
    
    translation253 = NXOpen.Vector3d(12.0, 0.0, 0.0)
    componentNetwork31.DragByTranslation(translation253)
    
    translation254 = NXOpen.Vector3d(14.0, 0.0, 0.0)
    componentNetwork31.DragByTranslation(translation254)
    
    translation255 = NXOpen.Vector3d(15.0, 0.0, 0.0)
    componentNetwork31.DragByTranslation(translation255)
    
    translation256 = NXOpen.Vector3d(16.0, 0.0, 0.0)
    componentNetwork31.DragByTranslation(translation256)
    
    translation257 = NXOpen.Vector3d(18.0, 0.0, 0.0)
    componentNetwork31.DragByTranslation(translation257)
    
    translation258 = NXOpen.Vector3d(19.0, 0.0, 0.0)
    componentNetwork31.DragByTranslation(translation258)
    
    translation259 = NXOpen.Vector3d(20.0, 0.0, 0.0)
    componentNetwork31.DragByTranslation(translation259)
    
    translation260 = NXOpen.Vector3d(21.0, 0.0, 0.0)
    componentNetwork31.DragByTranslation(translation260)
    
    translation261 = NXOpen.Vector3d(22.0, 0.0, 0.0)
    componentNetwork31.DragByTranslation(translation261)
    
    translation262 = NXOpen.Vector3d(24.0, 0.0, 0.0)
    componentNetwork31.DragByTranslation(translation262)
    
    translation263 = NXOpen.Vector3d(25.0, 0.0, 0.0)
    componentNetwork31.DragByTranslation(translation263)
    
    translation264 = NXOpen.Vector3d(26.0, 0.0, 0.0)
    componentNetwork31.DragByTranslation(translation264)
    
    translation265 = NXOpen.Vector3d(27.0, 0.0, 0.0)
    componentNetwork31.DragByTranslation(translation265)
    
    translation266 = NXOpen.Vector3d(28.0, 0.0, 0.0)
    componentNetwork31.DragByTranslation(translation266)
    
    translation267 = NXOpen.Vector3d(29.0, 0.0, 0.0)
    componentNetwork31.DragByTranslation(translation267)
    
    translation268 = NXOpen.Vector3d(30.0, 0.0, 0.0)
    componentNetwork31.DragByTranslation(translation268)
    
    translation269 = NXOpen.Vector3d(32.0, 0.0, 0.0)
    componentNetwork31.DragByTranslation(translation269)
    
    translation270 = NXOpen.Vector3d(35.0, 0.0, 0.0)
    componentNetwork31.DragByTranslation(translation270)
    
    translation271 = NXOpen.Vector3d(36.0, 0.0, 0.0)
    componentNetwork31.DragByTranslation(translation271)
    
    translation272 = NXOpen.Vector3d(38.0, 0.0, 0.0)
    componentNetwork31.DragByTranslation(translation272)
    
    translation273 = NXOpen.Vector3d(40.0, 0.0, 0.0)
    componentNetwork31.DragByTranslation(translation273)
    
    translation274 = NXOpen.Vector3d(41.0, 0.0, 0.0)
    componentNetwork31.DragByTranslation(translation274)
    
    translation275 = NXOpen.Vector3d(42.0, 0.0, 0.0)
    componentNetwork31.DragByTranslation(translation275)
    
    translation276 = NXOpen.Vector3d(44.0, 0.0, 0.0)
    componentNetwork31.DragByTranslation(translation276)
    
    translation277 = NXOpen.Vector3d(46.0, 0.0, 0.0)
    componentNetwork31.DragByTranslation(translation277)
    
    translation278 = NXOpen.Vector3d(47.0, 0.0, 0.0)
    componentNetwork31.DragByTranslation(translation278)
    
    translation279 = NXOpen.Vector3d(48.0, 0.0, 0.0)
    componentNetwork31.DragByTranslation(translation279)
    
    translation280 = NXOpen.Vector3d(49.0, 0.0, 0.0)
    componentNetwork31.DragByTranslation(translation280)
    
    translation281 = NXOpen.Vector3d(50.0, 0.0, 0.0)
    componentNetwork31.DragByTranslation(translation281)
    
    translation282 = NXOpen.Vector3d(51.0, 0.0, 0.0)
    componentNetwork31.DragByTranslation(translation282)
    
    translation283 = NXOpen.Vector3d(52.0, 0.0, 0.0)
    componentNetwork31.DragByTranslation(translation283)
    
    translation284 = NXOpen.Vector3d(53.0, 0.0, 0.0)
    componentNetwork31.DragByTranslation(translation284)
    
    translation285 = NXOpen.Vector3d(54.0, 0.0, 0.0)
    componentNetwork31.DragByTranslation(translation285)
    
    translation286 = NXOpen.Vector3d(55.0, 0.0, 0.0)
    componentNetwork31.DragByTranslation(translation286)
    
    translation287 = NXOpen.Vector3d(56.0, 0.0, 0.0)
    componentNetwork31.DragByTranslation(translation287)
    
    translation288 = NXOpen.Vector3d(57.0, 0.0, 0.0)
    componentNetwork31.DragByTranslation(translation288)
    
    componentNetwork31.EndDrag()
    
    componentNetwork31.ResetDisplay()
    
    componentNetwork31.ApplyToModel()
    
    markId176 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "Add Component")
    
    theSession.DeleteUndoMark(markId176, None)
    
    markId177 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "Add Component")
    
    markId178 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "AddComponent on_apply")
    
    componentNetwork31.Solve()
    
    componentPositioner31.ClearNetwork()
    
    nErrs53 = theSession.UpdateManager.AddToDeleteList(componentNetwork31)
    
    nErrs54 = theSession.UpdateManager.DoUpdate(markId172)
    
    componentPositioner31.EndAssemblyConstraints()
    
    logicalobjects15 = addComponentBuilder18.GetLogicalObjectsHavingUnassignedRequiredAttributes()
    
    addComponentBuilder18.ComponentName = "CONNECT"
    
    nXObject16 = addComponentBuilder18.Commit()
    
    errorList15 = addComponentBuilder18.GetOperationFailures()
    
    errorList15.Dispose()
    theSession.DeleteUndoMark(markId177, None)
    
    theSession.SetUndoMarkName(markId171, "Add Component")
    
    addComponentBuilder18.Destroy()
    
    workPart.Points.DeletePoint(point1030)
    
    componentPositioner31.PrimaryArrangement = NXOpen.Assemblies.Arrangement.Null
    
    theSession.DeleteUndoMark(markId172, None)
    
    theSession.DeleteUndoMark(markId175, None)
    
    theSession.DeleteUndoMark(markId174, None)
    
    theSession.DeleteUndoMark(markId173, None)
    
    # ----------------------------------------------
    #   Menu: Assemblies->Component Position->Move Component...
    # ----------------------------------------------
    markId179 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Visible, "Start")
    
    componentPositioner32 = workPart.ComponentAssembly.Positioner
    
    componentPositioner32.ClearNetwork()
    
    componentPositioner32.PrimaryArrangement = arrangement1
    
    componentPositioner32.BeginMoveComponent()
    
    allowInterpartPositioning31 = theSession.Preferences.Assemblies.InterpartPositioning
    
    expression301 = workPart.Expressions.CreateSystemExpressionWithUnits("1.0", NXOpen.Unit.Null)
    
    expression302 = workPart.Expressions.CreateSystemExpressionWithUnits("1.0", unit1)
    
    expression303 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit1)
    
    expression304 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit2)
    
    expression305 = workPart.Expressions.CreateSystemExpressionWithUnits("1", NXOpen.Unit.Null)
    
    expression306 = workPart.Expressions.CreateSystemExpressionWithUnits("1.0", unit1)
    
    expression307 = workPart.Expressions.CreateSystemExpressionWithUnits("0", unit1)
    
    expression308 = workPart.Expressions.CreateSystemExpressionWithUnits("0", unit2)
    
    network32 = componentPositioner32.EstablishNetwork()
    
    componentNetwork32 = network32
    componentNetwork32.MoveObjectsState = True
    
    componentNetwork32.DisplayComponent = NXOpen.Assemblies.Component.Null
    
    componentNetwork32.NetworkArrangementsMode = NXOpen.Positioning.ComponentNetwork.ArrangementsMode.Existing
    
    expression309 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit1)
    
    expression310 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit1)
    
    expression311 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit1)
    
    expression312 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit1)
    
    expression313 = workPart.Expressions.CreateSystemExpressionWithUnits("0.0", unit2)
    
    componentNetwork32.RemoveAllConstraints()
    
    movableObjects37 = [NXOpen.NXObject.Null] * 1 
    component26 = nXObject15
    movableObjects37[0] = component26
    componentNetwork32.SetMovingGroup(movableObjects37)
    
    componentNetwork32.Solve()
    
    theSession.SetUndoMarkName(markId179, "Move Component Dialog")
    
    componentNetwork32.MoveObjectsState = True
    
    componentNetwork32.NetworkArrangementsMode = NXOpen.Positioning.ComponentNetwork.ArrangementsMode.Existing
    
    markId180 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "Move Component Update")
    
    markId181 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Visible, "Translate Along X-axis")
    
    loaded62 = componentNetwork32.IsReferencedGeometryLoaded()
    
    componentNetwork32.BeginDrag()
    
    translation289 = NXOpen.Vector3d(39.0, 0.0, 0.0)
    componentNetwork32.DragByTranslation(translation289)
    
    translation290 = NXOpen.Vector3d(50.0, 0.0, 0.0)
    componentNetwork32.DragByTranslation(translation290)
    
    translation291 = NXOpen.Vector3d(60.0, 0.0, 0.0)
    componentNetwork32.DragByTranslation(translation291)
    
    translation292 = NXOpen.Vector3d(67.0, 0.0, 0.0)
    componentNetwork32.DragByTranslation(translation292)
    
    translation293 = NXOpen.Vector3d(70.0, 0.0, 0.0)
    componentNetwork32.DragByTranslation(translation293)
    
    translation294 = NXOpen.Vector3d(73.0, 0.0, 0.0)
    componentNetwork32.DragByTranslation(translation294)
    
    translation295 = NXOpen.Vector3d(77.0, 0.0, 0.0)
    componentNetwork32.DragByTranslation(translation295)
    
    translation296 = NXOpen.Vector3d(80.0, 0.0, 0.0)
    componentNetwork32.DragByTranslation(translation296)
    
    translation297 = NXOpen.Vector3d(83.0, 0.0, 0.0)
    componentNetwork32.DragByTranslation(translation297)
    
    translation298 = NXOpen.Vector3d(87.0, 0.0, 0.0)
    componentNetwork32.DragByTranslation(translation298)
    
    translation299 = NXOpen.Vector3d(90.0, 0.0, 0.0)
    componentNetwork32.DragByTranslation(translation299)
    
    translation300 = NXOpen.Vector3d(94.0, 0.0, 0.0)
    componentNetwork32.DragByTranslation(translation300)
    
    translation301 = NXOpen.Vector3d(96.0, 0.0, 0.0)
    componentNetwork32.DragByTranslation(translation301)
    
    translation302 = NXOpen.Vector3d(97.0, 0.0, 0.0)
    componentNetwork32.DragByTranslation(translation302)
    
    translation303 = NXOpen.Vector3d(98.0, 0.0, 0.0)
    componentNetwork32.DragByTranslation(translation303)
    
    translation304 = NXOpen.Vector3d(99.0, 0.0, 0.0)
    componentNetwork32.DragByTranslation(translation304)
    
    translation305 = NXOpen.Vector3d(100.0, 0.0, 0.0)
    componentNetwork32.DragByTranslation(translation305)
    
    translation306 = NXOpen.Vector3d(101.0, 0.0, 0.0)
    componentNetwork32.DragByTranslation(translation306)
    
    translation307 = NXOpen.Vector3d(102.0, 0.0, 0.0)
    componentNetwork32.DragByTranslation(translation307)
    
    translation308 = NXOpen.Vector3d(105.0, 0.0, 0.0)
    componentNetwork32.DragByTranslation(translation308)
    
    translation309 = NXOpen.Vector3d(107.0, 0.0, 0.0)
    componentNetwork32.DragByTranslation(translation309)
    
    translation310 = NXOpen.Vector3d(109.0, 0.0, 0.0)
    componentNetwork32.DragByTranslation(translation310)
    
    translation311 = NXOpen.Vector3d(110.0, 0.0, 0.0)
    componentNetwork32.DragByTranslation(translation311)
    
    translation312 = NXOpen.Vector3d(112.0, 0.0, 0.0)
    componentNetwork32.DragByTranslation(translation312)
    
    translation313 = NXOpen.Vector3d(114.0, 0.0, 0.0)
    componentNetwork32.DragByTranslation(translation313)
    
    translation314 = NXOpen.Vector3d(115.0, 0.0, 0.0)
    componentNetwork32.DragByTranslation(translation314)
    
    translation315 = NXOpen.Vector3d(116.0, 0.0, 0.0)
    componentNetwork32.DragByTranslation(translation315)
    
    translation316 = NXOpen.Vector3d(117.0, 0.0, 0.0)
    componentNetwork32.DragByTranslation(translation316)
    
    translation317 = NXOpen.Vector3d(118.0, 0.0, 0.0)
    componentNetwork32.DragByTranslation(translation317)
    
    translation318 = NXOpen.Vector3d(119.0, 0.0, 0.0)
    componentNetwork32.DragByTranslation(translation318)
    
    translation319 = NXOpen.Vector3d(120.0, 0.0, 0.0)
    componentNetwork32.DragByTranslation(translation319)
    
    translation320 = NXOpen.Vector3d(119.0, 0.0, 0.0)
    componentNetwork32.DragByTranslation(translation320)
    
    translation321 = NXOpen.Vector3d(118.0, 0.0, 0.0)
    componentNetwork32.DragByTranslation(translation321)
    
    translation322 = NXOpen.Vector3d(119.0, 0.0, 0.0)
    componentNetwork32.DragByTranslation(translation322)
    
    componentNetwork32.EndDrag()
    
    componentNetwork32.ResetDisplay()
    
    componentNetwork32.ApplyToModel()
    
    markId182 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "Move Component")
    
    theSession.DeleteUndoMark(markId182, None)
    
    markId183 = theSession.SetUndoMark(NXOpen.Session.MarkVisibility.Invisible, "Move Component")
    
    componentNetwork32.Solve()
    
    componentPositioner32.ClearNetwork()
    
    nErrs55 = theSession.UpdateManager.AddToDeleteList(componentNetwork32)
    
    componentPositioner32.DeleteNonPersistentConstraints()
    
    nErrs56 = theSession.UpdateManager.DoUpdate(markId180)
    
    theSession.DeleteUndoMark(markId183, None)
    
    theSession.SetUndoMarkName(markId179, "Move Component")
    
    componentPositioner32.EndMoveComponent()
    
    componentPositioner32.PrimaryArrangement = NXOpen.Assemblies.Arrangement.Null
    
    theSession.DeleteUndoMarksUpToMark(markId180, None, False)
    
    # ----------------------------------------------
    #   Menu: Orient View->Isometric
    # ----------------------------------------------
    workPart.ModelingViews.WorkView.Orient(NXOpen.View.Canned.Isometric, NXOpen.View.ScaleAdjustment.Fit)
    
    # ----------------------------------------------
    #   Menu: Tools->Journal->Stop Recording
    # ----------------------------------------------
    
if __name__ == '__main__':
    main()













