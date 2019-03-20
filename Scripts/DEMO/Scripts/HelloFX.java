import javafx.application.Application;
import javafx.stage.Stage;
import javafx.scene.layout.GridPane;
import javafx.scene.Scene;
import javafx.scene.control.*;

public class HelloFX extends Application{
	public void start(Stage stage) throws Exception{
		stage.setTitle("Hello You");
		stage.setWidth(500);
		stage.setHeight(500);
		// Create root node
		GridPane pane = new GridPane();
		pane.setHgap(10);
		pane.setVgap(20);
		
		Label lblName = new Label("Name:");
		pane.add(lblName,0,0);
		TextField txtname = new TextField();
		pane.add(txtname, 1, 0);
		
		
		Label lblage = new Label("Age:");
		pane.add(lblage,1,0);
		TextField txtage = new TextField();
		pane.add(txtage, 1, 1);
		
		Button clickbttn = new Button("Click");
		pane.add(clickbttn, 1,2);
		
		// Create main scene and link it with the stage
		
		Scene scene = new Scene(pane);
		stage.setScene(scene);
		// Call the show method for stage
		stage.show();
	}
	public static void main (String[] args){
		launch (args);
	}
}