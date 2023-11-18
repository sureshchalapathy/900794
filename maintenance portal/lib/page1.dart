import 'dart:html';
import 'package:flutter/material.dart';
import 'package:mportal/api.dart';

class page1 extends StatelessWidget {
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
          appBar: AppBar(
            title: Text('Table Example'),
          ),
          body: Center(
            child: Column(children: <Widget>[
              Container(
                margin: EdgeInsets.all(20),
                child: Table(
                  defaultColumnWidth: FixedColumnWidth(120.0),
                  border: TableBorder.all(
                      color: Colors.black, style: BorderStyle.solid, width: 2),
                  children: [
                    TableRow(children: [
                      Column(children: [
                        Text('Portals', style: TextStyle(fontSize: 20.0))
                      ]),
                      Column(children: [
                        Text('Framework', style: TextStyle(fontSize: 20.0))
                      ]),
                      Column(children: [
                        Text('Marks', style: TextStyle(fontSize: 20.0))
                      ]),
                    ]),
                    TableRow(children: [
                      Column(children: [Text('Customer')]),
                      Column(children: [Text('Angular')]),
                      Column(children: [Text('99')]),
                    ]),
                    TableRow(children: [
                      Column(children: [Text('Maintenance')]),
                      Column(children: [Text('Flutter')]),
                      Column(children: [Text('97')]),
                    ]),
                    TableRow(children: [
                      Column(children: [Text('Shop Floor')]),
                      Column(children: [Text('Sap ui5')]),
                      Column(children: [Text('98')]),
                    ]),
                  ],
                ),
              ),
              ElevatedButton(
                  child: Text('NextPage'),
                  onPressed: () {
                    Navigator.push(context,
                        MaterialPageRoute(builder: (context) => apiscreen()));
                  }),
            ]),
          )),
    );
  }
}
