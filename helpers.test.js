describe("Utilities test (with setup and tear-down)", function() {
    beforeEach(function () {
      billAmtInput.value = 100;
      tipAmtInput.value = 20;
      submitPaymentInfo();
    });
  
    it('should sum total tip amount of all payments on sumPaymentTotal()', function () {
      expect(sumPaymentTotal('tipAmt')).toEqual(20);
  
      billAmtInput.value = 200;
      tipAmtInput.value = 15;
  
      submitPaymentInfo();
  
      expect(sumPaymentTotal('tipAmt')).toEqual(35);
    });
  
    it('should sum total bill amount of all payments on sumPaymentTotal()', function () {
      expect(sumPaymentTotal('billAmt')).toEqual(100);
  
      billAmtInput.value = 400;
      tipAmtInput.value = 40;
  
      submitPaymentInfo();
  
      expect(sumPaymentTotal('billAmt')).toEqual(500);
    });
  
    it('should sum total tip percent on sumPaymentTotal()', function () {
      expect(sumPaymentTotal('tipPercent')).toEqual(20);
  
      billAmtInput.value = 100;
      tipAmtInput.value = 20;
  
      submitPaymentInfo();
  
      expect(sumPaymentTotal('tipPercent')).toEqual(40);
    });
  
    it('should sum tip percent on calculateTipPercent()', function () {
      expect(calculateTipPercent(500, 20)).toEqual(4);
      expect(calculateTipPercent(50, 30)).toEqual(60);
    });
  
    it('should generate new td from value and append to tr on appendTd(tr, value)', function () {
      let newTr = document.createElement('tr');
  
      appendTd(newTr, 'beans');
  
      expect(newTr.children.length).toEqual(1);
      expect(newTr.firstChild.innerHTML).toEqual('beans');
    });
  
  
    afterEach(function() {
      billAmtInput.value = '';
      tipAmtInput.value = '';
      paymentTbody.innerHTML = '';
      summaryTds[0].innerHTML = '';
      summaryTds[1].innerHTML = '';
      summaryTds[2].innerHTML = '';
      serverTbody.innerHTML = '';
      allPayments = {};
      paymentId = 0;
    });
  });