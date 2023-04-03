"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const aws_cdk_lib_1 = require("aws-cdk-lib");
const integ_tests_alpha_1 = require("@aws-cdk/integ-tests-alpha");
const iam = require("aws-cdk-lib/aws-iam");
const app = new aws_cdk_lib_1.App();
const stack = new aws_cdk_lib_1.Stack(app, 'integ-principal-with-conditions');
const basePrincipal = new iam.AnyPrincipal();
const principal = new iam.PrincipalWithConditions(basePrincipal, {
    StringLike: { 'aws:username': 'foo-*' },
});
principal.addCondition('StringLike', { 'aws:PrincipalTag/owner': 'foo' });
principal.addCondition('Bool', { 'aws:MultiFactorAuthPresent': 'true' });
new iam.Role(stack, 'TestRole', {
    assumedBy: principal,
});
new integ_tests_alpha_1.IntegTest(app, 'PrincipalWithCondition', {
    testCases: [stack],
});
app.synth();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZWcucHJpbmNpcGFsLXdpdGgtY29uZGl0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImludGVnLnByaW5jaXBhbC13aXRoLWNvbmRpdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2Q0FBeUM7QUFDekMsa0VBQXVEO0FBQ3ZELDJDQUEyQztBQUUzQyxNQUFNLEdBQUcsR0FBRyxJQUFJLGlCQUFHLEVBQUUsQ0FBQztBQUN0QixNQUFNLEtBQUssR0FBRyxJQUFJLG1CQUFLLENBQUMsR0FBRyxFQUFFLGlDQUFpQyxDQUFDLENBQUM7QUFFaEUsTUFBTSxhQUFhLEdBQUcsSUFBSSxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7QUFDN0MsTUFBTSxTQUFTLEdBQUcsSUFBSSxHQUFHLENBQUMsdUJBQXVCLENBQUMsYUFBYSxFQUFFO0lBQy9ELFVBQVUsRUFBRSxFQUFFLGNBQWMsRUFBRSxPQUFPLEVBQUU7Q0FDeEMsQ0FBQyxDQUFDO0FBQ0gsU0FBUyxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsRUFBRSx3QkFBd0IsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0FBQzFFLFNBQVMsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztBQUV6RSxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRTtJQUM5QixTQUFTLEVBQUUsU0FBUztDQUNyQixDQUFDLENBQUM7QUFHSCxJQUFJLDZCQUFTLENBQUMsR0FBRyxFQUFFLHdCQUF3QixFQUFFO0lBQzNDLFNBQVMsRUFBRSxDQUFDLEtBQUssQ0FBQztDQUNuQixDQUFDLENBQUM7QUFFSCxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHAsIFN0YWNrIH0gZnJvbSAnYXdzLWNkay1saWInO1xuaW1wb3J0IHsgSW50ZWdUZXN0IH0gZnJvbSAnQGF3cy1jZGsvaW50ZWctdGVzdHMtYWxwaGEnO1xuaW1wb3J0ICogYXMgaWFtIGZyb20gJ2F3cy1jZGstbGliL2F3cy1pYW0nO1xuXG5jb25zdCBhcHAgPSBuZXcgQXBwKCk7XG5jb25zdCBzdGFjayA9IG5ldyBTdGFjayhhcHAsICdpbnRlZy1wcmluY2lwYWwtd2l0aC1jb25kaXRpb25zJyk7XG5cbmNvbnN0IGJhc2VQcmluY2lwYWwgPSBuZXcgaWFtLkFueVByaW5jaXBhbCgpO1xuY29uc3QgcHJpbmNpcGFsID0gbmV3IGlhbS5QcmluY2lwYWxXaXRoQ29uZGl0aW9ucyhiYXNlUHJpbmNpcGFsLCB7XG4gIFN0cmluZ0xpa2U6IHsgJ2F3czp1c2VybmFtZSc6ICdmb28tKicgfSxcbn0pO1xucHJpbmNpcGFsLmFkZENvbmRpdGlvbignU3RyaW5nTGlrZScsIHsgJ2F3czpQcmluY2lwYWxUYWcvb3duZXInOiAnZm9vJyB9KTtcbnByaW5jaXBhbC5hZGRDb25kaXRpb24oJ0Jvb2wnLCB7ICdhd3M6TXVsdGlGYWN0b3JBdXRoUHJlc2VudCc6ICd0cnVlJyB9KTtcblxubmV3IGlhbS5Sb2xlKHN0YWNrLCAnVGVzdFJvbGUnLCB7XG4gIGFzc3VtZWRCeTogcHJpbmNpcGFsLFxufSk7XG5cblxubmV3IEludGVnVGVzdChhcHAsICdQcmluY2lwYWxXaXRoQ29uZGl0aW9uJywge1xuICB0ZXN0Q2FzZXM6IFtzdGFja10sXG59KTtcblxuYXBwLnN5bnRoKCk7XG4iXX0=