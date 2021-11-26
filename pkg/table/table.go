package table

import (
	"fmt"
	"github.com/olekukonko/tablewriter"
	"os"
	"reflect"
)

// PrintStruct prints a table of the given struct
func PrintStruct(in interface{}, tags ...string) {
	if in == nil {
		return
	}

	rows := rows(in, tags...)
	table := tablewriter.NewWriter(os.Stdout)
	table.SetHeader(append([]string{"Name", "Value"}, tags...))
	table.SetAlignment(tablewriter.ALIGN_LEFT)

	for _, v := range rows {
		table.Append(v)
	}
	table.Render() // Send output
}

// rows returns a slice of strings representing the struct fields
func rows(v interface{}, tags ...string) [][]string {
	t := reflect.TypeOf(v).Elem()
	r := reflect.ValueOf(v)

	rows := make([][]string, 0)

	for i := 0; i < t.NumField(); i++ {
		row := make([]string, 0)
		field := t.Field(i)
		row = append(row,
			field.Name,
			fmt.Sprint(reflect.Indirect(r).FieldByName(field.Name)),
		)

		for _, v := range tags {
			column := field.Tag.Get(v)
			row = append(row, column)
		}
		rows = append(rows, row)
	}
	return rows
}
