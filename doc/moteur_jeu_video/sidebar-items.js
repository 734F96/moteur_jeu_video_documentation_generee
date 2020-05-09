initSidebarItems({"enum":[["GameEvent",""],["LogicBehavior","Defines the logic behavior of the GameState"],["RenderBehavior","Defines the render behavior of the GameState"]],"mod":[["prelude","The elements needed to create a game"]],"struct":[["EventSender","a ressource to store GameEvent s and send them"],["Game","The Game structure It owns everything. When it created, it owns the EventLoop, but that one gets moved out uppon runing."],["GameState","A GameState contains a SPECS world, and can be stacked and popped out of the GameStateStack GameStates, in the game, have a logic to be run and their rendering to be done."],["GameStateStack","The GameStateStack contains a stack of the different active GameState, but also the inactives states and the registered ProtoGameState s"],["Lighting","A component to store a Light"],["Model","A component to store a Handle to a renderable Object"],["PhysicComponent","The component storing the physical properties of the entitie"],["ProtoState","A \"blueprint\" to build a GameState"],["Spatial","A component to store spatial informations"]]});